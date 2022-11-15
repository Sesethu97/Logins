import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomButton from '../../components/buttons/CustomButton';
import UserInput from '../../components/inputs/UserInput';
import {useForm} from 'react-hook-form'


const ForgetPassword = ({navigation}) => {
  const {control, handleSubmit} = useForm();

  const onSendPress = (data) => {
    navigation.navigate('NewPassword');
  };

  const onLoginPress = () => {
    navigation.navigate('Login');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <UserInput
        name="username"
          control={control}

          placeholder="Username"
          rules={{required:'Username is required',
          minLength:{value:6,
            message:'Username must be at least 6 characters'},
            maxLength:{value:26,
              message:'Username should be a max of  26 characters'},}}
          
      
        />

        <CustomButton text="Send" onPress={handleSubmit(onSendPress)} />

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

export default ForgetPassword;
