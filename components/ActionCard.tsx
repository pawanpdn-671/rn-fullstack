import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  const openWebsite = (link: string) => {
    Linking.openURL(link);
  };

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>What's new in React Native 2024</Text>
        </View>
        <Image
          source={{uri: 'https://picsum.photos/300'}}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3} style={styles.bodyText}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
            consectetur quis veniam quas ratione odio at illum voluptas
            voluptatem quae expedita, porro, ipsam minus assumenda aut!
            Praesentium voluptate iure omnis!
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => openWebsite('https://pawanpdn.vercel.app')}>
            <Text style={[styles.link, styles.portfolioLink]}>Read more</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openWebsite('https://github.com/pawanpdn-671')}>
            <Text style={[styles.link, styles.followLink]}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 12,
    marginHorizontal: 8,
  },
  card: {
    marginHorizontal: 8,
    marginVertical: 12,
    borderRadius: 12,
    padding: 8,
  },
  elevatedCard: {
    backgroundColor: '#fff',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'orangered',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardImage: {
    height: 180,
  },
  bodyContainer: {
    marginTop: 12,
  },
  bodyText: {
    color: '#222',
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    justifyContent: 'center',
    gap: 18,
  },
  link: {
    color: 'white',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: 'blue',
  },
  portfolioLink: {},
  followLink: {},
});
