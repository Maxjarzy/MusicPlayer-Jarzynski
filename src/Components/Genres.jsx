import { StyleSheet, View, FlatList } from "react-native";
import GenreDetail from "./GenreDetail";
import genres  from "../Data/Songs/Genres/Genres.json";

const Genres = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.lista}
        showsVerticalScrollIndicator={false}
        data={genres}
        keyExtractor={genre => genre.nombre}
        renderItem={({ item }) => GenreDetail({item})}
        numColumns={3}
      />
    </View>
  );
};

export default Genres;

const styles = StyleSheet.create({
    container: {
        flex: 5,
        alignItems: "center"
    },
    
});
