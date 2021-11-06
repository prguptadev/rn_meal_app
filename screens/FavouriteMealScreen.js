import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
const FavouriteMealScreen = (fmprops) => {
  const FavMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m3");
  return (
    <MealList listData={FavMeals} navigation={fmprops.navigation} />
    // <View style={fmstyles.screen}>
    //   <Text>This is Favourite Meal Screen</Text>
    // </View>
  );
};

export default FavouriteMealScreen;

FavouriteMealScreen.navigationOptions = {
  headerTitle: "Your Favourite Meal!",
};

const fmstyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
