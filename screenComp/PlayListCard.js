import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PlayListItem = ({ image, title, episodes }) => {
  return (
    <View style={styles.card}>
      <View style={styles.left}>
        <Image source={{ uri: image }} style={styles.image} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{episodes}</Text>
        </View>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#555" />
    </View>
  );
};

export default PlayListItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#eaf3ff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  subtitle: {
    fontSize: 13,
    color: "#666",
  },
});