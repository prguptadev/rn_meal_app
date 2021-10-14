import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FilterScreen = (fprops) => {
  return (
    <View style={fstyles.screen}>
      <Text>This is Filter Screen</Text>
    </View>
  );
};

export default FilterScreen;

const fstyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
