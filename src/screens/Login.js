import React from 'react';
import {
  View,Text, Image, StyleSheet
  
} from 'react-native';
import logo from '../../assets/images/logo.png'

const Login = ()  => {

  return (
    <View>
      <Text>sign in</Text>
      <Image source={logo} style={styles.logo} resizeMode="contain" />

    </View>
  );
};

const styles = StyleSheet.create({
    logo: {
        width:100,
        height:100,

    },
});

export default Login;
