export const TOGGLE_FAVOURITE = "TOGGLE_FAVOURITE";
export const TOGGLE_FILTERS = "TOGGLE_FILTERS";

export const toggleFavourite = (id) => {
  return { type: TOGGLE_FAVOURITE, mealid: id };
};

export const toggleFilters = (filter) => {
  //console.log(filter);
  return { type: TOGGLE_FILTERS, newfilter: filter };
};
