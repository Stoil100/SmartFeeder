import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firestore,db } from "../firebase";
import { useForm, Controller } from "react-hook-form";
import { setDoc, doc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { set, ref } from "firebase/database";


interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterScreen = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const [loading, setLoading] = useState(false);
  const handleSignup = async (data: FormData) => {
    if (data.password === data.confirmPassword) {
      setLoading(true);
      try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
        await set(ref(db, `users/${user.uid}`), {
          email: user.email,
          username:data.username,
        });
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else {
      console.log("password doesnt match");
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          rules={{
            maxLength: 100,
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Username"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
            />
          )}
          name="username"
        />
        {errors.username && <Text>This is required.</Text>}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
            />
          )}
          name="email"
        />
        {errors.email && <Text>This is required.</Text>}

        <Controller
          control={control}
          rules={{
            maxLength: 100,
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
            />
          )}
          name="password"
        />
        {errors.password && <Text>This is required.</Text>}
        <Controller
          control={control}
          rules={{
            maxLength: 100,
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Confirm Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
            />
          )}
          name="confirmPassword"
        />
        {errors.confirmPassword && <Text>This is required.</Text>}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSubmit(handleSignup)}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

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
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "#fff",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
});
