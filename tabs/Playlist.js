import { StyleSheet, Text, View, TouchableOpacity,FlatList } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import SearchBar from "../screenComp/SearchBar";
import Shown from "../screenComp/Shown";
import Card from "../screenComp/Card";
import { Ionicons } from "@expo/vector-icons";
import PlayListItem from "../screenComp/PlayListCard";
const data = [
  {
    id:"1",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgRUoVfhqSbbnv7LXsio1Wxtuyn5Si29a-gUXuUkIyC-Fxl6_T_uowTdt7Jugx-qF_mtIsxnzZdBERZxzsXYmNeUyg-VzDUY7R6ir3cAZ2jQbOUJafv0Zpk28ch9rZjTVOCqDuCfkGu8dGR9VpN0-_qBW_svOG4qUVT13xRn6_jcXVL337gKknrdvAcuA8/s16000-rw/Heart%20.jpg",
    title: "Chronic Pain",
    episodes: "8 episodes",
  },
  {
    id:"2",
    image:
      "https://i.pinimg.com/736x/b6/22/d4/b622d47d4fdbb65bd18417bf901ec990.jpg",
    title:"Mindfulness for Sleep",
    episodes:"8 episodes",
  },
  {
    id: "3",
    image: "https://images.apollo247.in/pd-cms/cms/2025-09/AdobeStock_1516482351.webp?tr=q-80,f-webp,w-400,dpr-2.5,c-at_max%201000w",
    title: "Health Heart Basics",
    episodes: "12 episodes",
  },
  {
    id: "4",
    image: "https://images.apollo247.in/pd-cms/cms/2025-09/AdobeStock_1516482351.webp?tr=q-80,f-webp,w-400,dpr-2.5,c-at_max%201000w",
    title: "Healthy Living",
    episodes: "10 episodes",
  },
  {
    id:"5",
    image:"https://images.apollo247.in/pd-cms/cms/2025-09/AdobeStock_1516482351.webp?tr=q-80,f-webp,w-400,dpr-2.5,c-at_max%201000w",
    title:"Daily Wellness",
    episodes:"7 episodes",
  },
  {
    id:"6",
    image:"https://images.apollo247.in/pd-cms/cms/2025-09/AdobeStock_1516482351.webp?tr=q-80,f-webp,w-400,dpr-2.5,c-at_max%201000w",
    title:"Heart Health Tips",
    episodes:"9 episodes",
  },
];

const PlayList = () => {
  return (
    <ScrollView style={{ backgroundColor: "#ebf9ffff", flex: 1 }}>
      <View>
        <Text style={{ fontSize: 40, paddingHorizontal: 12 }}>PlayLists</Text>
        <Text
          style={{ fontSize: 20, marginVertical: 10, paddingHorizontal: 12 }}
        >
          Personalised auto-care plans , Curated by you
        </Text>
        <SearchBar />
        <Shown title="My Playlist (10)" actionText="See all" />
        <Card />
        <View>
          <TouchableOpacity style={styles.card}>
            <Ionicons name="add-circle-outline" size={18} color="#355b9c" />
            <Text style={styles.text}>Create new custom playlist</Text>
          </TouchableOpacity>
        </View>

        <Shown title="Doctor-Curated-PlayList (12)" actionText="See all" />
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
      />
      </View>
    </ScrollView>
  );
};

export default PlayList;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    width: "95%",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#b0c4de",
    backgroundColor: "#e6f0ff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    marginLeft: 8,
    color: "#355b9c",
    fontSize: 14,
    fontWeight: "500",
  },
});