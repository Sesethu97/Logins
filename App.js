
import React from 'react';
import {
  SafeAreaView,Text, StyleSheet
  
} from 'react-native';
// import Login from './src/screens/login/Login';
import Register from './src/screens/register/Register';

const App = ()  => {

  return (
    <SafeAreaView style={styles.root}>
      <Text>
        {/* <Login/> */}
        <Register />

      </Text>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex:1,
    backgroundColor: '#ffffff'
  },
});

export default App;
