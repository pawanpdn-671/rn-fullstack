import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import ElevatedCard from './components/ElevatedCard';
import FancyCard from './components/FancyCard';
import FlatCard from './components/FlatCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';
import PasswordGenerator from './components/PasswordGenerator';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
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
