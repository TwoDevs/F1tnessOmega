import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default (Card = () => {
  return (
    <View style={styles.containerStyle}>
      <Text>Im a card</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderRadius: 5,
    boarderColor: "#ddd",
    boarderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    padding: 5,
    marginRight: 5,
    marginLeft: 5
  }
});
