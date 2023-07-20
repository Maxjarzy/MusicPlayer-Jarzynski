import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import Genres from "../Screens/Genres";
import Player from "../Screens/Player";
import Playlist from "../Screens/Playlist";
import GenreDetail from "../Screens/GenreDetail";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={
            ({route}) => (
              {
                header: () => {
                  return <Header/>
                },
              }
            )
          }
        >
          <Stack.Screen name="Home" component={Genres} />
          <Stack.Screen name="GenreDetail" component={GenreDetail} />
          <Stack.Screen name="Playlist" component={Playlist} />
          <Stack.Screen name="Player" component={Player} />
        </Stack.Navigator>
        <Nav />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Navigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
