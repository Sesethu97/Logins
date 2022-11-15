import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import CustomButton from '../../components/buttons/CustomButton';
import logo from '../../../assets/images/logo.png';
import SocialBtns from '../../components/socials/SocialBtns';
import UserInput from '../../components/inputs/UserInput';
import {useForm, Controller} from 'react-hook-form';

const Login = ({navigation}) => {
  const {height} = useWindowDimensions();

  const {control, handleSubmit, formState:{errors}} = useForm();

  const onloginPress = data => {
    navigation.navigate('Welcome');
  };

  const onForgetPasswordPress = () => {
    navigation.navigate('ForgetPassword');
  };

  const onRegister = () => {
    navigation.navigate('Register');
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
          name="username"

          placeholder="Username"
          control={control}
          rules={{required: 'Username is required'}}
          
        />
        <UserInput
          name="passwword"

          placeholder="Password"
          control={control}
          secureTextEntry={true}
          rules={{required: 'Password is required',minLength:{
            value:6, message:'Passsword must be at least 6 characters'

          },}}

        />



        <CustomButton text="Login" onPress={handleSubmit(onloginPress)} />

        <CustomButton
          text="Forget Password?"
          onPress={onForgetPasswordPress}
          type="TERTIARY"
        />
        <SocialBtns />

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
