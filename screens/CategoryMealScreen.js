import React from "react";
import { View, StyleSheet, Text } from "react-native";
//import { CATEGORIES, MEALS } from "../data/dummy-data";
// preiouly above we have MEALs but now we are taking from store so removing
//now once removed we need to use useSlector /pr collect to get MEals from store
import { useSelector } from "react-redux";
import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";
const CategoryMealScreen = (cmprops) => {
  // const renderMealItems = (itemData) => {
  //   return (
  //     <MealItems
  //       title={itemData.item.title}
  //       image={itemData.item.imageUrl}
  //       duration={itemData.item.duration}
  //       affordability={itemData.item.affordability}
  //       complexity={itemData.item.complexity}
  //       onSelectMeal={() =>
  //         cmprops.navigation.navigate("MealDetail", {
  //           mealId: itemData.item.id,
  //         })
  //       }
  //     />
  //     // <View>
  //     //   <Text>{itemData.item.title}</Text>
  //     // </View>
  //   );
  // };
  //   moved into meallist

  //now getting meal form use selctor hooks
  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  // console.log(availableMeals);

  const catId = cmprops.navigation.getParam("categoryId");
  const selectCat = CATEGORIES.find((cat) => cat.id === catId);
  // MEALS will be replaceed by availableMeals
  const displayMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  if (displayMeals.length === 0 || !displayMeals) {
    return (
      <View style={cmstyles.screen}>
        <Text style={cmstyles.title} numberOfLines={1}>
          No meal found, Update filter!!
        </Text>
      </View>
    );
  }
  return (
    <MealList listData={displayMeals} navigation={cmprops.navigation} />
    //here meal item has been render but now it is moved to meallist ..

    // <View style={cmstyles.screen}>
    //   <FlatList
    //     keyExtractor={(item, index) => item.id}
    //     data={displayMeals}
    //     renderItem={renderMealItems}
    //     style={{ width: "100%" }}
    //   />
    //   {/* <Text>This is Category Meal Screen</Text>
    //   <Text>{selectCat.title}</Text>
    //   <Button
    //     title="Go to Meal Detail"
    //     onPress={() => cmprops.navigation.navigate("MealDetail")}
    //   /> */}
    // </View>
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
  // screen: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },

  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "my-open-sans",
    fontSize: 16,
    textAlign: "center",
  },
});
