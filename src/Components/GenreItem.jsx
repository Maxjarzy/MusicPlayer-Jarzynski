import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import { setGenre } from "../Features/Selection/selectionSlice";
import genres from "../../assets/Data/Genres";

const GenreItem = ({ item, navigation }) => {
  const dispatch = useDispatch();

  const onSelectGenre = () => {
    dispatch(setGenre(item));
    navigation.navigate("GenreDetail", { genre: item });
  };

  const itemFiltred = genres.filter(genre => genre.name === item )
  
  return (
    <TouchableOpacity onPress={onSelectGenre}>
      <View style={styles.container}>
        <ImageBackground
          source={itemFiltred[0].image}
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
