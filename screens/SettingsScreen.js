import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#d02860" barStyle="light-content" />
      <Text>SettingsScreen</Text>
      <Button title="Click Here" onPress={() => alert("clicked")} />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
