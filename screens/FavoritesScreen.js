import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function FavoritesScreen(props) {
  return (
    <View>
      <Text>The FavoritesScreen Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
