import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import songs from "../../assets/Data/Songs";
import GenreDetail from "./GenreDetail";

const GenreList = ({ item }) => {
  
  const [genre, setGenre] = useState("");

  const handleGenre = (genre) => {
    setGenre(genre);
    console.log(`Se seteo el estado en ${genre}`);
  };

 
    return (
      <TouchableOpacity onPress={() => handleGenre(item.nombre)}>
        <View style={styles.container}>
          <ImageBackground
            source={item.imagen}
            resizeMode="cover"
            style={{ height: "100%", width: "100%" }}
          ></ImageBackground>
        </View>
      </TouchableOpacity>
    );
};

export default GenreList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 100,
    height: 130,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  imagen: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
