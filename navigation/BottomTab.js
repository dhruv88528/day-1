
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "../tabs/Home";
import Library from "../tabs/Library";
import Playlist from "../tabs/Playlist";
import Profile from "../tabs/Profile";
const Tab = createBottomTabNavigator();
const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: true,
        tabBarActiveTintColor: "pink",
        tabBarInactiveTintColor: "black",
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home-outline";
          } else if (route.name === "Library") {
            iconName = "add-circle-outline";
          } else if (route.name === "Playlist") {
            iconName = "list-outline";
          } else if (route.name === "Profile") {
            iconName = "search-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Library"
        component={Library}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Playlist"
        component={Playlist}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});