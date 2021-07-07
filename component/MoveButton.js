import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    asset,
    VrButton,
    Environment
  } from 'react-360';

  export default class MoveButton extends React.Component{

    changeBackground() {
        Environment.setBackgroundImage(asset('background.jpg'));
    }

      render(){
          const {movebtn, viewRoom, moveText} = styles;
          return(
              <VrButton onClick={() => this.changeBackground()}>
                  <Image style={movebtn} source={asset(this.props.image)} />
                  <View style={viewRoom}>
                    <Text style={moveText}>Tokyo City</Text>
                  </View>
              </VrButton>
          );
      }
  }

  const styles = StyleSheet.create({
    movebtn:{
        width: 100,
        height: 100,
        transform: [
            {translate: [-1000,70,-50]},
            {rotateY: -280},
            {rotateX: 180},
            {rotateZ: 180},
    ],
        position: 'absolute',
    },
    viewRoom: {
        backgroundColor: 'black',
        transform: [
            {translate: [-1000,-30,-50]},
            {rotateY: 280},
            {rotateX: 170},
            {rotateZ: 180},
        ],
        padding: 10,
    },
    moveText:{
        color: 'white',
        width: 200,
        fontSize: 40,
        textAlign: 'center'
    }
  })