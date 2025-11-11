import { StyleSheet, Text, View, TouchableOpacity, FlatList, Pressable, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import SearchBar from "../screenComp/SearchBar";
import Shown from "../screenComp/Shown";
import Card from "../screenComp/Card";
import { Ionicons } from "@expo/vector-icons";
import PlayListItem from "../screenComp/PlayListCard";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const data = [
  {
    id: "1",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgRUoVfhqSbbnv7LXsio1Wxtuyn5Si29a-gUXuUkIyC-Fxl6_T_uowTdt7Jugx-qF_mtIsxnzZdBERZxzsXYmNeUyg-VzDUY7R6ir3cAZ2jQbOUJafv0Zpk28ch9rZjTVOCqDuCfkGu8dGR9VpN0-_qBW_svOG4qUVT13xRn6_jcXVL337gKknrdvAcuA8/s16000-rw/Heart%20.jpg",
    title: "Chronic Pain",
    episodes: "8 episodes",
  },
  {
    id: "2",
    image: "https://i.pinimg.com/736x/b6/22/d4/b622d47d4fdbb65bd18417bf901ec990.jpg",
    title: "Mindfulness for Sleep",
    episodes: "8 episodes",
  },
  {
    id: "3",
    image: "https://images.apollo247.in/pd-cms/cms/2025-09/AdobeStock_1516482351.webp?tr=q-80,f-webp,w-400,dpr-2.5,c-at_max%201000w",
    title: "Health Heart Basics",
    episodes: "12 episodes",
  },
  {
    id: "4",
    image: "https://i.pinimg.com/736x/b6/22/d4/b622d47d4fdbb65bd18417bf901ec990.jpg",
    title: "Healthy Living",
    episodes: "10 episodes",
  },
  {
    id: "5",
    image: "https://images.apollo247.in/pd-cms/cms/2025-09/AdobeStock_1516482351.webp?tr=q-80,f-webp,w-400,dpr-2.5,c-at_max%201000w",
    title: "Daily Wellness",
    episodes: "7 episodes",
  },
  {
    id: "6",
    image: "https://i.pinimg.com/736x/b6/22/d4/b622d47d4fdbb65bd18417bf901ec990.jpg",
    title: "Heart Health Tips",
    episodes: "9 episodes",
  },
];

const PlayList = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.navbar}>
        <View style={styles.navLeft}>
          <MaterialCommunityIcons name="waveform" size={24} color="#74C0FC" />
          <Text style={styles.appName}>HealthCast</Text>
        </View>
        <Pressable onPress={() => navigation.navigate('Profile')}>
          <Image source={require('../assets/images/dhruv.jpeg')} style={styles.profileImage} />
        </Pressable>
      </View>

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.mainTitle}>Playlists</Text>
          <Text style={styles.subtitle}>Personalised auto-care plans, curated by you</Text>
        </View>

        <View style={styles.section}>
          <SearchBar />
        </View>

        <View style={styles.section}>
          <Shown title="My Playlist (10)" actionText="See all" />
          <Card />
          <TouchableOpacity style={styles.createCard} activeOpacity={0.7}>
            <Ionicons name="add-circle-outline" size={22} color="#1e7fbf" />
            <Text style={styles.createText}>Create new custom playlist</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Shown title="Doctor-Curated Playlists (12)" actionText="See all" />
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <PlayListItem
                image={item.image}
                title={item.title}
                episodes={item.episodes}
              />
            )}
            scrollEnabled={false}
            contentContainerStyle={styles.flatListContent}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PlayList;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#f8fcff",
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  navLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  appName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1a1a1a",
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  container: {
    flex: 1,
    backgroundColor: "#f8fcff",
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 12,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    fontWeight: "400",
    lineHeight: 20,
  },
  section: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  createCard: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#1e7fbf",
    backgroundColor: "#e8f5ff",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginTop: 16,
  },
  createText: {
    marginLeft: 12,
    color: "#1e7fbf",
    fontSize: 15,
    fontWeight: "600",
  },
  flatListContent: {
    paddingTop: 8,
  },
});