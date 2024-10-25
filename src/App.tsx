import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ActionCard from '../components/ActionCard';
import BgChanger from './screens/BgChanger';
import ContactList from '../components/ContactList';
import CurrencyConverter from '../components/CurrencyConverter';
import ElevatedCard from '../components/ElevatedCard';
import FancyCard from '../components/FancyCard';
import FlatCard from '../components/FlatCard';
import PasswordGenerator from './screens/PasswordGenerator';
import RollDice from './screens/RollDice';
import TicTacToe from './screens/TicTacToe';
import MusicPlayer from './screens/MusicPlayerScreen';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
    </SafeAreaView>
  );
};

export default App;
