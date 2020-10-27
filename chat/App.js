
import Main from './components/Main';
import Chat from './components/Chat';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Main: {screen: Main},
  Chat: {screen: Chat},
});

const App = createAppContainer(MainNavigator);

export default App;