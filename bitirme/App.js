import React from "react";
import {
 TouchableOpacity, StyleSheet, Text, View,Modal,Alert,Image
} from "react-native";
import Home from './components/Happy.js';
import Constants from "expo-constants";
import * as SQLite from 'expo-sqlite';
import { AuthSession } from 'expo';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


const CLIENT_ID = '246a363415fd4bf4a47f3756e095656d';

const db = SQLite.openDatabase("db.db");

 class App1 extends React.Component {
	
  
	 static navigationOptions = {
headerStyle: {
backgroundColor: '#000000',
	 },
	 headerTintColor: '#fff',
headerTitleStyle: {
fontWeight: 'bold',
},}
	
  state = {
    text: null,
	name:null,
	id:null,
	userInfo: null,
    didError: false,
	visible:true,
  };

  componentDidMount() {
    db.transaction(tx => {
      tx.executeSql(
        "create table if not exists users (id integer primary key not null, value text unique key not null, name not null,uid text not null);"
      );
    });
  }
  
   handleSpotifyLogin = async () => {
    let redirectUrl = AuthSession.getRedirectUrl();
    let results = await AuthSession.startAsync({
      authUrl: `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(redirectUrl)}&scope=user-read-email&response_type=token`
    });
    if (results.type !== 'success') {
      console.log(results.type);
      this.setState({ didError: true });
    } else {
      const userInfo = await axios.get(`https://api.spotify.com/v1/me`, {
        headers: {
          "Authorization": `Bearer ${results.params.access_token}`
        }
      });
      this.setState({ userInfo: userInfo.data });
	  this.setState({ text: userInfo.data.email});
	  this.setState({ name: userInfo.data.display_name});
	  this.setState({ id: userInfo.data.id});
	  this.add(this.state.text, this.state.name,this.state.id);
    }
  };


  displayError = () => {
    return (
      <View style={styles.userInfo}>
        <Text style={styles.errorText}>
          There was an error, please try again.
        </Text>
      </View>
    );
  };
  
  add(text,name,id) {
    // is text empty?
    if (text === null || text === "") {
      return false;
    }
	

    db.transaction(
      tx => {
		tx.executeSql("DELETE FROM users WHERE value=? ", [text]);
		tx.executeSql("insert into users (value,uid,name) values (?, ?,?) ", [text,id,name]);
		tx.executeSql("select * from users", [], (_, { rows }) =>
          console.log(JSON.stringify(rows))
        );
	
      },
      
    );
  }
   setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  button(){
	  this.props.navigation.navigate('Profile' ,  {
              email: this.state.text,
			  name: this.state.name,
			  id: this.state.id,
            });
	  this.setState({visible:false});
  }

  displayResults = () => {
    { return this.state.userInfo ? (
	
    <Modal
          animationType="slide"
          transparent={false}
		  presentationStyle="pageSheet"
          visible={this.state.visible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Welcome {this.state.name}!</Text>
 
              <TouchableOpacity
                onPress={() => { this.button();
                }}
				>
                <Text>Hide Modal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

    ) : (
      <View style={styles.userInfo}>
        <Text style={styles.userInfoText}>
          Login to Spotify to see user data.
        </Text>
      </View>
    )}
  }

  render() {
    return (
      <View style={styles.container}>
        
        <TouchableOpacity
          style={styles.FacebookStyle}
          onPress={this.handleSpotifyLogin}
          disabled={this.state.userInfo ? true : false}
		  activeOpacity={0.5}
        >
          <Image
            source={{
              uri:
                'https://cdn.iconscout.com/icon/free/png-512/spotify-27-599180.png',
            }}
            style={styles.ImageIconStyle}
          />
           <View style={styles.SeparatorLine} />
          <Text style={styles.TextStyle}> Login Using Spotify </Text>
        </TouchableOpacity>
        {this.state.didError ?
          this.displayError() :
          this.displayResults()
        }
      </View>
    );
  }

 
}
const MainNavigator = createStackNavigator({
  Home: {screen: App1},
  Profile: {screen: Home},
});

const App = createAppContainer(MainNavigator);

 
export default App;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#000',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button: {
    backgroundColor: '#2FD566',
    padding: 20
  },
  buttonText: {
    color: '#000',
    fontSize: 20
  },
  userInfo: {
    height: 250,
    width: 200,
    alignItems: 'center',
  },
  userInfoText: {
    color: '#fff',
    fontSize: 18
  },
  errorText: {
    color: '#fff',
    fontSize: 18
  },
   FacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2FD566',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    width: 220,
    borderRadius: 5,
    margin: 5,
  },
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  TextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginRight: 20,
  },
  SeparatorLine: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },
});