import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text, TouchableOpacity,Image,View,Button } from 'react-native';
import {Actions} from 'react-native-router-flux';
import Modal from 'react-native-modal' ;
import Constants from 'expo-constants';
import * as Speech from 'expo-speech';

const MAX_RESULT = 50;
const PLAYLIST_ID = "PLScC8g4bqD47c-qHlsfhGH3j6Bg7jzFy-";
const API_KEY = "AIzaSyB-Q74NcZJhswJ2jZUJuKuGdgfnMe-froM";

export default class Home extends Component<{}> {
  
  home(){
    Actions.home();
  }

  watchVideo(video_url){
    Actions.watchvideo({video_url: video_url});
  }

  toggleModal = () => {
     this .  setState ({ isModalVisible : ! this . state . isModalVisible });
   };
  
   
  componentWillMount() {
    this.fetchPlaylistData();
  }

  fetchPlaylistData = async () => {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${PLAYLIST_ID}&maxResults=${MAX_RESULT}&part=snippet%2CcontentDetails&key=${API_KEY}`);
    const json = await response.json();
    this.setState({ videos: json['items']});
    console.log(this.state.videos)
  };

  constructor(props) {
    super(props);
    this.state = {
      videos: [],
    }
	this.state = {
     isModalVisible : true,
   }
  }
  
  render() {
    const videos = this.state.videos;
	

    return (
      <SafeAreaView style={styles.safeArea}>
		
		 
            <FlatList
              data={this.state.videos}
              renderItem={
                ({item}) => 
                <TouchableOpacity
                    style={styles.demacate}
                    onPress={() => this.watchVideo(item.contentDetails.videoId)}
                >
				<Image
                  style={styles.imageStyle}
                   source={{ uri: item.snippet.thumbnails.maxres.url }}
                />
                <Text 
                  style={styles.item} 
                > 
               {item.snippet.title} 
                </Text>
                </TouchableOpacity>
              }
            />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
  },
  demacate: {
    borderBottomColor: 'black',
    borderBottomWidth: 5,
    borderRadius:10
  },
    imageStyle: {
    alignSelf: 'stretch',
    height: 180
  },
  item: {
    padding: 12,
    fontSize: 15,
    height: 34,
  },
});