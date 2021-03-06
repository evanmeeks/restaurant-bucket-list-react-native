import { IRestaurantState } from './../../types';
import ListContainer from './listContainer';
import { connect } from 'react-redux';
import { getAllRestaurants, areRestaurantsLoaded, locationRetrieved } from '../../selectors';
import { fetchGeolocation } from '../../actions/restaurants';

const mapStateToProps = (state: IRestaurantState) => {
  return {
    restaurants: getAllRestaurants(state),
    loaded: areRestaurantsLoaded(state),
    locationRetrieved: locationRetrieved(state),
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchGeolocation: (payload: any) => dispatch(fetchGeolocation(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer as any);
