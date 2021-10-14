import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CategoryScreen = (cprops) => {
  return (
    <View style={cstyles.screen}>
      <Text>This is Category Screen</Text>
    </View>
  );
};

export default CategoryScreen;

const cstyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
