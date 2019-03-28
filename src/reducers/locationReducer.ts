import { GeolocationActionTypes, ILocationState } from '../types';
import { AnyAction } from 'redux';

const intitalState: ILocationState = {
  position: '',
  error: null,
  fetching: true,
  success: false,
};

export default function locationReducer(state = intitalState, action: AnyAction) {
  switch (action.type) {
    case GeolocationActionTypes.GET_GEOLOCATION_SUCCESS: {
      return {
        ...state,
        restaurants: action.payload,
        fetching: false,
        success: true,
      };
    }
    case GeolocationActionTypes.REDUX_SAGA_LOCATION_ACTION_REQUEST: {
      return {
        ...state,
        fetching: true,
      };
    }
    case GeolocationActionTypes.REDUX_SAGA_LOCATION_ACTION_SET_POSITION: {
      console.log('action position', action.position);
      return {
        ...state,
        position: action.position,
        fetching: true,
        success: true,
      };
    }
    case GeolocationActionTypes.REDUX_SAGA_LOCATION_ACTION_SET_ERROR: {
      return {
        ...state,
        error: action.error,
        fetching: false,
      };
    }
    default: {
      return state;
    }
  }
}
