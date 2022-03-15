import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#009387" },
      headerTintColor: "#fff",
      headerTitleStyle: { fontWeight: "bold" },
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "Home",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={30}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const DetailsStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#009387" },
      headerTintColor: "#fff",
      headerTitleStyle: { fontWeight: "bold" },
    }}
  >
    <DetailsStack.Screen
      name="Details"
      component={DetailsScreen}
      options={{
        title: "Details",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={30}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </DetailsStack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Details" component={DetailsStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
