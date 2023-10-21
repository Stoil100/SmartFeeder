import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          // value={}
          // onChangeText={text=>}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          // value={}
          // onChangeText={text=>}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor:"#fff",
    paddingHorizontal: 15,
    paddingVertical:10,
    borderRadius:10,
    marginTop:5,
  },
  buttonContainer: {
    width:"60%",
    justifyContent:"center",
    alignItems:"center",
    marginTop:40,
  },
  button: {
    backgroundColor:"#0782F9",
    width:"100%",
    padding:15,
    borderRadius:10,
    alignItems:"center",
  },
  buttonOutline: {
    backgroundColor:"#fff",
    marginTop:5,
    borderColor:"#0782F9",
    borderWidth:2,
  },
  buttonText: {
    color:"#fff",
    fontWeight:"700",
    fontSize:16,
  },
  buttonOutlineText: {
    color:"#0782F9",
    fontWeight:"700",
    fontSize:16,
  },
});
