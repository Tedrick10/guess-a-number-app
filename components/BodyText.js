import React from "react";
import { Text, StyleSheet } from "react-native";

const BodyText = (props) => {
  const bodyTextStyle = { ...styles.body, ...props.style };

  return <Text style={bodyTextStyle}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  body: {
    fontFamily: "open-sans",
  },
});

export default BodyText;
