import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, View,WebView, Text, TouchableHighlight, Alert,Button } from 'react-native';
import {Actions} from 'react-native-router-flux';
import Modal from "react-native-modal";
import Constants from 'expo-constants';
import * as Speech from 'expo-speech';

export default class WatchVideo extends Component<{}> {
  
  home(){
    Actions.home();
  }

  videos(){
    Actions.videos();
  }

  constructor(props) {
    super(props);
    console.log(this.props);
	
	 this.state = {
    isModalVisible: true,
  };
  }
  
  toggleModal = () => {
	
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  
 speak() {
    var thingToSay = 'You choose'+this.prop;
    Speech.speak(thingToSay);
  }
  
  render() {
    return (

      <View style={styles.safeArea}>
	
          <Modal isVisible={this.state.isModalVisible}>
		    {this.speak()}
          <View style={{ flex: 1 }}>
            <Button title="Hide modal" onPress={this.toggleModal} />
          </View>
        </Modal>
		
		 
			<WebView
                                    mixedContentMode='always'
                                    source={{
                                        uri: "https://www.youtube.com/embed/"+this.props.video_url,
                                        "Accept-Language": navigator.language,
                                        
                                    }}
                                    javaScriptEnabled={true}
                                    ref={(b) => this._bridge = b}
                                    onError={(error) =>{ console.log("error",error); return NetInfo.isConnected.fetch().done(isConnected => this.setState({isConnected}))}}
                                    renderError={() => this.renderError()}
									   onError={(error) => {
                                        console.log("error", error);
                                        return NetInfo.isConnected.fetch().done(isConnected => this.setState({isConnected}))
                                    }}
                                   
                                    domStorageEnabled={true}
                                    originWhitelist={['*']}
                                    allowsLinkPreview={false}
                                    injectedJavaScript='
                                    setInterval(function() { document.postMessage("hi"); document.ReactNativeWebView.postMessage("hi", "*");
                                    window.postMessage("hi"); window.ReactNativeWebView.postMessage("hi", "*");
                                    }, 1000);
                                     alert("start");'
									 injectedJavaScript="document.addEventListener('scroll', function (event) {window.ReactNativeWebView.postMessage(JSON.stringify(document.documentElement.scrollTop||document.body.scrollTop));}"
									 
                                />
			  
		  
      </View>

    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
  }
});