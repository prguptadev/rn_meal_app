import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVOURITE, TOGGLE_FILTERS } from "../actions/mealActions";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  FavouriteMeals: [],
};

const mealsReducers = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      const existingIndex = state.FavouriteMeals.findIndex(
        (meal) => meal.id === action.mealid
      );
      if (existingIndex >= 0) {
        const updatedMeals = [...state.FavouriteMeals];
        updatedMeals.splice(existingIndex, 1);
        return { ...state, FavouriteMeals: updatedMeals };
      } else {
        const meals = state.meals.find((mealid) => mealid.id === action.mealid);
        return { ...state, FavouriteMeals: state.FavouriteMeals.concat(meals) };
      }
    case TOGGLE_FILTERS:
      const appliedFilter = action.newfilter;
      const updatedfilteredMeals = state.meals.filter((meal) => {
        if (appliedFilter.isglutenfree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilter.islactosefree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilter.isvegan && !meal.isVegan) {
          return false;
        }
        if (appliedFilter.isvegetarian && !meal.isVegetarian) {
          return false;
        }
        return true;
      });
      // console.log("reducre -- ", action.newfilter);
      return { ...state, filteredMeals: updatedfilteredMeals };

    default:
      return state;
  }
};

export default mealsReducers;
