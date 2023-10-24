import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import CircularProgress from "react-native-circular-progress-indicator";

interface Props {
  title: string;
  value: number;
  color: string;
  radius: number;
}

const Container = ({ title, value, color, radius }: Props) => {
  return (
    <View style={styles.progressBox}>
      <Text style={styles.progressText}>{title} Level</Text>
      <CircularProgress
        value={value}
        activeStrokeColor={color}
        inActiveStrokeColor={color}
        inActiveStrokeOpacity={0.2}
        progressValueColor={color}
        valueSuffix={"%"}
        radius={radius}
      />
      <TouchableOpacity onPress={() => {}} style={styles.button}>
        <Text style={styles.buttonText}>Refill {title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  progressBox: {
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  waterProgressBox: {
    width: "30%",
  },
  progressText: {
    fontWeight: "700",
    fontSize: 24,
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
});
