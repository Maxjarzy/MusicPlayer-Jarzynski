import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
/* import songs from "../../assets/Songs/Genres/Songs.js"; */
import Song from "./Song";

const GenreDetail = ({genredList}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./../../assets/Img/Backgrounds/WhiteWood.png')}
      >
        <FlatList
          data={genredList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Song item={item} />}
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
});
