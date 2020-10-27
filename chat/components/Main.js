import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput, 
  View,
  Button,
} from 'react-native';

class Main extends React.Component {
  static navigationOptions = {
    title: 'Group Chat',
  };

  state = {
    name: '',
  };

  onPress = () =>
    this.props.navigation.navigate('Chat', { name: this.state.name });

  onChangeText = name => this.setState({ name });

  render() {
    return (
      <View style={{justifyContent: 'center', flex: 1}}>
        <Text style={styles.title}>Enter your nickname:</Text>
        <TextInput
          style={styles.nameInput}
          placeHolder="Write silly things"
          onChangeText={this.onChangeText}
          value={this.state.name}
        />
        <Button
            title="Next"
            onPress={this.onPress}
			style={styles.buttonText}
          />
      </View>
    );
  }
}

const offset = 20;
const styles = StyleSheet.create({
  title: {
	
	alignSelf:'center',
	textAlign: 'center',
    fontSize: offset,
	justifyContent: 'center',
    alignItems: 'center',
  },
  nameInput: {
    height: offset * 2,
    margin: offset,
    paddingHorizontal: offset,
    borderColor: '#cecdcd',
    borderWidth: 0.5,
	borderRadius:30,
  },
  buttonText: {
    marginLeft: offset,
	borderRadius:30,
    fontSize: offset,
	backgroundColor:'#737373',
  },
});

export default Main;
