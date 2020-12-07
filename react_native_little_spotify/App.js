import React from 'react';  
import {StyleSheet, Text, View,Button,Dimensions, Platform,TouchableHighlight,Image} from 'react-native'; 
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import {createStackNavigator} from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  
import { WebView } from 'react-native-webview';




 class App extends React.Component {
	
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Screen2')} style={{width:Dimensions.get('window').width, height:Dimensions.get('window').height,justifyContent:'center',textAlign:'center'}} >
		
          <Image
            style={styles.logo}
            source={require('./assets/feelapp.png')}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

class HomeScreen extends React.Component {  
        reload(){
    this.myWebView.reload()
  }
    render() {  
        return (
          <View style={{flex:1, backgroundColor: 'black'}}>
      <WebView
         style={{flex: 1}}
         originWhitelist={['*']}
         source={{ uri: 'http://www.feelapp.website/song_app.php' }}
         ref={(ref) => this.myWebView = ref}
       />
     <Button color="white"  onPress={()=>this.reload()} title="Refresh" />
   </View>
  )
    } 

}  

class ProfileScreen extends React.Component {  

        reload(){
    this.myWebView.reload()
  }
    render() {  
        return (
          <View style={{flex:1, backgroundColor: 'black'}}>
      <WebView
         style={{flex: 1}}
         originWhitelist={['*']}
         source={{ uri: 'http://www.feelapp.website/radios_app.php' }}
         ref={(ref) => this.myWebView = ref}
       />
     <Button color="white"  onPress={()=>this.reload()} title="Refresh" />
   </View>
  )
    }
}  

class Login extends React.Component {  
    render() {  
        return (
          <View style={{flex:1}}>
      <WebView
         style={{flex: 1}}
         originWhitelist={['*']}
         source={{ uri: 'http://www.feelapp.website/login_app.php' }}
       />
             <TouchableHighlight 
                style ={{
                    height: 45,
                    width:Dimensions.get('window').width,
                    backgroundColor : "black",
                }}>
            <Button 
			color="white"    
			onPress={() => this.props.navigation.navigate('Screen3')}          
            title="Continue"
          /> 
          </TouchableHighlight> 
   </View>
  )
    } 

}  

class ImageScreen extends React.Component {  
        reload(){
    this.myWebView.reload()
  }
    render() {  
        return (
          <View style={{flex:1, backgroundColor: 'black'}}>
      <WebView
         style={{flex: 1,marginTop:50}}
         originWhitelist={['*']}
         source={{ uri: 'http://www.feelapp.website/profile_app.php' }}
         ref={(ref) => this.myWebView = ref}
       />
     <Button color="white"  onPress={()=>this.reload()} title="Refresh" />
   </View>
  )
    } 
  
}
class SearchScreen extends React.Component {  
        reload(){
    this.myWebView.reload()
  }
    render() {  
        return (
          <View style={{flex:1, backgroundColor: 'black'}}>
      <WebView
         style={{flex: 1}}
         originWhitelist={['*']}
         source={{ uri: 'http://www.feelapp.website/search_app.php' }}
         ref={(ref) => this.myWebView = ref}
       />
     <Button color="white"  onPress={()=>this.reload()} title="Refresh" />
   </View>
  )
    }  
} 
class HPlaylistScreen extends React.Component {  
    reload(){
    this.myWebView.reload()
  }
    render() {  
        return (
          <View style={{flex:1, backgroundColor: 'black'}}>
      <WebView
         style={{flex: 1}}
         originWhitelist={['*']}
         source={{ uri: 'http://www.feelapp.website/happy.php?q=search' }}
         ref={(ref) => this.myWebView = ref}
       />
     <Button color="white"  onPress={()=>this.reload()} title="Refresh" />
   </View>
  )
    }  
} 
class APlaylistScreen extends React.Component {  
    reload(){
    this.myWebView.reload()
  }
    render() {  
        return (
          <View style={{flex:1, backgroundColor: 'black'}}>
      <WebView
         style={{flex: 1}}
         originWhitelist={['*']}
         source={{ uri: 'http://www.feelapp.website/angry.php?q=search' }}
         ref={(ref) => this.myWebView = ref}
       />
     <Button color="white"  onPress={()=>this.reload()} title="Refresh" />
   </View>
  )
    }  
} 
 
 class SPlaylistScreen extends React.Component {  
    reload(){
    this.myWebView.reload()
  }
    render() {  
        return (
          <View style={{flex:1, backgroundColor: 'black'}}>
      <WebView
         style={{flex: 1}}
         originWhitelist={['*']}
         source={{ uri: 'http://www.feelapp.website/sad.php?q=search' }}
         ref={(ref) => this.myWebView = ref}
       />
     <Button color="white"  onPress={()=>this.reload()} title="Refresh" />
   </View>
  )
    }  
} 


const TabNavigator = createMaterialBottomTabNavigator(  
    {  
        Home: { screen: HomeScreen,  
            navigationOptions:{  
                tabBarLabel:'Songs',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-musical-note'}/>  
                    </View>),  
            }  
        },  
        Profile: { screen: ProfileScreen,  
            navigationOptions:{  
                tabBarLabel:'Radio',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-radio'}/>  
                    </View>),  
                activeColor: '#f60c0d',  
                inactiveColor: '#f65a22',  
                barStyle: { backgroundColor: '#99B7B7' },  
            }  
        },  
        Image: { screen: ImageScreen,  
            navigationOptions:{  
                tabBarLabel:'Profile',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
                    </View>),  
                activeColor: '#615af6',  
                inactiveColor: '#46f6d7',  
                barStyle: { backgroundColor: '#759292' },  
            }  
        }, 
         Search: {  
            screen: SearchScreen,  
            navigationOptions:{  
                tabBarLabel:'Search',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'md-search'}/>  
                    </View>), 
	     activeColor: '#f0edf6',  
         inactiveColor: '#C7F5F5',  
         barStyle: { backgroundColor: '#3F5C5C' }, 	
            }  
        },  
        APlaylist: {  
            screen: APlaylistScreen,  
            navigationOptions:{  
                tabBarLabel:'Angry',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-sad'}/>  
                    </View>), 
	     activeColor: '#f0edf6',  
         inactiveColor: '#bfc7c3',  
         barStyle: { backgroundColor: '#153424' }, 	
            }  
        }, 
              SPlaylist: {  
            screen: SPlaylistScreen,  
            navigationOptions:{  
                tabBarLabel:'Sad',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'md-sad'}/>  
                    </View>), 
	     activeColor: '#f0edf6',  
         inactiveColor: '#bfc7c3',  
         barStyle: { backgroundColor: '#153424' }, 	
            }  
        }, 
              HPlaylist: {  
            screen: HPlaylistScreen,  
            navigationOptions:{  
                tabBarLabel:'Happy',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'md-happy'}/>  
                    </View>), 
	     activeColor: '#f0edf6',  
         inactiveColor: '#bfc7c3',  
         barStyle: { backgroundColor: '#153424' }, 	
            }  
        }, 
    },  
    {  
      initialRouteName: "Home",  
      activeColor: '#f0edf6',  
      inactiveColor: '#226557',  
      barStyle: { backgroundColor: '#C3D7D7' },  
    },  
);  

const AppContainer = createAppContainer(TabNavigator);

class Happy extends React.Component {
 render() {
   return (  
              
          
             <View style={{flex:1,backgroundColor:'black'}}>
              <AppContainer />
         <TouchableHighlight 
                style ={{
                    height: 45,
                    width:Dimensions.get('window').width,
                    backgroundColor : "black",
                }}>
            <Button 
			color="white"    
			onPress={() => this.props.navigation.navigate('Screen2')}          
            title="Log in"
          /> 
          </TouchableHighlight> 
    </View>
         
        ); 
  }
}

export default createAppContainer(createStackNavigator({
  Screen1: {
    screen: App,
  },
  Screen2: {
    screen: Login,
  },
  Screen3: {
    screen: Happy,
  },
}, {
  headerMode: 'none',
}));
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  logo: {
    height: 100,
    width: 380,
  },
});
 
