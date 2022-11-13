import {View, Text} from 'react-native';
import React from 'react';
import CustomButton from '../buttons/CustomButton';

const SocialBtns = () => {
  const onloginFacebook = () => {
    console.warn('Faceboook');
  };
  const onloginInstagram = () => {
    console.warn('Instagram');
  };
  const onloginGoogle = () => {
    console.warn('Google');
  };
  return (
    <>
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
    </>
  );
};

export default SocialBtns;
