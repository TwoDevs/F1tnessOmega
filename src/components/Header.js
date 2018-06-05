import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Header = props => (
  <View style={styles.container}>
    <Text style={styles.titleText}>{props.title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    padding: 10,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4
  },
  titleText: {
    fontSize: 30
  }
});

export default Header;
