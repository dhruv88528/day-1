import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Card = () => {
  return (
    <View style={styles.main}>
      <View style={styles.card}>
        <Text style={styles.emoji}>🧡</Text>
        <Text style={styles.title}>My Hypertension Daily Plan</Text>
        <Text style={styles.episodes}>6 Episodes</Text>
        <Text style={styles.date}>Updated: 03.06.2025</Text>
      </View>

      <View style={[styles.card, { backgroundColor: '#E7F0FF' }]}>
        <Text style={styles.emoji}>☑️</Text>
        <Text style={styles.title}>My Post-Surgery Recovery</Text>
        <Text style={styles.episodes}>3 Episodes</Text>
        <Text style={styles.date}>Updated: 03.06.2025</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: '#f2f7ff',
    flex: 1,
    marginTop: 20,
  },
  card: {
    backgroundColor: '#FFF4E3',
    width: 230,
    borderRadius: 12,
    padding: 30,
    margin: 10,
  },
  emoji: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
    marginBottom: 6,
  },
  episodes: {
    fontSize: 12,
    textAlign: 'center',
    color: '#666',
  },
  date: {
    fontSize: 11,
    textAlign: 'center',
    color: '#777',
    marginTop: 2,
  },
});