import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';

type Props = {};

const AppPro = (props: Props) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
        AppPro
      </Text>
    </View>
  );
};

export default AppPro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  whiteText: {
    color: '#ffffff',
  },
  blackText: {
    color: '#000000',
  },
});
