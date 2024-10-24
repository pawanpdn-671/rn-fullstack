import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import ActionCard from '../components/ActionCard';
import BgChanger from '../components/BgChanger';
import ContactList from '../components/ContactList';
import CurrencyConverter from '../components/CurrencyConverter';
import ElevatedCard from '../components/ElevatedCard';
import FancyCard from '../components/FancyCard';
import FlatCard from '../components/FlatCard';
import PasswordGenerator from '../components/PasswordGenerator';
import RollDice from '../components/RollDice';
import TicTacToe from '../components/TicTacToe';
import MusicPlayer from '../components/MusicPlayer';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <MusicPlayer />
        {/* <TicTacToe />
        <CurrencyConverter />
        <RollDice />
        <BgChanger />
        <PasswordGenerator />
        <FlatCard />
        <ElevatedCard />
        <FancyCard />
        <ContactList />
        <ActionCard /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
