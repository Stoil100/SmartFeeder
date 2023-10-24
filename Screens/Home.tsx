import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";
import Container from "../Components/Container";
import Header from "../Components/Header";
import  Dashboard from "../Components/Dashboard";

const HomeScreen = () => {
  const [value, setValue] = useState(0);
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigation.navigate("Login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.progressContainer}>
        <Container title="Food" color="#ffd60a" radius={70} value={80}/>
        <Container title="Water" color="#0782F9" radius={50} value={60}/>
      </View>
      <Dashboard/>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  progressContainer: {
    height: "40%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
