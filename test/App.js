import React, { Component } from 'react'
import {Share,Button, StyleSheet,TouchableOpacity,Text,View,Image} from 'react-native'
import {Card,CheckBox} from 'react-native-elements'
import * as Speech from 'expo-speech';
import Modal from "react-native-modal";
import PercentageCircle from 'react-native-percentage-circle';


export default class App extends Component {
  constructor(props) {
    super(props)
	this.state = { show: false}
	this.state = { show1: false }
	this.state = { show2: false }
	this.state = { show3: false }
	this.state = { show4: false}
	this.state = { show5: false }
	this.state = { isModalVisible: false }
	this.state = { isModalVisible1: false }
	this.state = { isModalVisible2: false }
	this.state = { isModalVisible3: false }
	this.state = { isModalVisible4: false }
	this.state = { checked: false }
	this.state = { checked1: false }
	this.state = { checked2: false }
    this.state = { count: 50 }

  }
  onShare = async () => {
   try {
     const result = await Share.share({
       message:
         'You get '+this.state.count+'. Sharing makes people happy',
     });
     if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };


   speak() {
    var thingToSay = 'Eve';
	Speech.speak(thingToSay, {
	  pitch: 0.60,
      rate: 0.70
  });

  }
  speak1() {
   var thingToSay = 'You selected Okay. You are so perfect.';
 Speech.speak(thingToSay, {
   pitch: 0.60,
     rate: 0.70
 });

 }
 speak2() {
  var thingToSay = 'You selected Bye. You are so perfect.';
Speech.speak(thingToSay, {
  pitch: 0.60,
    rate: 0.70
});

}
speak3() {
 var thingToSay = 'You selected See you. You are so perfect.';
Speech.speak(thingToSay, {
 pitch: 0.60,
   rate: 0.70
});

}
    speak4() {
    var thingToSay = 'Sorry Eve, you get'+this.state.count+' You are not in mood today. Dont forget, tomorrow is new start. I hope, You wake up like sun for all world.';;
	Speech.speak(thingToSay, {
	  pitch: 0.60,
      rate: 0.70
  });
  }
  speak5() {
    var thingToSay = 'Perfect Eve you get'+this.state.count+' You are in mood today. I guess, Today is good day for you. I am happy to see you like this.';
	Speech.speak(thingToSay, {
	  pitch: 0.60,
      rate: 0.70
  });
  }


  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
	this.speak();
  };
  toggleModal1 = () => {
    this.setState({ isModalVisible1: !this.state.isModalVisible1});
  };
  toggleModal2 = () => {
    this.setState({ isModalVisible2: !this.state.isModalVisible2 });
  };
  toggleModal3 = () => {
    this.setState({ isModalVisible3: !this.state.isModalVisible3 });
  };
  toggleModal4 = () => {
    this.setState({ isModalVisible4: !this.state.isModalVisible4 });
  };

  press = () => {
    this.setState((state) => ({
      checked: true,
	  checked1: false,
	  checked2: false,
    }));

  }
  press1 = () => {
    this.setState((state) => ({
      checked1: true,
	  checked: false,
	  checked2: false,
    }));

  }
  press2 = () => {
    this.setState((state) => ({
      checked2: true,
	  checked1: false,
	  checked: false,
    }));

  }

   onhidden= () => {
   
   { this.state.checked &&
    this.setState({
      show: true,
	  show1: true,
	  count: this.state.count+10
    })
   }
	{ this.state.checked1 &&
    this.setState({
      show: true,
	  show1:true,
	   count: this.state.count+5
    })
	}
	{ this.state.checked2&&
    this.setState({
       show: true,
	  show1:true,
	   count: this.state.count-5
    })
	}

  }

  onhidden1 = () => {
	{ this.state.checked &&
    this.setState({
      show1: false,
	  show2:true,
	   count: this.state.count+10
    })
	}
	{ this.state.checked1 &&
    this.setState({
      show1: false,
	  show2:true,
	   count: this.state.count+5
    })
	}
	{ this.state.checked2&&
    this.setState({
       show1: false,
	  show2:true,
	   count: this.state.count-5
    })
	}

  }

    onhidden2 = () => {
	{ this.state.checked &&
    this.setState({
      show2: false,
	  show3:true,
	   count: this.state.count+10
    })
	}
	{ this.state.checked1 &&
    this.setState({
      show2: false,
	  show3:true,
	   count: this.state.count+5
    })
	}
	{ this.state.checked2&&
    this.setState({
       show2: false,
	  show3:true,
	   count: this.state.count-5
    })
	}

  }

    onhidden3 = () => {
	{ this.state.checked &&
    this.setState({
      show3: false,
	  show4:true,
	   count: this.state.count+10
    })
	}
	{ this.state.checked1 &&
    this.setState({
      show3: false,
	  show4:true,
	   count: this.state.count+5
    })
	}
	{ this.state.checked2&&
    this.setState({
       show3: false,
	  show4:true,
	   count: this.state.count-5
    })
	}

  }

     onhidden4 = () => {
	{ this.state.checked &&
    this.setState({
      show4: false,
	  show5:true,
	   count: this.state.count+10
    })
	}
	{ this.state.checked1 &&
    this.setState({
      show4: false,
	  show5:true,
	   count: this.state.count+5
    })
	}
	{ this.state.checked2&&
    this.setState({
       show4: false,
	  show5:true,
	   count: this.state.count-5
    })
	}

  }



 render() {
   return (
     <View style={styles.container} >

	  <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1 }}>
            <Text>Hello!</Text>
            <Button title="Hide modal"  onPress ={ () => {this.setState({ isModalVisible: !this.state.isModalVisible })}}/>
          </View>
        </Modal>

		 <Modal isVisible1={this.state.isModalVisible1}>
          <View style={{ flex: 1 }}>
            <Text>Hello!</Text>
            <Button title="Hide modal" onPress = {() => {this.setState({ isModalVisible1: !this.state.isModalVisible1 })}} />
          </View>
        </Modal>

		 <Modal isVisible2={this.state.isModalVisible2}>
          <View style={{ flex: 1 }}>
            <Text>Hello!</Text>
            <Button title="Hide modal" onPress = {() => {this.setState({ isModalVisible2: !this.state.isModalVisible2 })}}/>
          </View>
        </Modal>

		 <Modal isVisible3={this.state.isModalVisible3}>
          <View style={{ flex: 1 }}>
            <Text>Hello!</Text>
 <Button title="Hide modal" onPress = {() => {this.setState({ isModalVisible3: !this.state.isModalVisible3 })}}/>
          </View>
        </Modal>

		 <Modal isVisible4={this.state.isModalVisible4}>
          <View style={{ flex: 1 }}>
            <Text>Hello!</Text>
            <Button title="Hide modal" onPress = {() => {this.setState({ isModalVisible4: !this.state.isModalVisible4 })}} />
          </View>
        </Modal>

   {!this.state.show &&
	 <Card
  title='HELLO WORLD' >
{this.state.checked &&  <Image
          style={{width: 300, height: 150}}
          source={{uri: 'https://media.giphy.com/media/Ii4xqtDPtKqUf2Ja9W/giphy.gif'}}
        />}
        {this.state.checked1 &&  <Image
                  style={{width: 300, height: 150}}
                  source={{uri: 'https://media.giphy.com/media/QsmBOoPjalyqVoMlk0/giphy.gif'}}
                />}
                {this.state.checked2 &&  <Image
                          style={{width: 300, height: 150}}
                          source={{uri: 'https://media.giphy.com/media/lTkUP2CFZM5LSLikKr/giphy.gif'}}
                        />}

    <Button title="Show modal" onPress={this.toggleModal} />
              <CheckBox
                title="Ok"
                onPress={this.press}
                checked={this.state.checked}
              />
              {this.state.checked && !this.state.isModalVisible  && this.speak1() }
			   <CheckBox
                title="Bye"
                onPress={this.press1}
                checked={this.state.checked1}
              />
              {this.state.checked1 &&  !this.state.isModalVisible && this.speak2() }
			   <CheckBox
                title="See you"
                onPress={this.press2}
                checked={this.state.checked2}
              />
              {this.state.checked2 && !this.state.isModalVisible &&  this.speak3() }
	<TouchableOpacity onPress={this.onhidden} style={styles.button}>
       <Text> Touch Here </Text>
    </TouchableOpacity>
</Card>
	}
{this.state.show1 &&
<Card
  title='HELL'>


<Button title="Show modal" onPress={this.toggleModal1} />
              <CheckBox
                title="Click Here!"
                onPress={this.press}
                checked={this.state.checked}
              />
			   <CheckBox
                title="Click Here!"
                onPress={this.press1}
                checked={this.state.checked1}
              />
			   <CheckBox
                title="Click Here!"
                onPress={this.press2}
                checked={this.state.checked2}
              />
	<TouchableOpacity onPress={this.onhidden1} style={styles.button}>
         <Text> Touch Here </Text>
    </TouchableOpacity>
</Card>
}
{this.state.show2 &&
<Card
  title='HELLO WORLD'>
<Button title="Show modal" onPress={this.toggleModal2} />
             <CheckBox
                title="Click Here!"
                onPress={this.press}
                checked={this.state.checked}
              />
			   <CheckBox
                title="Click Here!"
                onPress={this.press1}
                checked={this.state.checked1}
              />
			   <CheckBox
                title="Click Here!"
                onPress={this.press2}
                checked={this.state.checked2}
              />
	<TouchableOpacity onPress={this.onhidden2} style={styles.button}>
       <Text> Touch Here </Text>
    </TouchableOpacity>
</Card>

}
{this.state.show3 &&
<Card
  title='HELLO WORLD'>
  <Button title="Show modal" onPress={this.toggleModal3} />
             <CheckBox
                title="Click Here!"
                onPress={this.press}
                checked={this.state.checked}
              />
			   <CheckBox
                title="Click Here!"
                onPress={this.press1}
                checked={this.state.checked1}
              />
			   <CheckBox
                title="Click Here!"
                onPress={this.press2}
                checked={this.state.checked2}
              />
	<TouchableOpacity onPress={this.onhidden3} style={styles.button}>
     <Text> Touch Here </Text>
    </TouchableOpacity>
</Card>
}
{this.state.show4 &&
<Card
  title='HELLO WORLD'>
 <Button title="Show modal" onPress={this.toggleModal4} />
             <CheckBox
                title="Click Here!"
                onPress={this.press}
                checked={this.state.checked}
              />
			   <CheckBox
                title="Click Here!"
                onPress={this.press1}
                checked={this.state.checked1}
              />
			   <CheckBox
                title="Click Here!"
                onPress={this.press2}
                checked={this.state.checked2}
              />
	<TouchableOpacity onPress={this.onhidden4} style={styles.button}>
     <Text> Touch Here </Text>
    </TouchableOpacity>
</Card>
}

{this.state.show5&&

       <Card
  title='HELLO WORLD'>
            {this.state.count>50&& <PercentageCircle radius={50} percent={this.state.count} color={"#3498db"}>
      <Image style={{width:50,height:50}}   source={{uri: 'https://www.pngfind.com/pngs/m/7-71088_iphone-png-emoticons-download-emoji-happy-emoji-png.png'}} />
    </PercentageCircle>   }
        {this.state.count<50 &&<PercentageCircle radius={50} percent={this.state.count} color={"#3498db"}>
      <Image style={{width:50,height:50}}   source={{uri: 'https://www.pngfind.com/pngs/m/47-476199_free-png-download-sad-emoji-png-images-background.png'}} />
    </PercentageCircle> }
			{this.state.count<50 && this.speak4() }
			{this.state.count>50 && this.speak5()}
			<Button onPress={this.onShare} title="Share" />
       </Card>
}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
})
