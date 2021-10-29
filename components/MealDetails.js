import React from "react";
import { Text, View, StyleSheet } from "react-native";

const MealDetails = (props) => {
  return (
    <View>
      <Text>{props.title}</Text>
      <Text>{props.steps}</Text>
    </View>
  );
};

export default MealDetails;

const mmstyle = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f34",
    alignItems: "center",
    justifyContent: "center",
  },
});
