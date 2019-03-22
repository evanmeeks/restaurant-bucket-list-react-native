import ListContainer from './listContainer';
import { connect } from 'react-redux';
import { getAllRestaurants, areRestaurantsLoaded } from '../../selectors';
import { fetchGeolocation, IApplicationProps } from '../../actions/restaurants';

const mapStateToProps = (state: IRestaurantListState) => {
  return {
    restaurants: getAllRestaurants(state),
    success: areRestaurantsLoaded(state),
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
