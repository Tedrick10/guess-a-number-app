import React from "react";
import { Text, StyleSheet } from "react-native";

const TitleText = (props) => {
  const style = { ...styles.body, ...props.style };

  return <Text style={style}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  body: {
    fontSize: 18,
    fontFamily: "open-sans-bold",
  },
});

export default TitleText;
