import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import listScreen from './src/screens/ListScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: listScreen
  },
  {
    initialRouteName: "List",
    defaultNavigationOptions: {
      title: "Debt Down"
    }
  }
);

export default createAppContainer(navigator);
