import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
//above 4 need to use nav-stack
import CategoryScreen from "../screens/CategoryScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const MealsNavigator = createStackNavigator({
  Categories: CategoryScreen,
  CategoryMeal: CategoryMealScreen,
  MealDetail: MealDetailScreen,
});

export default createAppContainer(MealsNavigator);
