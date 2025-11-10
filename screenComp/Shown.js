import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Shown = ({ title, actionText }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginVertical: 10,
      }}
    >
      <Text>{title}</Text>
      <Text>{actionText}</Text>
    </View>
  );
};

export default Shown;

const styles = StyleSheet.create({});