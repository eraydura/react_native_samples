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
          style={{width: faceWidth-100 ,height:faceHeight-100 }}
          source={{uri: 'https://i.pinimg.com/originals/a7/c8/53/a7c853f724d754045c163a021b1ebf19.png'}}
        />
    </View>
  );
};

export default Mask