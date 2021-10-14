import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CategoryMealScreen = (cmprops) => {
  return (
    <View style={cmstyles.screen}>
      <Text>This is Category Meal Screen</Text>
    </View>
  );
};

export default CategoryMealScreen;

const cmstyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
