import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVOURITE } from "../actions/mealActions";

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

    default:
      return state;
  }
};

export default mealsReducers;
