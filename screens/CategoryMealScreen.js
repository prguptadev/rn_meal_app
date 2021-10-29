import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const CategoryMealScreen = (cmprops) => {
  const catId = cmprops.navigation.getParam("categoryId");
  const selectCat = CATEGORIES.find((cat) => cat.id === catId);
  return (
    <View style={cmstyles.screen}>
      <Text>This is Category Meal Screen</Text>
      <Text>{selectCat.title}</Text>
      <Button
        title="Go to Meal Detail"
        onPress={() => cmprops.navigation.navigate("MealDetail")}
      />
    </View>
  );
};

export default CategoryMealScreen;

CategoryMealScreen.navigationOptions = (navigationData) => {
  // console.log(navigationData);
  const catId = navigationData.navigation.getParam("categoryId");
  const selectCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectCategory.title,
    // headerStyle: {
    //   backgroundColor:
    //     Platform.OS === "android"
    //       ? MyColors.primaryScreen
    //       : MyColors.iosPrimarycolor,
    // },
    // headerTintColor: Platform.OS === "android" ? "blue" : "black",
  };
  //// header style repeated every time for every screen rather than , keep it in meal naivagtor
};
const cmstyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
