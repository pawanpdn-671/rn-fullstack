import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import ElevatedCard from './components/ElevatedCard';
import FancyCard from './components/FancyCard';
import FlatCard from './components/FlatCard';
import ActionCard from './components/ActionCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <ElevatedCard />
        <FancyCard />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
