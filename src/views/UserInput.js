import React from 'react';
import {
  View,Text, StyleSheet, useWindowDimensions, TextInput
  
} from 'react-native';

const UserInput = ({value, setValue, placeholder, secureTextEntry})  => {


  return (
    <View style={styles.container}>
      <TextInput value={value} 
      onChangeText={setValue}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}

        style={styles.input}
      
       />
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
      backgroundColor: 'white',
      borderColor: '#0e0014',
      width:'100%',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginVertical: 5,

    },
    input: {},
});

export default UserInput;
