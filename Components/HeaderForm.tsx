import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

interface Props {
  title: string;
}

const HeaderForm = ({ title }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("./img/smartFeederLogo.png")}
        style={{ width: 100, height: 100 }}
      />
      {title === "Log in" && (
        <Text style={styles.headerTitle}>Welcome back to Smart Feeder</Text>
      )}
      {title === "Sign up" && (
        <Text style={styles.headerTitle}>Welcome to Smart Feeder</Text>
      )}
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

export default HeaderForm;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontWeight: "700",
    fontSize: 32,
  },
  headerTitle: {
    fontWeight: "700",
    fontSize: 24,
  },
  headerText: {
    fontSize: 20,
  },
});
