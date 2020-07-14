import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const navigation = createStackNavigator (
  {
    search: SearchScreen,
    ResultsShow: ResultsShowScreen
  },
  {
    initialRouteName: 'search',
    defaultNavigationOptions: {
      title: 'Find Restaurant'
    }
  }
);

export default createAppContainer(navigation);
