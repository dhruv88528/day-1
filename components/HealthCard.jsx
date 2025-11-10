import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HealthCard({ image, title, episodes, date, topics }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        flexDirection: "row",
        alignItems: "center",
      }}
      onPress={() => console.log(`${title} pressed`)}
    >
     
      <View
        style={{
          backgroundColor: "#e6f0ff",
          borderRadius: 12,
          padding: 10,
          marginRight: 12,
        }}
      >
        <Image
          source={image}
          style={{ width: 45, height: 45, resizeMode: "contain" }}
        />
      </View>

      
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: "700", fontSize: 16, marginBottom: 4 }}>
          {title}
        </Text>

        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 6 }}>
          <Ionicons name="play-circle-outline" size={14} color="#555" />
          <Text style={{ marginLeft: 4, color: "#555", fontSize: 13 }}>
            {episodes} Episodes
          </Text>
          <Ionicons
            name="time-outline"
            size={14}
            color="#555"
            style={{ marginLeft: 10 }}
          />
          <Text style={{ marginLeft: 4, color: "#555", fontSize: 13 }}>
            Updated {date}
          </Text>
        </View>

        {topics.slice(0, 2).map((item, index) => (
          <Text key={index} style={{ color: "#333", fontSize: 13, marginBottom: 2 }}>
            {item}
          </Text>
        ))}

        <Text style={{ color: "#3b82f6", fontSize: 13, marginTop: 2 }}>
          + {topics.length - 2} more
        </Text>
      </View>
    </TouchableOpacity>
  );
}
