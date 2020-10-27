import React from 'react';
import { Button, Text, View, Dimensions, StyleSheet,Linking, TouchableOpacity, WebView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { Camera, Permissions } from 'expo';
import Home from './index';


const FirstRoute = () => (
  Home: {
    screen: Home,
  },
);
const SecondRoute = () => (
  <WebView
      originWhitelist={['*']}
      source={{html: '<h1>Hello world</h1> '}}
    />
);
const ThirdRoute = () => (
  <WebView
        source={{uri: 'http://www.eraydura.com/'}}

      />
);
class HomeScreen extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Music' },
      { key: 'second', title: 'Film' },
      { key: 'third', title: 'Places' },
    ],
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
      <TabView
     navigationState={this.state}
     renderScene={SceneMap({
       first: FirstRoute,
       second: SecondRoute,
       third: ThirdRoute,
     })}
     onIndexChange={index => this.setState({ index })}
     initialLayout={{ width: Dimensions.get('window').width }}
     useNativeDriver = {true} renderTabBar={(props) => <TabBar {...props}
     indicatorStyle={{ backgroundColor: 'white' }}
     style={{backgroundColor: "black", height: 40}}
     renderIcon={this.renderIcon}
     indicatorStyle={{backgroundColor: "grey"}} /> }
   />
   </View>
    );
  }
}

class SettingsScreen extends React.Component {
  state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
    };

    async componentDidMount() {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      this.setState({ hasCameraPermission: status === 'granted' });
    }

    render() {
      const { hasCameraPermission } = this.state;
      if (hasCameraPermission === null) {
        return <View />;
      } else if (hasCameraPermission === false) {
        return <Text>No access to camera</Text>;
      } else {
        return (
          <View style={{ flex: 1 }}>
            <Camera style={{ flex: 1 }} type={this.state.type}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    this.setState({
                      type: this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                    });
                  }}>
                  <Text
                    style={{ fontSize: 25, color: 'white' }}>
                    {' '}Flip{' '}
                  </Text>
                </TouchableOpacity>
              </View>
            </Camera>
          </View>
        );
      }
    }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }
}

const SettingsStack = createStackNavigator({
  Settings: { screen: SettingsScreen },
  Details: { screen: DetailsScreen },
});

export default createAppContainer(createBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    Mood: { screen: SettingsStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Mood') {
          iconName = `ios-happy${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
));
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
