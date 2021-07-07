import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  asset,
  Video,
  VideoControl,
  MediaPlayerState
} from 'react-360';
import LinkShow from './component/LinkShow';
import NavButtonInfo from './component/NavButton';
import MoveButton from './component/MoveButton';


const degreesToPixels = degrees => -(degrees / 360) * 4680;
const PPM = 1 / (2 * Math.PI * 3) * 4680;

export default class React360Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerState: new MediaPlayerState({autoPlay: false, muted: false}),
    };
  }

  render() {
    const {panel} = styles;
    return (
      <View style={panel}>
        <Video 
        style={{width: '100%',height: '100%',alignItems: 'flex-end',justifyContent: 'flex-end'}} 
        source={{uri:'./static_assets/Three-Cocktails.webm'}}
        playerState={this.state.playerState}
        >
          <VideoControl
            style={{
              height: 30,
              width: '100%',
              marginTop: 200
            }}
            fontSize={3}
            playerState={this.state.playerState}
          />
        </Video>
      </View>
    );
  }
};


const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface

    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    transform: [
      {translate: [degreesToPixels(14), degreesToPixels(-27), degreesToPixels(65)]},
      {rotateY: 180},
      {rotateX: 180},
      {rotateZ: 180},
    ],
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
    height: 220
  },

});

AppRegistry.registerComponent('React360Demo', () => React360Demo);
AppRegistry.registerComponent('NavButtonInfo', () => NavButtonInfo);
AppRegistry.registerComponent('LinkShow', () => LinkShow);
AppRegistry.registerComponent('MoveButton', () => MoveButton);

