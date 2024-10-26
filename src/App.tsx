import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ContactList from '../components/ContactList';
import MusicPlayer from './screens/MusicPlayerScreen';
import TicTacToe from './screens/TicTacToe';

export type RootStackParamList = {
  Home: undefined;
  Explore: {exploreId: string};
  Music: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={ContactList}
          options={{
            title: 'Contact List',
          }}
        />
        <Stack.Screen
          name="Explore"
          component={TicTacToe}
          options={{
            title: 'Explore',
          }}
        />
        <Stack.Screen
          name="Music"
          component={MusicPlayer}
          options={{
            title: 'Music Player',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
