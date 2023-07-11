import { StyleSheet, View, Text, Image, ImageBackground} from "react-native";

const GenreDetail = ({ item }) => {
  return(
    <View style={styles.container}>
      <ImageBackground
        source={require('../Data/Img/Genres/Cumbia.png')}
        resizeMode="cover"
        style={{height: "100%", width: "100%"}}
      />
      {/* <Image
        source={require('../Data/Img/Genres/Cumbia.png')}
        resizeMode="cover"
        style={styles.imagen}
      /> */}
    </View>
  )
};

export default GenreDetail;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 100,
    height: 130,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 3,
  },
  imagen: {
    flex: 1, 
    width: "100%",
    height: "100%"
  }
});
