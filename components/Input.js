import React from "react";
import { TextInput, StyleSheet } from "react-native";
import colors from "../constants/colors";

const Input = (props) => {
  const inputStyle = { ...styles.input, ...props.style };

  return <TextInput {...props} style={inputStyle} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: colors.inputBorderColor,
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
