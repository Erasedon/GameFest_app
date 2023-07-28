import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
// const windowWidth = Dimensions.get('window').width;
  // const windowHeight = Dimensions.get('window').height;
  const screenHeight = Dimensions.get('screen').height;
  const screenWidth = Dimensions.get('screen').width;
// const Dimscreens = () =>{

    // const [dimensions, setDimensions] = useState({
    //   // windowW: windowWidth,
    //   // windowH: windowHeight,
    //   screenW: screenWidth,
    //   screenH: screenHeight,
    // });
  
    // useEffect(() => {
    //   const subscription = Dimensions.addEventListener(
    //     'change',
    //     // ({windowW, windowH,screenW,screenH}) => {
    //     ({screenW,screenH}) => {
    //       // setDimensions({windowW, windowH,screenW,screenH});
    //       setDimensions({screenW,screenH});
    //     },
    //   );
    //   return () => subscription?.remove();
    // });
// }
export default screenHeight;