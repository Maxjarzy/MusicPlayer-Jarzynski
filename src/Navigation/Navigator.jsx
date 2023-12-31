import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,
  Platform,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { colors } from "../../assets/Colors/Colors";
import MusicStack from "./MusicStack";
import PlayListStack from "./PlayListStack";
import Player from "../Screens/Player";
import AuthStack from "./AuthStack";
import { useSelector } from "react-redux";
import MyProfileStack from "./MyProfileStack";
import Header from "../Components/Header";

const Tab = createBottomTabNavigator();

const Navigator = () => {
  const { email } = useSelector((state) => state.userReducer.value);

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        {email ? (
          <Tab.Navigator
            screenOptions={{
              tabBarShowLabel: false,
              tabBarStyle: styles.tabBar,
              header: () => {
                return <Header />;
              },
            }}
          >
            <Tab.Screen
              name="Music"
              component={MusicStack}
              options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <View>
                      <Ionicons
                        name="ios-home-outline"
                        size={30}
                        color={focused ? colors.sun : "white"}
                      />
                    </View>
                  );
                },
              }}
            />
            <Tab.Screen
              name="Play"
              component={Player}
              options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <View>
                      <Ionicons
                        name="ios-play-outline"
                        size={30}
                        color={focused ? colors.sun : "white"}
                      />
                    </View>
                  );
                },
              }}
            />
            <Tab.Screen
              name="Library"
              component={PlayListStack}
              options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <View>
                      <MaterialCommunityIcons
                        name="music-box-multiple-outline"
                        size={30}
                        color={focused ? colors.sun : "white"}
                      />
                    </View>
                  );
                },
              }}
            />
            <Tab.Screen
              name="Profile"
              component={MyProfileStack}
              options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <View>
                      <Feather
                        name="user"
                        size={30}
                        color={focused ? colors.sun : "white"}
                      />
                    </View>
                  );
                },
              }}
            />
          </Tab.Navigator>
        ) : (
          <AuthStack />
        )}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Navigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  tabBar: {
    backgroundColor: colors.catDarkness,
    flex: 1 / 8,
  },
});
