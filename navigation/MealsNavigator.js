import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
//above 4 need to use nav-stack
import CategoryScreen from "../screens/CategoryScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { Platform } from "react-native";
import MyColors from "../constants/MyColors";
// two way to keep header styling for everyscreen either inside navigator along with screens
// all navogation at one file but still repeating,,
// createStackNavigator this alow 2nd parameter to configurte naigationoptions style
const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoryScreen,
      // navigationOptions: {
      //   headerTitle:"Meal category" // this one is first priority for title.
      //   headerStyle: {
      //     backgroundColor:
      //       Platform.OS === "android"
      //         ? MyColors.primaryScreen
      //         : MyColors.iosPrimarycolor,
      //   },
      //   headerTintColor: Platform.OS === "android" ? "blue" : "black",
      // },
    },
    CategoryMeal: {
      screen: CategoryMealScreen,
      // navigationOptions: {
      //   headerStyle: {
      //     backgroundColor:
      //       Platform.OS === "android"
      //         ? MyColors.primaryScreen
      //         : MyColors.iosPrimarycolor,
      //   },
      //   headerTintColor: Platform.OS === "android" ? "blue" : "black",
      // }, // here only kept in categorumeal screen so only can be seen in above screen
    },
    MealDetail: MealDetailScreen,
  },
  {
    //mode: "modal",  // mode can be set to transition b/tw screen card is default , modal can be
    // initialRouteName: "MealDetail", /// initial screen, like categories but now it meals details
    // headerMode: "none", // header mode is used for hide header or transition flaot or screen way

    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === "android"
            ? MyColors.primaryScreen
            : MyColors.iosPrimarycolor,
      },
      headerTintColor: Platform.OS === "android" ? "blue" : "black",
      // headerTitle: "A screen", // default title will be overwritten if not assign . ,,// second top priority for title other wise for screen mention title will wins
    },
  }
);

export default createAppContainer(MealsNavigator);
