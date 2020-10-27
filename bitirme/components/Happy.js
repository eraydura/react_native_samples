import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  ScrollView, 
  Image,
  Button
} from 'react-native'
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("db.db");

export default class Happy extends Component {
	
	  static navigationOptions = {
    title: 'Happy',
  };
  
  constructor(props) {
    super(props)
    this.state = {
        singer: [],
    };
  }
  
  
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
  

 render() {
   return (
   <ScrollView style={{flex:1}}>
    <View>
      <ScrollView horizontal={true}>
	  
     <View style={styles.container}>
	 
       <TouchableOpacity
         style={styles.button}
		   onPress={() => {
    this.setState({ singer: [...this.state.singer, 'Hadise'] })
  }}
       >
       <Image
        style={styles.button}
            source={{uri: 'https://cdn2.gazeteaksam.com/aksam/imgsdisk/2019/11/19/191120191021406855530.jpg'}}
      />
	  <Text> Hadise </Text>
       </TouchableOpacity>
	   
	   <TouchableOpacity
         style={styles.button}
		   onPress={() => {
              alert(this.state.singer);
  }}
       >
          <Image
        style={styles.button}
            source={{uri: 'https://cdn2.gazeteaksam.com/aksam/imgsdisk/2019/11/19/191120191021406855530.jpg'}}
      />
	  <Text> Hadise </Text>
       </TouchableOpacity>
	   
	   <TouchableOpacity
         style={styles.button}
       >
         <Image
        style={styles.button}
            source={{uri: 'https://cdn2.gazeteaksam.com/aksam/imgsdisk/2019/11/19/191120191021406855530.jpg'}}
      />
	  <Text> Hadise </Text>
       </TouchableOpacity>
	     <TouchableOpacity
         style={styles.button}
       >
       <Image
        style={styles.button}
            source={{uri: 'https://cdn2.gazeteaksam.com/aksam/imgsdisk/2019/11/19/191120191021406855530.jpg'}}
      />
	  <Text> Hadise </Text>
       </TouchableOpacity>
	     <TouchableOpacity
         style={styles.button}
       >
            <Image
        style={styles.button}
            source={{uri: 'https://cdn2.gazeteaksam.com/aksam/imgsdisk/2019/11/19/191120191021406855530.jpg'}}
      />
	  <Text> Hadise </Text>
       </TouchableOpacity>
	     <TouchableOpacity
         style={styles.button}
       >
          <Image
        style={styles.button}
            source={{uri: 'https://cdn2.gazeteaksam.com/aksam/imgsdisk/2019/11/19/191120191021406855530.jpg'}}
      />
	  <Text> Hadise </Text>
       </TouchableOpacity>
	   
       
      </View>
	  </ScrollView>
	  
	   <ScrollView  horizontal={true} >
	  
     <View style={styles.container}>
	 
       <TouchableOpacity
         style={styles.button}
       >
         <Image
        style={styles.button}
            source={{uri: 'https://cdn2.gazeteaksam.com/aksam/imgsdisk/2019/11/19/191120191021406855530.jpg'}}
      />
	  <Text> Hadise </Text>
       </TouchableOpacity>
	   
	   <TouchableOpacity
         style={styles.button}
       >
          <Image
        style={styles.button}
            source={{uri: 'https://cdn2.gazeteaksam.com/aksam/imgsdisk/2019/11/19/191120191021406855530.jpg'}}
      />
	  <Text> Hadise </Text>
       </TouchableOpacity>
	   
	   <TouchableOpacity
         style={styles.button}
       
       >
         <Image
        style={styles.button}
            source={{uri: 'https://cdn2.gazeteaksam.com/aksam/imgsdisk/2019/11/19/191120191021406855530.jpg'}}
      />
	  <Text> Hadise </Text>
       </TouchableOpacity>
	     <TouchableOpacity
         style={styles.button}
       
       >
         <Image
        style={styles.button}
            source={{uri: 'https://cdn2.gazeteaksam.com/aksam/imgsdisk/2019/11/19/191120191021406855530.jpg'}}
      />
	  <Text> Hadise </Text>
       </TouchableOpacity>

	   <TouchableOpacity
         style={styles.button}
       
       >
          <Image
        style={styles.button}
            source={{uri: 'https://cdn2.gazeteaksam.com/aksam/imgsdisk/2019/11/19/191120191021406855530.jpg'}}
      />
	  <Text> Hadise </Text>
       </TouchableOpacity>
       
      </View>
	  </ScrollView>
	      
		     <ScrollView  horizontal={true} >
	  
     <View style={styles.container}>
	 
       <TouchableOpacity
         style={styles.button}
       >
         <Image
        style={styles.button}
            source={{uri: 'https://cdn2.gazeteaksam.com/aksam/imgsdisk/2019/11/19/191120191021406855530.jpg'}}
      />
	  <Text> Hadise </Text>
       </TouchableOpacity>
	   
	   <TouchableOpacity
         style={styles.button}
       >
          <Image
        style={styles.button}
            source={{uri: 'https://cdn2.gazeteaksam.com/aksam/imgsdisk/2019/11/19/191120191021406855530.jpg'}}
      />
	  <Text> Hadise </Text>
       </TouchableOpacity>
	   
	   <TouchableOpacity
         style={styles.button}
       
       >
         <Image
        style={styles.button}
            source={{uri: 'https://cdn2.gazeteaksam.com/aksam/imgsdisk/2019/11/19/191120191021406855530.jpg'}}
      />
	  <Text> Hadise </Text>
       </TouchableOpacity>
	     <TouchableOpacity
         style={styles.button}
       
       >
         <Image
        style={styles.button}
            source={{uri: 'https://cdn2.gazeteaksam.com/aksam/imgsdisk/2019/11/19/191120191021406855530.jpg'}}
      />
	  <Text> Hadise </Text>
       </TouchableOpacity>

	   <TouchableOpacity
         style={styles.button}
       
       >
          <Image
        style={styles.button}
            source={{uri: 'https://cdn2.gazeteaksam.com/aksam/imgsdisk/2019/11/19/191120191021406855530.jpg'}}
      />
	  <Text> Hadise </Text>
       </TouchableOpacity>
       
      </View>
	  </ScrollView>
	  
	     <ScrollView  horizontal={true} >
	  
     <View style={styles.container}>
	 
       <TouchableOpacity
         style={styles.button}
       >
         <Image
        style={styles.button}
            source={{uri: 'https://cdn2.gazeteaksam.com/aksam/imgsdisk/2019/11/19/191120191021406855530.jpg'}}
      />
	  <Text> Hadise </Text>
       </TouchableOpacity>
	   
	   <TouchableOpacity
         style={styles.button}
       >
          <Image
        style={styles.button}
            source={{uri: 'https://cdn2.gazeteaksam.com/aksam/imgsdisk/2019/11/19/191120191021406855530.jpg'}}
      />
	  <Text> Hadise </Text>
       </TouchableOpacity>
	   
	   <TouchableOpacity
         style={styles.button}
       
       >
         <Image
        style={styles.button}
            source={{uri: 'https://cdn2.gazeteaksam.com/aksam/imgsdisk/2019/11/19/191120191021406855530.jpg'}}
      />
	  <Text> Hadise </Text>
       </TouchableOpacity>
	     <TouchableOpacity
         style={styles.button}
       
       >
         <Image
        style={styles.button}
            source={{uri: 'https://cdn2.gazeteaksam.com/aksam/imgsdisk/2019/11/19/191120191021406855530.jpg'}}
      />
	  <Text> Hadise </Text>
       </TouchableOpacity>

	   <TouchableOpacity
         style={styles.button}
       
       >
          <Image
        style={styles.button}
            source={{uri: 'https://cdn2.gazeteaksam.com/aksam/imgsdisk/2019/11/19/191120191021406855530.jpg'}}
      />
	  <Text> Hadise </Text>
       </TouchableOpacity>
       
      </View>
	  </ScrollView>
	  
    </View>
	
	  <View style={{flex:1}}>
        <View style={{borderWidth:1,position:'absolute',bottom:0,alignSelf:'flex-end'}}>
           <Button
             title="Press"
             color="#841584"
             accessibilityLabel="Press"/>
        </View>
      </View>
	  
	  </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
	flexDirection:'row',
    justifyContent: 'center',
    paddingHorizontal: 10,
	marginBottom: '10%',
  },
  
  button: {
	borderRadius: 10,
	width:150,
	height:150,
    marginLeft:15,
  },

})
