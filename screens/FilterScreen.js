import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HeaderButtonss from "../components/HeaderButtonss";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const FilterScreen = (fprops) => {
  return (
    <View style={fstyles.screen}>
      <Text>This is Filter Screen</Text>
    </View>
  );
};

export default FilterScreen;

FilterScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Filter Meal",
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

const fstyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
