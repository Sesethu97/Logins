import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../../screens/welcome/Welcome';
import Login from '../../screens/login/Login';
import Register from '../../screens/register/Register';
import ConfirmedEmail from '../../screens/confirmedEmail/ConfirmedEmail';
import ForgetPassword from '../../screens/forgetPassword/ForgetPassword';
import NewPassword from '../../screens/newPassword/NewPassword';

const Stack = createNativeStackNavigator();

const Navigation = () => {
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
export default Navigation;
