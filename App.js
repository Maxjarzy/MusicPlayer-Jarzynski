import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import { useState } from "react";
import Header from "./src/Components/Header";
import Player from "./src/Components/Player";
import Genres from "./src/Components/Genres";
import Playlist from "./src/Components/Playlist";
import Nav from "./src/Components/Nav";

export default function App() {

  const [screen, setScreen] = useState("Home");

 
  const handleState = (window) => {
    setScreen(window) 
  }


  const [fontsLoaded] = useFonts({
    "Noto-Sans": require("./assets/Fonts/Noto_Sans/NotoSans-Light.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Header />
      {screen == "Home" ? <Genres/> : screen == "Player" ? <Player/> : <Playlist/>}
      <Nav handleState={handleState}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
