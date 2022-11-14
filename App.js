
import React from 'react';
import {
  SafeAreaView,Text, StyleSheet
} from 'react-native';

import Navigation from './src/components/navigation/Index';
import Login from './src/screens/login/Login';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const App = ()  => {

  return (
    <SafeAreaView style={styles.root}>
      <Text>
        <Login/>
        {/* <Register /> */}
        {/* <ConfirmedEmail/> */}
        {/* <ForgetPassword/> */}
        {/* <NewPassword/> */}
        {/* <Navigation /> */}
      </Text>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex:1,
    backgroundColor: '#fff',
    // margin: 10,
    height: hp('70%'), 
    width: wp('80%') ,
  },
});

export default App;
