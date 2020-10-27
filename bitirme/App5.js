import React, { Component } from 'react';

import { StyleSheet, TextInput, View, Alert, Button, Text,Image,WebView, TouchableOpacity, Platform, Linking,Dimensions, TouchableHighlight } from 'react-native';
import BottomNavigation, {
  IconTab,
  Badge
} from 'react-native-material-bottom-navigation'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import HomeScreen from './HomeScreen';
// Importing Stack Navigator library to add multiple activities.
import { StackNavigator } from 'react-navigation';
import { createStackNavigator, createAppContainer } from "react-navigation";
// Creating Login Activity.

class Register extends Component {

  // Setting up Login Activity title.
  static navigationOptions =
   {
      title: 'Login in',
   };

constructor(props) {

    super(props)

    this.state = {

      UserEmail: '',
      UserPassword: ''

    }
    this.state = { hidePassword: true }

  }

  managePasswordVisibility = () =>
  {
    this.setState({ hidePassword: !this.state.hidePassword });
  }

UserLoginFunction = () =>{

 const { UserEmail }  = this.state ;
 const { UserPassword }  = this.state ;


fetch('https://erayduratk.000webhostapp.com/User_Login.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({

    email: UserEmail,
    password: UserPassword

  })

}).then((response) => response.json())
      .then((responseJson) => {

        // If server response message same as Data Matched
       if(responseJson === 'Data Matched')
        {

            //Then open Profile activity and send user email to profile activity.
            this.props.navigation.navigate('Second', { Email: UserEmail });

        }
        else{

          Alert.alert(responseJson);
        }

      }).catch((error) => {
        console.error(error);
      });
  }
  validate = (text) => {
let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
if(reg.test(text) === false)
{
alert("Email is Not Correct e.g: abc@example.com");
this.setState({email:text})
return false;
  }
else {
  this.setState({email:text})
}
}
  render() {
    return (

<View style={styles.MainContainer}>

        <Text style= {styles.TextComponentStyle}>User Login Form</Text>

        <View style={styles.SectionStyle}>
        <Image
          source={{uri:'https://cdn0.iconfinder.com/data/icons/30_Free_Black_ToolBar_Icons/40/Black_Email.png',}}
          style={styles.ImageStyle}
        />

        <TextInput
          style={{ flex: 1 }}
          placeholder="Enter Your E-mail Here"
          onChangeText={UserEmail => this.setState({UserEmail})}
          underlineColorAndroid="transparent"
            onSubmitEditing={(text) => this.validate(text)}
        />
         </View>
         <View style = { styles.textBoxBtnHolder }>

                  <TextInput underlineColorAndroid = "transparent" placeholder="Enter Your Password Here" onChangeText={UserPassword => this.setState({UserPassword})} secureTextEntry = { this.state.hidePassword } style = { styles.textBox }/>
                  <TouchableOpacity activeOpacity = { 0.8 } style = { styles.visibilityBtn } onPress = { this.managePasswordVisibility }>
                    <Image source = { ( this.state.hidePassword ) ? require('./assets/download.jpg') : require('./assets/images.png') } style = { styles.btnImage } />
                  </TouchableOpacity>

          </View>
          <Text style={{color: 'blue', margin: 10}}
      onPress={() => Linking.openURL('https://www.google.co.in')}>
      Forgot Password?
    </Text>
        <Button title="Click Here To Login" onPress={this.UserLoginFunction} color="#2196F3" />




</View>

    );
  }
}

// Creating Login Activity.
class LoginActivity extends Component {

  // Setting up Login Activity title.
  static navigationOptions =
   {
      title: 'Sign in',
   };

constructor(props) {

    super(props)

    this.state = {
      Username: '',
      UserEmail: '',
      UserPassword: ''

    }
      this.state = { hidePassword: true }
  }
    managePasswordVisibility = () =>
    {
      this.setState({ hidePassword: !this.state.hidePassword });
    }

UserLoginFunction = () =>{

 const { UserEmail }  = this.state ;
 const { UserPassword }  = this.state ;
 const { Username }  = this.state ;

fetch('https://erayduratk.000webhostapp.com/send.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: UserEmail,
    password: UserPassword,
    name: Username  })

})
this.props.navigation.navigate('Second', { name: Username });
  }
  validate = (text) => {
let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
if(reg.test(text) === false)
{
alert("Email is Not Correct e.g: abc@example.com");
this.setState({email:text})
return false;
  }
else {
  this.setState({email:text})
}
}

  render() {
    return (

<View style={styles.MainContainer}>
          <Text style= {styles.TextComponentStyle}>Sign in</Text>
          <View style={styles.SectionStyle}>
          <Image
            source={{uri:'http://aboutreact.com/wp-content/uploads/2018/08/user.png',}}
            style={styles.ImageStyle}
          />

          <TextInput
            style={{ flex: 1 }}
            placeholder="Enter Your Name Here"
            onChangeText={Username => this.setState({Username})}
            underlineColorAndroid="transparent"
          />
           </View>
           <View style={styles.SectionStyle}>
           <Image
             source={{uri:'https://cdn0.iconfinder.com/data/icons/30_Free_Black_ToolBar_Icons/40/Black_Email.png',}}
             style={styles.ImageStyle}
           />

           <TextInput
             style={{ flex: 1 }}
             placeholder="Enter Your E-mail Here"
             onChangeText={UserEmail => this.setState({UserEmail})}
             onSubmitEditing={UserEmail => this.validate({UserEmail})}
             value={this.state.email}
             underlineColorAndroid="transparent"
           />
            </View>
            <View style = { styles.textBoxBtnHolder }>

                     <TextInput underlineColorAndroid = "transparent" placeholder="Enter Your Password Here" onChangeText={UserPassword => this.setState({UserPassword})} secureTextEntry = { this.state.hidePassword } style = { styles.textBox }/>
                     <TouchableOpacity activeOpacity = { 0.8 } style = { styles.visibilityBtn } onPress = { this.managePasswordVisibility }>
                       <Image source = { ( this.state.hidePassword ) ? require('./assets/download.jpg') : require('./assets/images.png') } style = { styles.btnImage } />
                     </TouchableOpacity>

             </View>
             <View style = { styles.textBoxBtnHolder }>

                      <TextInput  underlineColorAndroid = "transparent" placeholder="Enter Your Comfirm Password Here" onChangeText={UserPassword => this.setState({UserPassword})} secureTextEntry = { this.state.hidePassword } style = { styles.textBox }/>
                      <TouchableOpacity activeOpacity = { 0.8 } style = { styles.visibilityBtn } onPress = { this.managePasswordVisibility }>
                        <Image source = { ( this.state.hidePassword ) ? require('./assets/download.jpg') : require('./assets/images.png') } style = { styles.btnImage } />
                      </TouchableOpacity>

              </View>

        <Button title="Click Here To Login" onPress={this.UserLoginFunction} color="#2196F3" />

        <Button
  title="If you have already account"
  onPress={() => this.props.navigation.push('Details')}
/>


</View>

    );
  }
}

const AppNavigator = createStackNavigator(
{
   First: { screen: LoginActivity },

   Details: {screen: Register },

   Second: {screen: HomeScreen },

});

const styles = StyleSheet.create({

MainContainer :{

justifyContent: 'center',
flex:1,

},

TextInputStyleClass: {

textAlign: 'center',
marginBottom: 7,
height: 40,
borderWidth: 1,
 borderColor: '#2196F3',
 borderRadius: 5 ,

},

 TextComponentStyle: {
   fontSize: 20,
  color: "#000",
  textAlign: 'center',
  marginBottom: 15
},
SectionStyle: {
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#fff',
   borderWidth: 0.5,
   borderColor: '#000',
   height: 40,
   borderRadius: 5,
   margin: 10,
 },

 ImageStyle: {
   padding: 10,
   margin: 5,
   height: 25,
   width: 25,
   resizeMode: 'stretch',
   alignItems: 'center',
 },
 textBoxBtnHolder:
  {
    position: 'relative',
    alignSelf: 'stretch',
    justifyContent: 'center',
     margin: 10
  },

  textBox:
  {
    fontSize: 20,
    alignSelf: 'stretch',
    height: 40,
    paddingRight: 45,
    paddingLeft: 8,
    borderWidth: 0.5,
    paddingVertical: 0,
    borderColor: 'grey',
    borderRadius: 5
  },

  visibilityBtn:
  {
    position: 'absolute',
    right: 3,
    height: 40,
    width: 35,
    padding: 5
  },
  scene: {
      flex: 1,
    },
  btnImage:
  {
    resizeMode: 'contain',
    height: '100%',
    width: '100%'
  }
});
export default createAppContainer(AppNavigator);
