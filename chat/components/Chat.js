// @flow
import React, {Component} from 'react';
import { GiftedChat } from 'react-native-gifted-chat'; 
import Modal from "react-native-modal";
import { Text, TouchableOpacity, View,Button} from 'react-native';
import Fire from '../Fire';

type Props = {
  name?: string,
};

class Chat extends React.Component<Props> {

  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || 'Chat!',
  });
  
toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  
  state = {
    messages: [],
	isModalVisible: true,
  };
   toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };


  get user() {
    return {
      name: this.props.navigation.state.params.name,
      _id: Fire.shared.uid,
    };
  }
  
   

  render() {
    return (
	
	<View style={{ flex: 1 }}>
        <Modal isVisible={this.state.isModalVisible }>
          <View style={{ flex: 1 }}>
            <Text>Hello!</Text>
            <Button title="Hide modal" onPress={this.toggleModal} />
          </View>
        </Modal>
      
      <GiftedChat
        messages={this.state.messages}
        onSend={Fire.shared.send}
        user={this.user}
      />
	  </View>
	  
    );
  }

  componentDidMount() {
    Fire.shared.on(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
		
      }))
    );
  }
  componentWillUnmount() {
    Fire.shared.off();
  }
}

export default Chat;
