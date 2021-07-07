import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    asset,
    VrButton,
    Animated
  } from 'react-360';


  export default class NavButtonInfo extends React.Component{

    state = {
        opacityAnim: new Animated.Value(0),
        show: 1
      };
      
      _fadeIn() {
        Animated.timing(this.state.opacityAnim, {
          toValue: 1,
          duration: this.props.fadeIn,
        }).start();
      }

      _fadeOut() {
        Animated.timing(this.state.opacityAnim, {
          toValue: 0,
          duration: this.props.fadeOut,
        }).start();
      }

    render(){
        const {infoButton, infoView, infoText} = styles;
        return(
            <VrButton 
                onEnter={() =>this._fadeIn()}
                onExit={() => this._fadeOut()}
            >
                <Image style={infoButton} source={asset(this.props.image)}></Image>
                <Animated.View 
                style={[
                    infoView,
                    {opacity: this.state.opacityAnim}
                    ]}>
                    <Text style={infoText}>
                    Provide Keyboard Camera Controller for your React 360 project. Now you can navigate inside 3D world using your arrow keys.
                    </Text>
                </Animated.View>
            </VrButton>
        );
    }
  }


  const styles = StyleSheet.create({
    infoButton:{
        width: 50,
        height: 50,
        transform: [
            {translate: [940,20,-45]},
            {rotateY: -250},
            {rotateX: 180},
            {rotateZ: 180},
    ],
        position: 'absolute'
    },
    infoView: {
        backgroundColor: 'black',
        transform: [
            {translate: [820,130,-40]},
            {rotateY: -280},
            {rotateX: 180},
            {rotateZ: 180},
        ],
        padding: 10
    },
    infoText:{
        color: 'white',
        width: 200,
        fontSize: 15,
    }
  })
