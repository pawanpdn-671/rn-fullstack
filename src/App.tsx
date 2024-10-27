import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import ContactList from '../components/ContactList';
import MusicPlayer from './screens/MusicPlayerScreen';
import PasswordGenerator from './screens/PasswordGenerator';
import RollDice from './screens/RollDice';
import Ionicons from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export type RootStackParamList = {
  HomeStackScreen: undefined;
  ExploreStackScreen: undefined;
  MusicStackScreen: undefined;
  GameStackScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeStackScreen"
      component={ContactList}
      options={{title: 'Contact List'}}
    />
  </Stack.Navigator>
);

const ExploreStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ExploreStackScreen"
      component={PasswordGenerator}
      options={{title: 'Explore'}}
    />
  </Stack.Navigator>
);

const MusicStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="MusicStackScreen"
      component={MusicPlayer}
      options={{title: 'Music Player'}}
    />
  </Stack.Navigator>
);

const GameStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="GameStackScreen"
      component={RollDice}
      options={{title: 'Games'}}
    />
  </Stack.Navigator>
);

export type RootTabParamList = {
  Home: undefined;
  Explore: undefined;
  Music: undefined;
  Games: undefined;
};

const renderTabBarIcon = (
  routeName: keyof RootTabParamList,
  focused: boolean,
  color: string,
  size: number,
) => {
  switch (routeName) {
    case 'Home':
      return <Ionicons name={'contacts'} size={size} color={color} />;
    case 'Explore':
      return (
        <MaterialIcons name={'travel-explore'} size={size} color={color} />
      );
    case 'Music':
      return <MaterialIcons name={'music-note'} size={size} color={color} />;
    case 'Games':
      return (
        <MaterialIcons name={'videogame-asset'} size={size} color={color} />
      );
    default:
      break;
  }
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) =>
            renderTabBarIcon(
              route.name as keyof RootTabParamList,
              focused,
              color,
              size,
            ),
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Explore" component={ExploreStack} />
        <Tab.Screen name="Music" component={MusicStack} />
        <Tab.Screen name="Games" component={GameStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
