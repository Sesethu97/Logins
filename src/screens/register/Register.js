import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import UserInput from '../../views/UserInput';
import CustomButton from '../../components/buttons/CustomButton';
import SocialBtns from '../../components/socials/SocialBtns';
const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const onRegisterPress = () => {
    console.warn('Register');
  };
  
  const onForgetPasswordPress = () => {
    console.warn('Forgot Password');
  };

  const onRegister = () => {
    console.warn('Create Account');
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
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <UserInput
          placeholder="Email"
          value={email}
          setValue={setEmail}
        />
        <UserInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
         <UserInput
          placeholder="Repeat Password"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry={true}
        />

        <CustomButton text="Register" onPress={onRegisterPress} />

        <Text style={styles.text}>
            By registering with us, it means that you accept our 
            <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and{' '}
            <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
        </Text>
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
  logo: {
    width: 100,
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
