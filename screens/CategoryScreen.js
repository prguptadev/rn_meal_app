import React from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Button,
  Platform,
  TouchableOpacity,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import MyColors from "../constants/MyColors";
import CategoryGridTiles from "../components/CategoryGridTiles";
const CategoryScreen = (cprops) => {
  const renderGridItem = (itemdata) => {
    // grids can be redesign and use as component
    return (
      <CategoryGridTiles
        title={itemdata.item.title}
        color={itemdata.item.color}
        onSelect={() => {
          cprops.navigation.navigate({
            routeName: "CategoryMeal",
            params: {
              categoryId: itemdata.item.id,
            },
          });
        }}
      />
      // <TouchableOpacity
      //   style={cstyles.gridItem}
      //   onPress={() => {
      //     cprops.navigation.navigate({
      //       routeName: "CategoryMeal",
      //       params: {
      //         categoryId: itemdata.item.id,
      //       },
      //     }); // or alternative way to navigate("CategoryMeal",{categoryId:12})
      //   }}
      // >
      //   <View>
      //     <Text>{itemdata.item.title}</Text>
      //   </View>
      // </TouchableOpacity>
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id} //no need before 4 react just for reff
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
    />
    // <View style={cstyles.screen}>
    //   <Text>This is Category Screen</Text>
    //   <Button
    //     title="Go to Category Meal"
    //     onPress={() =>
    //       cprops.navigation.navigate({ routeName: "CategoryMeal" })
    //     }
    //   />
    // </View>
  );
};

export default CategoryScreen;

CategoryScreen.navigationOptions = {
  headerTitle: "Meal Category",
  // headerStyle: {
  //   backgroundColor:
  //     Platform.OS === "android"
  //       ? MyColors.primaryScreen
  //       : MyColors.iosPrimarycolor,
  // },
  // headerTintColor: Platform.OS === "android" ? "blue" : "black",
  //// header style repeated every time for every screen rather than , keep it in meal naivagtor
};
const cstyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});
