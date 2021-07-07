// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface, Location} from 'react-360-web';
import KeyboardCameraController from '@martinpham/react-360-keyboard-camera-controller';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // const myCylinderSurface = new Surface(
  //   4680,
  //   600,
  //   Surface.SurfaceShape.Cylinder
  // );

  // const myFlatSurface = new Surface(600, 400, Surface.SurfaceShape.Flat);
  // myFlatSurface.setAngle(-Math.PI / -330, 0); 

  // Render your app content to the default cylinder surface
  r360.renderToLocation(
    r360.createRoot('React360Demo', { /* initial props */ }),
    r360.getDefaultLocation()
  );

  r360.renderToLocation(
    r360.createRoot('NavButtonInfo', { 
      image: 'info_icon.png'
    }),
    r360.getDefaultLocation()
  );

  r360.renderToLocation(
    r360.createRoot('LinkShow', { 
      image: 'link_info.png'
    }),
    r360.getDefaultLocation()
  );

  r360.renderToLocation(
    r360.createRoot('MoveButton', { 
      image: 'chester_icon.png'
    }),
    r360.getDefaultLocation()
  );

  r360.controls.addCameraController(new KeyboardCameraController());
  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('2CYYBC7.jpg'));
}

window.React360 = {init};
