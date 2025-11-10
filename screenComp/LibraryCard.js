import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const LibraryCard = ({ image, title, episodes, date, items, more }) => {
  return (
    <View style={styles.card}>
    
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>

  
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subText}>
          📚 {episodes} • Updated {date}
        </Text>

        {/* Sub-items */}
        {items.map((item, index) => (
          <Text key={index} style={styles.itemText}>
            {item}
          </Text>
        ))}

        <Text style={styles.moreText}>+ {more} more</Text>
      </View>
    </View>
  );
};

export default LibraryCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 15,
    marginVertical: 8,
    borderRadius: 16,
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 15,
    backgroundColor: "#eaf4ff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111",
  },
  subText: {
    fontSize: 13,
    color: "#555",
    marginVertical: 3,
  },
  itemText: {
    fontSize: 14,
    color: "#333",
  },
  moreText: {
    fontSize: 13,
    color: "#007aff",
    marginTop: 3,
  },
});