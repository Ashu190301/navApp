import React from "react";
import { View, Text, StyleSheet, Button, StatusBar } from "react-native";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#694fad" barStyle="light-content" />
      <Text>Profile Screen</Text>
      <Button title="Click Here" onPress={() => alert("Button Clicked")} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
