import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
//import { MEALS } from "../data/dummy-data";
// using store
import { useSelector } from "react-redux";
import MealDetails from "../components/MealDetails";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButtonss from "../components/HeaderButtonss";

const MealDetailScreen = (mdprops) => {
  const availableMeals = useSelector((state) => state.meals.meals);
  const mealId = mdprops.navigation.getParam("mealId");
  //const mealisss = MEALS.find((mid) => mid.id === mealId);
  //MEALS replaced by availableMeals
  const mealDetails = availableMeals.filter((mealid) => mealid.id === mealId);
  //console.log(mealisss.title);

  // useEffect(() => {
  //   mdprops.navigation.setParams({ mealTitle: mealDetails.id });
  // }, [mealDetails]);

  //or better sennd from past sceeens

  const rendermealDetails = (itemData) => {
    return (
      <MealDetails
        title={itemData.item.title}
        steps={itemData.item.steps}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        imageuri={itemData.item.imageUrl}
        ingredients={itemData.item.ingredients}
      />
    );
  };

  return (
    <View style={mdstyles.screen}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={mealDetails}
        renderItem={rendermealDetails}
      />
      {/* <Text>{mealisss}</Text> */}
    </View>
    // <View style={mdstyles.screen}>
    //   <Text>This is Meal Details Screen</Text>
    //   <Text>{mealDetails.title}</Text>
    // </View>
  );
};

export default MealDetailScreen;

MealDetailScreen.navigationOptions = (navigatorData) => {
  // const mealId = navigatorData.navigation.getParam("mealId");
  // const mealDetail = MEALS.find((mid) => mid.id === mealId);
  const mealsttiles = navigatorData.navigation.getParam("mealTitle");

  return {
    headerTitle: mealsttiles, // hae to remove from navigator header title , which is on top priority
    // headerRight: <Text>Fav!</Text>,// without nav header button package can be used but lot of wok req
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButtonss}>
        <Item
          title="Favourite"
          iconName="ios-star"
          onPress={() => console.log("Marked as Fav")}
        />
      </HeaderButtons>
    ),
  };
};

const mdstyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
