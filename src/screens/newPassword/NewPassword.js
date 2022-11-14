import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import UserInput from '../../views/UserInput';
import CustomButton from '../../components/buttons/CustomButton';

const NewPassword = () => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const onLoginPress = () => {
    console.warn('Login');
  };

  const onSubmitPress = () => {
    console.warn('Resend Password');
  };

  const onSendPress = () => {
    console.warn('Confirm Password');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <UserInput placeholder="Code" value={code} setValue={setCode} />

        <CustomButton text="Code" value={code} setValue={setCode} />
        <CustomButton
          text="Enter your new password"
          value={newPassword}
          setValue={setNewPassword}
        />

        <CustomButton text="Submit" onPress={onSubmitPress} />
        <CustomButton
          text="Back to Login"
          onPress={onLoginPress}
          type="SECONDARY"
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
