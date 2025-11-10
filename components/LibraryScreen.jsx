import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import SearchBar from './SearchBar';
import PlaylistCard from './PlaylistCard';

const LibraryScreen = () => {
  return (
    <ScrollView style={{ backgroundColor: '#EAF3FF' }}>
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Playlists</Text>
        <Text style={{ color: '#666', marginBottom: 8 }}>
          Personalized audio-care plans, curated by you
        </Text>
      </View>

      <SearchBar />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>My Playlists</Text>
        <Pressable><Text style={{ color: '#007AFF' }}>See all</Text></Pressable>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <PlaylistCard image={{uri : "https://media.istockphoto.com/id/1089650726/vector/valentines-day-heart-shape-icon.jpg?s=612x612&w=0&k=20&c=1ium5YT6QwQQq15_fvXNun1wDacHl_U3cwMSiDOCtAU="}} title="My Hypertension Daily Plan" episodes={6} date="03.06.2025" />
        <PlaylistCard image={{uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxnqsKtq6cIZncElpcjW5UWTQb-eqXTAPOSQ&s"}} title="My Post-Surgery Recovery" episodes={3} date="03.06.2025" />
      </ScrollView>
    </ScrollView>
  );
};

export default LibraryScreen;
