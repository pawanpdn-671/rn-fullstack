import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const {height} = Dimensions.get('window');

const MusicPlayer = () => {
  return (
    <View style={styles.container}>
      <Text>MusicPlayer</Text>
    </View>
  );
};

export default MusicPlayer;

const styles = StyleSheet.create({
  container: {
    height: height,
    width: '100%',
  },
});
