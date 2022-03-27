import React, { useEffect } from "react";
import "react-native-gesture-handler";

import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "./screens/DrawerContent";

import MainTabScreen from "./screens/MainTabScreen";
import SupportScreen from "./screens/SupportScreen";
import SettingsScreen from "./screens/SettingsScreen";
import BookmarkScreen from "./screens/BookmarkScreen";

import { AuthContext } from "./components/context";

import RootStackScreen from "./screens/RootStackScreen";

const Drawer = createDrawerNavigator();

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case "REGISTER":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  );

  const authcontext = React.useMemo(
    () => ({
      signIn: (userName, password) => {
        // setUserToken("AUTH_TOKEN");
        // setIsLoading(false);
        let userToken = null;
        if (userName == "ashu" && password == "pass") {
          userToken = "AUTH_TOKEN";
        }
        dispatch({ type: "LOGIN", id: userName, token: userToken });
      },
      signOut: () => {
        // setUserToken(null);
        // setIsLoading(false);
        dispatch({ type: "LOGOUT" });
      },
      signUp: () => {
        setUserToken("AUTH_TOKEN");
        setIsLoading(false);
      },
    }),
    []
  );

  useEffect(() => {
    setTimeout(() => {
      // setIsLoading(false);
      dispatch({ type: "RETRIEVE_TOKEN", token: "AToken" });
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#009387" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authcontext}>
      <NavigationContainer>
        {loginState.userToken === null ? (
          <RootStackScreen />
        ) : (
          <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
            initialRouteName="Home"
          >
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen name="SupportScreen" component={SupportScreen} />
            <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
          </Drawer.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
