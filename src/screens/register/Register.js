import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import UserInput from '../../components/inputs/UserInput';
import CustomButton from '../../components/buttons/CustomButton';
import SocialBtns from '../../components/socials/SocialBtns';
import {useForm} from 'react-hook-form'
import { validate } from 'uuid';



const Email_Regex =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const Login = ({navigation}) => {
  const {control, handleSubmit, watch} = useForm();
  const passwrd = watch('password');
  const onRegisterPress = () => {
    navigation.navigate("ConfirmEmail");

    };
    
    const onLoginPress = () => {
      navigation.navigate("Login");
    };
  


  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed');
    // Addlink to page
  };
  const onPrivacyPressed = () => {
    console.warn('onPrivacyPressed');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Creat an account</Text>

        <UserInput
          name='username'
          control={control}
  
          placeholder="Username"
          rules={{required:'Username is required',
          minLength:{value:6,
            message:'Username must be at least 6 characters'},
            maxLength:{value:26,
              message:'Username should be a max of  26 characters'},}}
          
        />
        <UserInput
          name='email'
          control={control}
  
          placeholder="Email"
          rules={{pattern:{value:Email_Regex, message:'Invalid Email'}}}
        />
        <UserInput
        name ='password'
          placeholder="Password"
          control={control}

          secureTextEntry={true}
          rules={{required:'Password is required',
          minLength:{value:6,
            message:'Password must be at least 6 characters'},
            maxLength:{value:26,
              message:'Password should be a max of  26 characters'},}}
        />
         <UserInput
                   name="repeat-password"

          placeholder="Repeat Password"
          control={control}
          secureTextEntry={true}
          rules={{validate: value => value = passwrd || 'Password do not match'}}
          
        />

        <CustomButton text="Register" onPress={handleSubmit(onRegisterPress)} />

        <Text style={styles.text}>
            By registering with us, it means that you accept our 
            <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and{' '}
            <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
        </Text>
        <SocialBtns/>
        <CustomButton text="Have an account? Login"
        onPress={onLoginPress}
        type="TERTIARY"/>
        
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
  text:{
    color : '#000000',
    marginVertical:10,
  },
  link: {
    color: '##31144b'
  },
  title: {
    fontSize: 24,
    margin: 10,
    fontWeight: 'bold',
    color: '#0b060e',
  },
});

export default Login;
