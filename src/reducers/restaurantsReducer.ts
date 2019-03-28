import { RestaurantActionTypes, IRestaurantState } from '../types';
import { AnyAction } from 'redux';

const initialState: IRestaurantState = {
  restaurants: [],
  success: false,
  error: null,
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case RestaurantActionTypes.RESTAURAUNTS_FETCH_DATA_SUCCESS: {
      return {
        ...state,
        restaurants: action.payload.map(res => {
          return res.venue;
        }),
        success: true,
      };
    }
    case RestaurantActionTypes.RESTAURAUNTS_FETCH_DATA_FAIL: {
      return {
        ...state,
        error: 'error',
      };
    }
    case RestaurantActionTypes.HANDLE_DETAIL: {
      return {
        ...state,
        restaurant: action.payload,
      };
    }
    default:
      return state;
  }
};
