import { createStackNavigator } from 'react-navigation-stack'
import ListContainer from './containers/ListContainer';
import DetailContainer from './containers/DetailContainer';

const Router = createStackNavigator(
  {
    List: { screen: ListContainer },
    Detail: { screen: DetailContainer },
  },
  {
    initialRouteName: 'List',
  }
);

export default Router;
