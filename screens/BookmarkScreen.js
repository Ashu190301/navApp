import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const BackgroundScreen = () => {
  return (
    <View style={styles.container}>
      <Text>BackgroundScreen</Text>
      <Button title="Click Here" onPress={() => alert("clicked")} />
    </View>
  );
};

export default BackgroundScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
