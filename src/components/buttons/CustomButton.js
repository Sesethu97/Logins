import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react';

const CustomButton = ({onPress, text, type="PRIMARY", bgColor, fgColor}) => {
  return (
    <Pressable onPress={onPress} style={[
      styles.container, 
      styles[`container_${type}`], 
      bgColor ? {backgroundColor : bgColor} :{}]}>
      <Text style={[
        styles.text, 
        styles[`text_${type}`],
        fgColor ? {color: fgColor}:{}]}>{text}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container:{
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,

  },
  container_PRIMARY:{
    backgroundColor: '#0e0014', 


  },
  container_TERITARY:{
    backgroundColor: '#093532', 


  },
  text:{
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  text_TERTIARY:{
    fontWeight: 'bold',
    color: '#000000',
  }

});
export default CustomButton;