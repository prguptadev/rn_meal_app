import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import MealsNavigator from "./navigation/MealsNavigator";
//import { useScreens } from "react-native-screens";
import { enableScreens } from "react-native-screens";

import { createStore, combineReducers } from "redux";
import mealsReducers from "./store/reducers/meals";
import { Provider } from "react-redux";

//useScreens();
enableScreens(); //additional performce to use this and provide device based based
// behined seens unlock sceens , provide betetr performce

const rootReducer = combineReducers({
  meals: mealsReducers,
});
// meals reducer is like initial state which action and if in future other reducer are there need to combine all in rootedreducer, so use CombineReducer and to store rootedRedcuers use createStore once created , pass to provider and provider will be use where all functionlaity can use that data.

const storey = createStore(rootReducer);

const fetchFonts = () => {
  Font.loadAsync({
    "my-open-sans": require("./assests/fonts/OpenSans-Regular.ttf"),
    "my-open-sans-bold": require("./assests/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoad, setFontLoad] = useState(false);

  if (!fontLoad) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoad(true)}
        onError={(err) => {
          console.log(err);
        }}
      />
    );
  }

  return (
    <Provider store={storey}>
      <MealsNavigator />
    </Provider>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
