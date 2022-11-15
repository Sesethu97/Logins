import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomButton from '../../components/buttons/CustomButton';
import UserInput from '../../components/inputs/UserInput';
import {useForm} from 'react-hook-form';

const NewPassword = ({navigation}) => {
  const {control, handleSubmit} = useForm();

  const onLoginPress = data => {
    navigation.navigate('Login');
  };

  const onSubmitPress = () => {
    navigation.navigate('Welcome');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <UserInput
          name="code"
          control={control}
          placeholder="Please enter your confirmation code"
          rules={{required: 'Confirmation code is required'}}
        />
        <UserInput
          name="new-password"
          control={control}
          placeholder="Please enter new Password"
          rules={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
            maxLength: {
              value: 26,
              message: 'Password should be a max of  26 characters',
            },
          }}
        />

        <CustomButton text="Submit" onPress={handleSubmit(onSubmitPress)} />
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

export default NewPassword;
