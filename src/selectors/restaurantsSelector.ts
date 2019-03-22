import { createSelector } from 'reselect';

const restaurantData = (state: any) => state.restaurantsReducer.restaurants;

const success = (state: any) => state.restaurantsReducer.success;

export const getAllRestaurantsS = createSelector(
  restaurantData,
  success,
  data => (console.log('data', data), { loading: data.success, restaurants: data })
);
