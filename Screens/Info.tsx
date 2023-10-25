import { StyleSheet,SafeAreaView, Text, View,TouchableOpacity } from 'react-native'
import React from 'react';
import { auth } from '../firebase';
import { useAuth } from '../hooks/useAuth';
import HeaderForm from '../Components/HeaderForm';

const InfoScreen = () => {
  const credentials = useAuth();
  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderForm title="User info"/>
      <View>
        <Text style={styles.infoText}>Username: {credentials.credentials?.username}</Text>
        <Text style={styles.infoText}>Email: {credentials.credentials?.email}</Text>
        </View>
       <TouchableOpacity onPress={handleLogout} style={styles.button}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default InfoScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
      },
      button: {
        backgroundColor: "#0782F9",
        width: "90%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
      },
    buttonText: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 16,
      },
      infoText:{
        textAlign: "center",
        fontSize: 18,
      },
})