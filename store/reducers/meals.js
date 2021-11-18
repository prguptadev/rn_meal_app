import { MEALS } from "../../data/dummy-data";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  FavouriteMeals: [],
};

const mealsReducers = (state = initialState, action) => {
  return state;
};

export default mealsReducers;
