import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/Home';
import LoginScreen from './Screens/Login';
import RegisterScreen from './Screens/Register';
import RootNavigation from './navigation/RootNavigation';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <RootNavigation/>
  );
}

