import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ContactList = () => {
  const contacts = [
    {
      uid: 1,
      name: 'John Doe',
      status: 'Working on a presentation',
      imageUrl: 'https://picsum.photos/100?random=1',
    },
    {
      uid: 2,
      name: 'Jane Smith',
      status: 'In a meeting',
      imageUrl: 'https://picsum.photos/100?random=2',
    },
    {
      uid: 3,
      name: 'Michael Johnson',
      status: 'On a coffee break',
      imageUrl: 'https://picsum.photos/100?random=3',
    },
    {
      uid: 4,
      name: 'Emily Davis',
      status: 'Reviewing documents',
      imageUrl: 'https://picsum.photos/100?random=4',
    },
    {
      uid: 5,
      name: 'Chris Brown',
      status: 'Replying to emails',
      imageUrl: 'https://picsum.photos/100?random=5',
    },
    {
      uid: 6,
      name: 'Sarah Wilson',
      status: 'Out for lunch',
      imageUrl: 'https://picsum.photos/100?random=6',
    },
    {
      uid: 7,
      name: 'David White',
      status: 'Brainstorming ideas',
      imageUrl: 'https://picsum.photos/100?random=7',
    },
    {
      uid: 8,
      name: 'Jessica Moore',
      status: 'Attending a webinar',
      imageUrl: 'https://picsum.photos/100?random=8',
    },
    {
      uid: 9,
      name: 'Paul Harris',
      status: 'Writing a report',
      imageUrl: 'https://picsum.photos/100?random=9',
    },
    {
      uid: 10,
      name: 'Laura Clark',
      status: 'Updating project plan',
      imageUrl: 'https://picsum.photos/100?random=10',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>Contact List({contacts.length})</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts?.map(({imageUrl, name, status, uid}) => (
          <View key={uid} style={styles.userCard}>
            <Image source={{uri: imageUrl}} style={styles.userImage} />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 12,
    marginHorizontal: 8,
  },
  container: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingTop: 12,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginVertical: 8,
    backgroundColor: '#454545',
    borderRadius: 8,
    padding: 8,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  userStatus: {
    fontSize: 12,
  },
});
