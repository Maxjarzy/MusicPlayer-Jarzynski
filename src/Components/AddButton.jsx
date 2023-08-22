import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";
import { colors } from "../../assets/Colors/Colors";

const AddButton = ({ title, onPress, disabled }) => {
  return (
    <Pressable
      style={disabled ? styles.buttonDisabled : styles.button}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.sun,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    width: "60%",
  },
  buttonDisabled: {
    backgroundColor: colors.sun,
    opacity: 0.3,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    width: "60%",
  },
  text: {
    color: colors.nigth,
    fontFamily: "Noto-Sans",
    fontSize: 20,
  },
});
