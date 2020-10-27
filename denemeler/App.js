import React, { Component } from 'react';
import {AppRegistry, View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import Speech from 'expo-speech';
import Voice from 'expo-Audio';
export default class NVoice extends Component {

  constructor(){
    super();
    this.state = {
      results: []
    }
    Voice.onSpeechResults = this.onSpeechResults.bind(this);
  }

  onSpeechResults(e){
    this.setState({
      results:e.value
    })
  }

  speech(){
    Speech.speak({
      text:'Hi, how are you?',
      voice:'en_US'
    })
  }

  onSpeechStart(){
    Voice.start('en_US');
  }

  onSpeechEnd(){
    Voice.stop();
  }

  render() {
    return (
          <View style={styles.Content}>
            <Text style={styles.title}>React Native - Speech to Text</Text>
            <View style={styles.btn}>
              <TouchableOpacity onPress={this.speech.bind()} style={styles.btnStyle}>
                <Text>Konuştur!</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.onSpeechStart.bind()} style={styles.btnStyle}>
              <Text>Konuşmayı Başlat!</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.onSpeechEnd.bind()} style={styles.btnStyle}>
              <Text>Konuşmayı Sonlandır!</Text>
              </TouchableOpacity>
              {this.state.results.map( (text,index) => {
                return(
                  <Text key={index}>{text}</Text>
                )
              })}
            </View>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  Content:{
    flex:1,
    alignItems:'center',
    marginTop:30
  },
  btn:{
    justifyContent:'center',
    flex:1
  },
  btnStyle:{
    padding:10,
    backgroundColor:'#cecece',
    marginBottom:10
  }
});


AppRegistry.registerComponent('NVoice', () => NVoice);
