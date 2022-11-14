import {View, Text, ImageBackground, StyleSheet, Dimensions} from 'react-native';
import React from 'react';



const Welcome = () => {
    const localImage = require('../../../assets/images/wall.jpg')
  return (
    <View style={styles.container}>
      <ImageBackground source={localImage} resizeMode="contain" style={styles.image}>
        <Text style={styles.text}>Welcome</Text>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});
export default Welcome;
