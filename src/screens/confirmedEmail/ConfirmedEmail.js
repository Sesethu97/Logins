import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import UserInput from '../../components/inputs/UserInput';
import CustomButton from '../../components/buttons/CustomButton';
import {useForm} from 'react-hook-form'
const ConfirmedEmail = ({navigation}) => {
  const {control, handleSubmit} = useForm();

  

  const onResendPress = (data) => {
    navigation.navigate('Resend Password');
  };

  const onConfirmPress = () => {
    navigation.navigate('Welcome');
  };

  const onLoginPress = () => {
    navigation.navigate('Login');
  };
  

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>

        <UserInput name="code"
         control={control}
         placeholder='Please enter your confirmation code'
         rules={{required:'Confirmation code is required'}}
         />
        {/* <UserInput placeholder="Enter your confirmation code" value={code} setValue={setCode} /> */}

        
        <CustomButton text="Confirm" onPress={handleSubmit(onConfirmPress)} />


      
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
