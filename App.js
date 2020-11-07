import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import listScreen from './src/screens/ListScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ImageScreen from './src/screens/ImageScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: listScreen,
    Screen: ImageScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Debt Down',
    },
  }
);

export default createAppContainer(navigator);
