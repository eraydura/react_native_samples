import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, View, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Video } from 'expo-av';
export default class Example extends Component {
  constructor(props) {
  super(props)

  this.state = {

    visibleModal: null,
  }

}

  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <Text>Hello!</Text>
      {this._renderButton('Close', () => this.setState({ visibleModal: null }))}
    </View>
  );

  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>

      <View style={styles.container}>


      <Card
  title='HELLO WORLD'
>
<Video
  source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' }}
  rate={1.0}
  volume={1.0}
  isMuted={false}
  resizeMode="cover"
  shouldPlay
  isLooping
  style={{ width: 300, height: 300 }}

/>

  {this._renderButton('A slower modal', () => this.setState({ visibleModal: 4 }))}
</Card>


<Card
title='HELLO WORLD'
>
<Video
         repeat={false}
         ref={(ref) => {
           this.player = ref
         }}
         paused={this.state.isPaused}
         resizeMode='cover'
         source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' }}

         style={{
           alignSelf: 'stretch',
           width: 300, height: 300,
           borderWidth: 0,
           borderColor: '#000000',
         }}
       />
  {this._renderButton('A slower modal', () => this.setState({ visibleModal: 4 }))}
</Card>


<Card
title='HELLO WORLD'
>
<Video
  source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' }}
  rate={1.0}
  volume={1.0}
  isMuted={false}
  resizeMode="cover"
  shouldPlay
  isLooping
  style={{ width: 300, height: 300 }}
/>

  {this._renderButton('A slower modal', () => this.setState({ visibleModal: 4}))}
</Card>


<Card
title='HELLO WORLD'
>
<Video
  source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' }}
  rate={1.0}
  volume={1.0}
  isMuted={false}
  resizeMode="cover"
  shouldPlay
  isLooping
  style={{ width: 300, height: 300 }}

/>

  {this._renderButton('A slower modal', () => this.setState({ visibleModal: 4}))}
</Card>


<Card
title='HELLO WORLD'
>
<Video
  source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
  rate={1.0}
  volume={1.0}
  isMuted={false}
  resizeMode="cover"
  shouldPlay
  isLooping
  style={{ width: 300, height: 300 }}

/>

  {this._renderButton('A slower modal', () => this.setState({ visibleModal: 4 }))}
</Card>


<Card
title='HELLO WORLD'
>
<Video
  source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
  rate={1.0}
  volume={1.0}
  isMuted={false}
  resizeMode="cover"
  shouldPlay
  isLooping
  style={{ width: 300, height: 300 }}
/>

  {this._renderButton('A slower modal', () => this.setState({ visibleModal: 4 }))}
</Card>


        <Modal
          isVisible={this.state.visibleModal === 4}
          backdropColor={'black'}
          backdropOpacity={0.8}
          animationIn={'zoomInDown'}
          animationOut={'zoomOutUp'}
          animationInTiming={1000}
          animationOutTiming={1000}
          backdropTransitionInTiming={1000}
          backdropTransitionOutTiming={1000}
        >
          {this._renderModalContent()}
        </Modal>

      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  contentContainer: {
    paddingVertical: 20
  },

});
