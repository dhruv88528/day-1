import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PlaylistCard = ({ image, title, episodes, date }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{episodes} Episodes</Text>
      <Text style={styles.date}>Updated: {date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    margin: 8,
    width: 160,
    elevation: 2,
  },
  image: { width: 40, height: 40, marginBottom: 8 },
  title: { fontWeight: 'bold', fontSize: 14 },
  subtitle: { color: '#666', fontSize: 12 },
  date: { fontSize: 11, color: '#999' },
});

export default PlaylistCard;
