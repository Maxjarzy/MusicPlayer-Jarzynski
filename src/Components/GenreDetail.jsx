import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const GenreDetail = ({ item }) => {
  return (
    <TouchableOpacity>
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

export default GenreDetail;

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
