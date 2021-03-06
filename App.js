import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import listScreen from './src/screens/ListScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColourScreen from './src/screens/ColourScreen'
import SquareScreen from './src/screens/SquareScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: listScreen,
    Image: ImageScreen,
    Count: CounterScreen,
    Colour: ColourScreen,
    Square: SquareScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Demo App',
    },
  }
);

export default createAppContainer(navigator);
