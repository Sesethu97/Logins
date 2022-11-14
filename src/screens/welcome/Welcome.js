import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomButton from '../../components/buttons/CustomButton';

const Welcome = () => {
  const onSignupPress = () => {
    console.warn('Register');
  };
  const onLoginPress = () => {
    console.warn('Login');
  };

  return (
    <View style={styles.container}>
      <View />
      <View>
        <Text style={styles.text}>Lets get started...</Text>
        <CustomButton text="Join Now" onPress={onSignupPress}
        type="SECONDARY" />
        <CustomButton
          text="Already have an account? Login"
          onPress={onLoginPress}
          type="TERTIARYS"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: 'column',
    backgroundColor: '#1b052e',
    height: hp('98%'),
    width: wp('100%'),
  },

  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default Welcome;
