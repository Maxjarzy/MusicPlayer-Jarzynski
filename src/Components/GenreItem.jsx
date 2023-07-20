import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";


const GenreItem = ({ 
  item,
  navigation
}) => {

    return (
      <TouchableOpacity onPress={() => navigation.navigate('GenreDetail', {genre: item.nombre})}>
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

export default GenreItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 110,
    height: 130,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  imagen: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
