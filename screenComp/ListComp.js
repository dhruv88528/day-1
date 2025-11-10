import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const ListComp = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item}>
        <Ionicons name="grid-outline" size={16} color="#003366" />
        <Text style={styles.text}>Categories</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Ionicons name="medkit-outline" size={16} color="#003366" />
        <Text style={styles.text}>Symptoms</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Ionicons name="time-outline" size={16} color="#003366" />
        <Text style={styles.text}>Duration</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListComp;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccddee',
  },
  text: {
    color: '#003366',
    fontSize: 14,
    marginLeft: 6,
    fontWeight: '500',
  },
});