import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'


const InfoScreen = () => {
  return (
    <View style={styles.container}>
       <TouchableOpacity onPress={() => {}} style={styles.button}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default InfoScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      button: {
        backgroundColor: "#0782F9",
        width: "100%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
      },
    buttonText: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 16,
      },
})