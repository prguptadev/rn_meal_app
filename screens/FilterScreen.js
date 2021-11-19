import React, { useState, useEffect, useCallback } from "react";
import { View, Text, Switch, StyleSheet, Platform } from "react-native";
import HeaderButtonss from "../components/HeaderButtonss";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import MyColors from "../constants/MyColors";
import { useDispatch } from "react-redux";
import { toggleFilters } from "../store/actions/mealActions";

const FilterSwitch = (props) => {
  return (
    <View style={fstyles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{
          true: MyColors.Switchcolor,
          false: MyColors.iosPrimarycolor,
        }}
        thumbColor={MyColors.primaryScreen}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FilterScreen = (fprops) => {
  const { navigation } = fprops;

  const [isGlutenFree, setisGlutenFree] = useState(false);
  const [isLactoseFree, setisLactoseFree] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [vegetarian, setvegetarian] = useState(false);
  const [savey, setSavey] = useState(false);

  const dispatch = useDispatch();

  const saveFiltersHandler = useCallback(() => {
    const appliedFilter = {
      isglutenfree: isGlutenFree,
      islactosefree: isLactoseFree,
      isvegan: vegan,
      isvegetarian: vegetarian,
    };
    // console.log(appliedFilter);

    setSavey(isGlutenFree || isLactoseFree || vegan || vegetarian);

    dispatch(toggleFilters(appliedFilter));
  }, [dispatch, isGlutenFree, isLactoseFree, vegan, vegetarian]);

  //console.log("sds== ", saveFilters);

  useEffect(() => {
    // fprops.navigation.setParams({ save: saveFilters }); // navgation from frops made to directly use it
    navigation.setParams({ save: saveFiltersHandler, checksave: savey });
  }, [saveFiltersHandler, savey]);

  return (
    <View style={fstyles.screen}>
      <Text style={fstyles.title}>Available Filters/Restrictions</Text>
      <FilterSwitch
        label="Gluten-free"
        state={isGlutenFree}
        onChange={(glutenfree) => setisGlutenFree(glutenfree)}
      />
      <FilterSwitch
        label="Lactose-free"
        state={isLactoseFree}
        onChange={(lacfree) => setisLactoseFree(lacfree)}
      />
      <FilterSwitch
        label="Vegan"
        state={vegan}
        onChange={(vegan) => setVegan(vegan)}
      />
      <FilterSwitch
        label="Vegetarian"
        state={vegetarian}
        onChange={(veg) => setvegetarian(veg)}
      />

      {/* switch need to repeat so make separate filterswitch */}
      {/* <View style={fstyles.filterContainer}>
        <Text>Gluten-free</Text>
        <Switch
          trackColor={{ true: MyColors.Switchcolor, false: MyColors.iconcolor }}
          thumbColor={MyColors.primaryScreen}
          value={isGlutenFree}
          onValueChange={(glutenfree) => setisGlutenFree(glutenfree)}
        />
      </View> */}
    </View>
  );
};

export default FilterScreen;

FilterScreen.navigationOptions = (navData) => {
  const togfilter = navData.navigation.getParam("save");
  const saveicon = navData.navigation.getParam("checksave");
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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButtonss}>
        <Item
          title="save"
          iconName="ios-save"
          color={saveicon ? MyColors.iconcolor : MyColors.favIconColor}
          onPress={togfilter}
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
    // justifyContent: "center",
  },
  title: {
    fontFamily: "my-open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: Platform.OS === "ios" ? 10 : 0,
  },
});
