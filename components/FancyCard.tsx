import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FancyCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{uri: 'https://picsum.photos/300/180'}}
          resizeMode="cover"
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Walking in wild</Text>
          <Text style={styles.cardLabel}>Somewhere in the world</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, id?
            Amet reiciendis autem voluptatum obcaecati quo, libero ullam nisi
            enim?
          </Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 12,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: '#eee',
    marginTop: 12,
  },
  cardElevated: {},
  cardImage: {
    height: 180,
    borderRadius: 8,
  },
  cardBody: {},
  cardTitle: {
    color: '#000',
    fontSize: 24,
    marginTop: 6,
    fontWeight: 'bold',
  },
  cardLabel: {
    color: 'gray',
    fontSize: 16,
    marginTop: 8,
    fontWeight: 'medium',
  },
  cardDescription: {
    color: '#000',
    marginTop: 4,
  },
});
