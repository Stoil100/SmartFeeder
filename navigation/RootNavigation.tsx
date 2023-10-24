import React from 'react';
import { useAuth } from '../hooks/useAuth';
// import UserStack from './userStack';
import AuthStack from './authStack';
import HomeScreen from '../Screens/Home';
import UserStack from './userStack';

export default function RootNavigation() {
  const { user } = useAuth();
  console.log(user);

  return user ? <UserStack/> : <AuthStack />;
}