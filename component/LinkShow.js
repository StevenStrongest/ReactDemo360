import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    asset,
    VrButton,
    Animated,
    NativeModules 
  } from 'react-360';
  

  export default class LinkShow extends React.Component{

    render(){
        const {linkButton} = styles;
        return(
            <VrButton 
            onClick={() =>NativeModules.LinkingManager.openURL('https://tourzy.webvr.vn/agri/files/5B23.65D%20File%20chC3A0o%20triE1BB83n%20lC3A3m%20TTA%20NC3B4ng%20nghiE1BB87p.pdf', '_blank')}
            >
            <Image style={linkButton} source={asset(this.props.image)}></Image>
            </VrButton>
        );
    }
  }


  const styles = StyleSheet.create({
    linkButton:{
        width: 50,
        height: 50,
        transform: [
            {translate: [-850,-30,-450]},
            {rotateY: -280},
            {rotateX: 180},
            {rotateZ: 180},
    ],
        position: 'absolute'
    }
  })
