import { StyleSheet, View, FlatList, ImageBackground } from "react-native";
import { useGetGenresQuery } from "../Services/songsServices";
import GenreItem from "../Components/GenreItem";
import Loader from "../Components/Loader";
import { colors } from "../../assets/Colors/Colors";



const Genres = ({navigation}) => {

  const {data: genres, isLoading, isError} = useGetGenresQuery()

  return (
    !isLoading ? 
    <View style={styles.container}>
      
        <FlatList
          showsVerticalScrollIndicator={false}
          data={genres}
          keyExtractor={(genre) => genre}
          renderItem={({ item }) => <GenreItem item={item} navigation={navigation}/>}
          numColumns={3}
          contentContainerStyle={styles.lista} 
        />
    </View>
    : <Loader/>
  );
};

export default Genres;

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: colors.catDarkness
  },
  background: {
    width: "100%",
  },
  lista:{
    width: "100%",
    alignItems: "center"
  }
});
