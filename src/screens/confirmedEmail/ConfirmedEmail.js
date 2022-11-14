import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import UserInput from '../../views/UserInput';
import CustomButton from '../../components/buttons/CustomButton';
import SocialBtns from '../../components/socials/SocialBtns';

const ConfirmedEmail = () => {
  const [code, setCode] = useState('');

  

  const onResendPress = () => {
    console.warn('Resend Password');
  };

  const onConfirmPress = () => {
    console.warn('Confirm Password');
  };

  const onLoginPress = () => {
    console.warn('Login');
  };
  

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>

        <UserInput placeholder="Code" value={code} setValue={setCode} />
        <UserInput placeholder="Enter your confirmation code" value={code} setValue={setCode} />

        
        <CustomButton text="Confirm" onPress={onConfirmPress} />


        <SocialBtns />
        <CustomButton
          text="Resend Code"
          onPress={onResendPress}
          type="SECONDARY"
        />

        <CustomButton
          text="Back to Login"
          onPress={onLoginPress}
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
  text: {
    color: '#000000',
    marginVertical: 10,
  },
  link: {
    color: '##31144b',
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

export default ConfirmedEmail;
