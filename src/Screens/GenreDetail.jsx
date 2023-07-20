import {
  FlatList,
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";
import songs from "../../assets/Data/Songs";
import Song from "../Components/Song";


const GenreDetail = ( {navigation,route} ) => {

  const {genre} = route.params

  const genreFiltred = songs.filter( (song) => song.genre === genre)

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./../../assets/Img/Backgrounds/WhiteWood.png')}
        style={styles.background}
      >
        <FlatList
          data={genreFiltred}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Song item={item} navigation={navigation}/>}
          style={styles.songsList}
        />
      </ImageBackground>
    </View>
  );
};

export default GenreDetail;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
  songsList: {
    margin: 25,
    rowGap: 5,
  },
  background: {
    flex: 1,
  }
});
