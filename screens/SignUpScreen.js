import React from "react";

import { View, Text, StyleSheet, Button } from "react-native";

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SignUpScreen</Text>
      <Button title="Click me" onPress={() => alert("You clicked me")} />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
