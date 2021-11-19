import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import { useSelector } from "react-redux";
import MealItems from "../components/MealItems";

const MealList = (mlprops) => {
  const favMeals = useSelector((state) => state.meals.FavouriteMeals); // rather than in mealdetails making icon chnage for fav
  // here checking fav and apssing some function with true and false value
  const renderMealItems = (itemData) => {
    const isFavorite = favMeals.some(
      (mealss) => mealss.id === itemData.item.id
    );
    return (
      <MealItems
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        onSelectMeal={() =>
          mlprops.navigation.navigate("MealDetail", {
            mealId: itemData.item.id,
            mealTitle: itemData.item.title,
            isFav: isFavorite,
          })
        }
      />
      // <View>
      //   <Text>{itemData.item.title}</Text>
      // </View>
    );
  };

  return (
    <View style={mlstyle.list}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={mlprops.listData}
        renderItem={renderMealItems}
        style={{ width: "100%" }}
      />
      {/* <Text>This is Category Meal Screen</Text>
      <Text>{selectCat.title}</Text>
      <Button
        title="Go to Meal Detail"
        onPress={() => cmprops.navigation.navigate("MealDetail")}
      /> */}
    </View>
  );
};

const mlstyle = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MealList;
