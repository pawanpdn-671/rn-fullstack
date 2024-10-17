import {
  ActivityIndicator,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {addTrack, setupPlayer} from '../musicPlayerServices';

const {height} = Dimensions.get('window');

const MusicPlayer = () => {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  async function setup() {
    let isSetup = await setupPlayer();

    if (isSetup) {
      await addTrack();
    }

    setIsPlayerReady(isSetup);
  }

  useEffect(() => {
    setup();
  }, []);

  if (!isPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

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
