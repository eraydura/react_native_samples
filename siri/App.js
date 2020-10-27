import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Keyboard,
  Dimensions,
  Animated,
  Platform,
} from 'react-native';
import { Icon } from 'native-base';
import { GiftedChat } from 'react-native-gifted-chat';
import * as Speech from 'expo-speech';

let window = Dimensions.get('window');
const contentHeight = window.height - 80;
const avatarBot = "https://thumbnail.imgbin.com/17/9/18/imgbin-smiley-emoticon-smile-face-gknn7WC1vUNTiB3dUyRdXX58b_t.jpg";

export default class GiftedChatApp extends Component {
  static navigationOptions = {
    title: 'ChatBot'
  }

  constructor(props) { 
    super(props);
    this.getDialogFlow = this.getDialogFlow.bind(this);
    this.state = { gifted: [], answers: [], height: contentHeight };
  }

  componentDidMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow = (e) => {
    this.setState({ height: contentHeight - e.endCoordinates.height});
    // console.log(this.state.contentHeight, 'Keyboard Shown');
  }

  _keyboardDidHide = (e) => {
    this.setState({ height: contentHeight });
    // console.log(this.state.contentHeight, 'Keyboard Hidden');
  }

  componentWillMount() {
    this.setState({
      gifted: [
        {
          _id: 1,
          text: 'Hi,I am looking forward to you.',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'e-emoji',
            avatar: avatarBot,
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      gifted: GiftedChat.append(previousState.gifted, messages),
    }))
    this.getDialogFlow(messages[0].text)
  }

  async getDialogFlow(msg) {
    const ACCESS_TOKEN = '159db4b849704022be01f84bfcd8282d';   

    try {
       const response = await fetch(`https://api.dialogflow.com/v1/query?v=20170712`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization': `Bearer ${ACCESS_TOKEN}`,
        },
        body: JSON.stringify({
          query: msg,
          lang: 'en',
          sessionId: 'somerandomthing'
        })
      })
      let responseJson = await response.json();

      const imageUrl = null;

      responseJson.result.fulfillment.messages.map((item, i) => {
         if (item.payload !== undefined){
            if(item.payload.imageUrl !== undefined) {
              imageUrl = item.payload.imageUrl;
            }
        }
        return imageUrl
      })
	

      let answers = [
        {
          _id: responseJson.id,
          text: responseJson.result.fulfillment.speech,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Botler',
            avatar: avatarBot,
          },
          image: imageUrl,
          imageProps: {
             height: 200,
             width: 200
          }
        },
      ]
	  
	  
    var thingToSay = responseJson.result.fulfillment.speech;
    Speech.speak(thingToSay);
  

 

      this.setState(previousState => ({
        gifted: GiftedChat.append(previousState.gifted, answers),
      }))

      return responseJson;

    } catch(error) {
      console.error(error);
    }
  }
   

  renderChat = () => {
    return(
        <GiftedChat
          textInputProps={{autoFocus: true}}
          messages={this.state.gifted}
          placeholder='Ask me anything...'
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}
		  
        />
    );
  }

  render() {
    if(Platform.OS === 'ios'){
      return this.renderChat();
     }
    else{
       return(
        <View style={{ height: this.state.height }}>
           { this.renderChat() }
        </View>
      )
    }
  }
}
