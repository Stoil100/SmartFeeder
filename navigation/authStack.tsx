import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/Home';
import LoginScreen from '../Screens/Login';
import RegisterScreen from '../Screens/Register';
const Stack = createNativeStackNavigator();

export default function authStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name="Login" component={LoginScreen} />
      <Stack.Screen options={{headerShown:false}} name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

