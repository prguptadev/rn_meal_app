import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MealDetailScreen = (mdprops) => {
  return (
    <View style={mdstyles.screen}>
      <Text>This is Meal Details Screen</Text>
    </View>
  );
};

export default MealDetailScreen;

const mdstyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
