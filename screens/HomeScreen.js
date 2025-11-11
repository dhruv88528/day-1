
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import BottomTab from "../navigation/BottomTab";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
     
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 16,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
          <MaterialCommunityIcons name="waveform" size={24} color="#74C0FC" />
          <Text style={{ fontSize: 18, fontWeight: "600" }}>HealthCast</Text>
        </View>

        <Pressable onPress={() => navigation.navigate("Profile")}>
          <Image
            source={require("../assets/images/dhruv.jpeg")}
            style={{ width: 32, height: 32, borderRadius: 16 }}
          />
        </Pressable>
      </View>

   
      <View style={{ flex: 1 }}>
        
      </View>

     
      {/* <View style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <BottomTab />
      </View> */}
    </View>
  );
};

export default HomeScreen;
