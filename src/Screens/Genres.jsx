import { StyleSheet, View, FlatList, ImageBackground } from "react-native";
import GenreItem from "../Components/GenreItem";
import genres from "../../assets/Data/Genres";

const Genres = ({navigation}) => {

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
          renderItem={({ item }) => <GenreItem item={item} navigation={navigation}/>}
          numColumns={3}
          contentContainerStyle={styles.lista} 
        />
      </ImageBackground>
    </View>
  );
};

export default Genres;

const styles = StyleSheet.create({
  container: {
    flex: 5,
  },
  background: {
    width: "100%",
  },
  lista:{
    width: "100%",
    alignItems: "center"
  }
});
