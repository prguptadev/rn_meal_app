import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FavouriteMealScreen = (fmprops) => {
  return (
    <View style={fmstyles.screen}>
      <Text>This is Favourite Meal Screen</Text>
    </View>
  );
};

export default FavouriteMealScreen;

const fmstyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
