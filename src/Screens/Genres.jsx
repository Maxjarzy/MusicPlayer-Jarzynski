import { StyleSheet, View, FlatList, ImageBackground } from "react-native";
import { useGetGenresQuery } from "../Services/dataServices";
import { colors } from "../../assets/Colors/Colors";
import { useDispatch, useSelector } from "react-redux";
import { setUserLibrary } from "../Features/Library/librarySlice";
import { useEffect } from "react";
import GenreItem from "../Components/GenreItem";
import Loader from "../Components/Loader";
import Error from "../Components/Error";

const Genres = ({ navigation }) => {
  const { data: genres, isLoading, isError } = useGetGenresQuery();

  /* const { email } = useSelector((state) => state.userReducer.value);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setUserLibrary(email));
  }, []); */

  return !isLoading ? (
    isError ? (
      <Error
        errorMessage={
          "The data could not be retrieved. Please restart the application or come back later."
        }
      />
    ) : (
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={genres}
          keyExtractor={(genre) => genre}
          renderItem={({ item }) => (
            <GenreItem item={item} navigation={navigation} />
          )}
          numColumns={3}
          contentContainerStyle={styles.lista}
        />
      </View>
    )
  ) : (
    <Loader />
  );
};

export default Genres;

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: colors.catDarkness,
  },
  background: {
    width: "100%",
  },
  lista: {
    width: "100%",
    alignItems: "center",
  },
});
