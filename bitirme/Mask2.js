import React from 'react'

import { View,Image } from 'react-native';

// Destructure face data given as argument
const Mask = ({
  face: {
    bounds: {
      origin: { x: containerX, y: containerY },
      size: { width: faceWidth,height:faceHeight }
    },
    leftEyePosition,
    rightEyePosition
  }
}) => {

  return (
    <View style={{ position: 'absolute', left: containerX, top: containerY }}>
     <Image
          style={{width: faceWidth,height:faceHeight}}
          source={{uri: 'https://p7.hiclipart.com/preview/8/1006/572/emoji-smiley-happiness-iphone-emoticon-emoji-thumbnail.jpg'}}
        />
    </View>
  );
};

export default Mask