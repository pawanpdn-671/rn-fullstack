import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import ElevatedCard from '../components/ElevatedCard';
import FancyCard from '../components/FancyCard';
import FlatCard from '../components/FlatCard';
import ActionCard from '../components/ActionCard';
import ContactList from '../components/ContactList';
import PasswordGenerator from '../components/PasswordGenerator';
import BgChanger from '../components/BgChanger';
import RollDice from '../components/RollDice';
import CurrencyConverter from '../components/CurrencyConverter';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <CurrencyConverter />
        <RollDice />
        <BgChanger />
        <PasswordGenerator />
        <FlatCard />
        <ElevatedCard />
        <FancyCard />
        <ContactList />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
