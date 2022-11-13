import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import logo from '../../assets/images/logo.png';
import UserInput from '../../views/UserInput';
import CustomButton from '../../components/buttons/CustomButton';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {height} = useWindowDimensions();

  const onloginPress = () => {
    console.warn('Login');
  };
  const onloginFacebook = () => {
    console.warn('Faceboook');
  };
  const onloginInstagram = () => {
    console.warn('Instagram');
  };
  const onloginGoogle = () => {
    console.warn('Google');
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
        <Text>sign in</Text>
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

        <CustomButton
          text="Login with Faceboook"
          onPress={onloginFacebook}
          bgColor="#715d7c"
        />
        <CustomButton
          text="Login with Instagram"
          onPress={onloginInstagram}
          bgColor="#715d7c"
        />
        <CustomButton
          text="Login with Google"
          onPress={onloginGoogle}
          bgColor="#715d7c"
        />
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
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    maxHeight: 200,
    maxWidth: 300,
  },
});

export default Login;
