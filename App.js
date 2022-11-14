import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from './src/screens/welcome/Welcome';
import Login from './src/screens/login/Login';
import Register from './src/screens/register/Register';
import ConfirmedEmail from './src/screens/confirmedEmail/ConfirmedEmail';
import ForgetPassword from './src/screens/forgetPassword/ForgetPassword';
import NewPassword from './src/screens/newPassword/NewPassword';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmedEmail} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    // margin: 10,
    width: '100%',
  },
});

export default App;
