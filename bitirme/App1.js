import React from 'react'
import { Text, View, StyleSheet,Image } from 'react-native'
import * as FaceDetector from 'expo-face-detector';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import { ListItem } from 'react-native-elements';

import Mask from './Mask';
import Mask2 from './Mask2';
const cameraStyle = { flex: 1 }
const flexCenterStyle = { flex: 1, justifyContent: 'center', alignItems: 'center' }

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasCameraPermission: null,
      faces: [], // initialize found faces with empty array
	  smile: 0,
    }
    this.onCameraPermission = this.onCameraPermission.bind(this)
    // bind the callbacks
    // to set the correct context
    this.onFacesDetected = this.onFacesDetected.bind(this)
    this.onFaceDetectionError = this.onFaceDetectionError.bind(this)
  }
  
  
  

  componentDidMount() {
    Permissions
      .askAsync(Permissions.CAMERA)
      .then(this.onCameraPermission)
  }

  onCameraPermission({ status }) {
    this.setState({ hasCameraPermission: status === 'granted' })
  }

  // implement face detection callback function
  onFacesDetected({ faces }) {
    // print the found face data to console
    console.log(faces)
    // store faces to component state
    this.setState({ faces })
  }

  // implement face detection error function
  onFaceDetectionError(error) {
    console.log(error)
  }
  

  render() {
    const { hasCameraPermission,faces } = this.state;

    if (hasCameraPermission === null) {
      return <View />
    }

    if (hasCameraPermission === false) {
      return (
        <View style={flexCenterStyle}>
          <Text>No access to camera</Text>
        </View>
        )
    }
	if (hasCameraPermission === true) {
	  faces.map((item, i) => (
	  
	  setInterval(() => (
	  this.setState({ smile: item.smilingProbability })
	), 50) 
	  
    ))
	}

    return (
      <View style={cameraStyle} >
        <Camera
          style={cameraStyle}
          type={Camera.Constants.Type.front}
          faceDetectorSettings={{
            mode: FaceDetector.Constants.Mode.fast,
            detectLandmarks: FaceDetector.Constants.Landmarks.all,
            runClassifications: FaceDetector.Constants.Classifications.all
          }}
          onFacesDetected={this.onFacesDetected}
          onFacesDetectionError={this.onFacesDetectionError}
            
        />
		 {
          this.state.smile <=0.05 && 
          faces.map(face => <Mask key={face.faceID} face={face} />)
		  
        }
		 {
          this.state.smile >0.05 && 
          faces.map(face => <Mask2 key={face.faceID} face={face} />)
		  
        }
      
      </View>
	 
	 
	  
    )
  }
}


export default App