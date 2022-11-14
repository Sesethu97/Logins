
import React from 'react';
import {
  SafeAreaView,Text, StyleSheet
} from 'react-native';

import Navigation from './src/components/navigation/Index';
import Login from './src/screens/login/Login';
import Welcome from './src/screens/welcome/Welcome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const App = ()  => {

  return (
    <SafeAreaView style={styles.root}>
      <Text>
        {/* <Login/> */}
        {/* <Register /> */}
        {/* <ConfirmedEmail/> */}
        {/* <ForgetPassword/> */}
        {/* <NewPassword/> */}
        {/* <Navigation /> */}
        <Welcome/>
      </Text>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex:1,
    backgroundColor: '#fff',
    // margin: 10,
    width: '100%',
  },
});

export default App;
