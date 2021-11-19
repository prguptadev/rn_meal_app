import React from "react";
import { StyleSheet, View, Text } from "react-native";
import MealList from "../components/MealList";
import HeaderButtonss from "../components/HeaderButtonss";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
//import { MEALS } from "../data/dummy-data";
// use store to get melas
import { useSelector } from "react-redux";
const FavouriteMealScreen = (fmprops) => {
  const FavMeals = useSelector((state) => state.meals.FavouriteMeals);

  if (FavMeals.length === 0 || !FavMeals) {
    return (
      <View style={fmstyles.screen}>
        <Text style={fmstyles.title} numberOfLines={1}>
          No favourite meal found, Start add some first!!
        </Text>
      </View>
    );
  }

  //again MEALS replaced by FavMeals
  // const FavMeals = FavMeals.filter((meal) => meal.id === "m1" || meal.id === "m3"); // now this will be taken care in store soo commented
  return (
    <MealList listData={FavMeals} navigation={fmprops.navigation} />
    // <View style={fmstyles.screen}>
    //   <Text>This is Favourite Meal Screen</Text>
    // </View>
  );
};

export default FavouriteMealScreen;

FavouriteMealScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Favourite Meal!",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButtonss}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const fmstyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "my-open-sans-bold",
    fontSize: 16,
    textAlign: "center",
  },
});
