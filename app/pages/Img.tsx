import React from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";

export default function Img() {
  return (
    <View style={styles.cont}>

      <View>
      
        <View style={styles.nav}>
          <Image
            source={{
              uri: "https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg",
            }}
            style={styles.profile}
          />
        </View>

        <View style={styles.savedSection}>
          <Text style={styles.inactive}>Followers</Text>
          <Text style={styles.active}>Saved</Text>
          <Text style={styles.inactive}>Following</Text>
        </View>

        <View style={styles.dotContainer}>
          <View style={styles.dot} />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.grid}>
          <Image
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrQ6U_V-oZbp2vTBohrHLNGLyipGzkJPRhb43W4tkHmz6JjgmtY9ecTs7gK-q61qxuQ88&usqp=CAU" }}
            style={styles.image}
          />
          <Image
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvgNbAlXUU_kZt6Uz24UHMlwb5J0gro0GGhp3w62K-ASCUCA9d514sWKkKoSVWKjGCFGg&usqp=CAU" }}
            style={styles.image}
          />
          <Image
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTY8j6Ni0bPm7OOzANRJkVEC7DZVbScEjvYelRbDvn6ezEmDzKjv4t1OjfYRpEdEG6FyI&usqp=CAU" }}
            style={styles.image}
          />
          <Image
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTY8j6Ni0bPm7OOzANRJkVEC7DZVbScEjvYelRbDvn6ezEmDzKjv4t1OjfYRpEdEG6FyI&usqp=CAU" }}
            style={styles.image}
          />
          <Image
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBIjur-7jEX37-3nUTp9aeqBHAuYUj56ouVIXgNBRUmN8XIYqpp9G09ipeeSnkNdKrm3I&usqp=CAU" }}
            style={styles.image}
          />
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?w=500",
            }}
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
  savedSection: {
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
