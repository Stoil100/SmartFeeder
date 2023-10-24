import React, { useState } from "react";
import { Modal, Text, View, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../Screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from "react-native-vector-icons/Feather";
import FA5 from "react-native-vector-icons/FontAwesome5";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import InfoScreen from "../Screens/Info";

const Tab = createMaterialBottomTabNavigator();

export default function UserStack() {
  const [value,setValue] = useState(29);


  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: "#0e1529" },
        }}
        sceneContainerStyle={{ backgroundColor: "#fff" }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarBadge:value<20?"!":undefined,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused,color }) => (
              <FA5
                name="cat"
                color={focused ? "black" : "gray"}
                size={24}
              />
            ),
          }}
        />
         <Tab.Screen
          name="Info"
          component={InfoScreen}
          options={{
            
            tabBarIcon: ({ focused }) => (
              <Feather
                name="info"
                color={focused ? "black" : "gray"}
                size={24}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
