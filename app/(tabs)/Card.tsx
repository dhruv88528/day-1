import React from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";

export default function Card() {
  return (
    <View style={styles.cont}>

      <View>
       
        <View style={styles.nav}>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYyxRDrJKhWSGOwCDdHS5K_6EOY20t0fsUFg&s",
            }}
            style={styles.profile}
          />
        </View>

        {/* Tabs */}
        <View style={styles.card}>
          <Text style={styles.inactive}>Followers</Text>
          <Text style={styles.active}>Saved</Text>
          <Text style={styles.inactive}>Following</Text>
        </View>

        {/* Dot */}
        <View style={styles.dotContainer}>
          <View style={styles.dot} />
        </View>
      </View>

      {/* Image Grid */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.grid}>
          <Image
            source={{ uri: "https://picsum.photos/id/1018/200/200" }}
            style={styles.image}
          />
          <Image
            source={{ uri: "https://picsum.photos/id/1025/200/200" }}
            style={styles.image}
          />
          <Image
            source={{ uri: "https://picsum.photos/id/1035/200/200" }}
            style={styles.image}
          />
          <Image
            source={{ uri: "https://picsum.photos/id/1043/200/200" }}
            style={styles.image}
          />
          <Image
            source={{ uri: "https://picsum.photos/id/1060/200/200" }}
            style={styles.image}
          />
          <Image
            source={{ uri: "https://picsum.photos/id/1062/200/200" }}
            style={styles.image}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: "white",
  },
  nav: {
    backgroundColor: "white",
    padding: 12,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  card: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 12,
  },
  active: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  inactive: {
    fontSize: 16,
    color: "#b0b0b0",
  },
  dotContainer: {
    backgroundColor: "white",
    alignItems: "center",
    marginBottom: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "black",
  },
  scrollContent: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  image: {
    width: "48%",
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },
});
