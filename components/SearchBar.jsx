import React from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <Image source={require('../assets/images/search.png')} style={styles.icon} />
      <TextInput placeholder="Search for name, symptom or condition..." style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 8,
    marginVertical: 12,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  icon: { width: 20, height: 20, marginRight: 8 },
  input: { flex: 1 }
});

export default SearchBar;
