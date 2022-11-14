import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
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
    width: wp('90%') ,
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
  
  container_SECONDARY: {
    backgroundColor: '#1f1529', 
    borderWidth:2,
    alignSelf: 'center',

  },

  text:{
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  text_SECONDARY:{
    color: '#FFFF',


  },
  text_TERTIARY:{
    fontWeight: 'bold',
    color: '#000000',
  },
  text_TERTIARYS:{
    color: '#FFF',
  }

});
export default CustomButton;