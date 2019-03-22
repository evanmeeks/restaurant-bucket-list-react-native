import { createStackNavigator, createAppContainer } from 'react-navigation';

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
export default createAppContainer(Router);
