import { StyleSheet, View, FlatList, ImageBackground } from "react-native";
import { colors } from "../../assets/Colors/Colors";
import GenreList from "./GenreList";
import genres from "../../assets/Data/Genres";

const Genres = () => {


  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/Img/Backgrounds/WhiteWood.png')}
        resizeMode="cover"
        style={styles.background}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          data={genres}
          keyExtractor={(genre) => genre.nombre}
          renderItem={({ item }) => <GenreList item={item} />}
          numColumns={3}
          style={styles.lista}
        />
      </ImageBackground>
    </View>
  );
};

export default Genres;

const styles = StyleSheet.create({
  container: {
    flex: 5,
    width: "100%",
    alignItems: "center",
    backgroundColor: colors.cat,
  },
  background: {
    width: "100%",
    alignItems: "center"
  }
});
