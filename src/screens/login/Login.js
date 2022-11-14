import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import UserInput from '../../views/UserInput';
import CustomButton from '../../components/buttons/CustomButton';
import logo from '../../../assets/images/logo.png';
import SocialBtns from '../../components/socials/SocialBtns';
import { useNavigation } from '@react-navigation/native';
import { Navigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {height} = useWindowDimensions();

  const onloginPress = () => {
    console.warn('Login');
    Navigation.navigate('Welcome')
  };
  
  const onForgetPasswordPress = () => {
    console.warn('Forgot Password');
  };

  const onRegister = () => {
    console.warn('Create Account');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>sign in</Text>
        <Image
          source={logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />

        <UserInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <UserInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />

        <CustomButton text="Login" 
        onPress={onloginPress} />

        <CustomButton
          text="Forget Password?"
          onPress={onForgetPasswordPress}
          type="TERTIARY"
        />
        <SocialBtns/>

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onRegister}
          type="TERTIARY"

        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    maxHeight: 200,
    maxWidth: 300,
    
  },
  title: {
    fontSize: 24,
    margin: 10,
    fontWeight: 'bold',
    color: '#0b060e',
  },
});

export default Login;
