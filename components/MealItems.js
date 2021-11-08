import React from "react";

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const MealItems = (mprops) => {
  return (
    <View style={mstyles.mealItem}>
      <TouchableOpacity onPress={mprops.onSelectMeal}>
        <View>
          <View style={{ ...mstyles.mealrows, ...mstyles.mealHeader }}>
            <ImageBackground
              source={{ uri: mprops.image }}
              style={mstyles.bgimage}
            >
              <View style={mstyles.titleConstainer}>
                <Text style={mstyles.title} numberOfLines={1}>
                  {mprops.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...mstyles.mealrows, ...mstyles.mealDetails }}>
            <Text>{mprops.duration}minutes</Text>
            <Text>{mprops.complexity.toUpperCase()}</Text>
            <Text>{mprops.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MealItems;

const mstyles = StyleSheet.create({
  titleConstainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: "my-open-sans-bold",
    fontSize: 20,
    color: "white",
    //textAlign: "center",
  },
  bgimage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  mealItem: {
    margin: 6,
    height: 200,
    //width: 395,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
  },
  mealrows: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "90%",
  },
  mealDetails: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "10%",
  },
});
