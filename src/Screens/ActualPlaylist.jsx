import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import PlayListItem from "../Components/PlayListItem";
import {colors} from '../../assets/Colors/Colors'
const ActualPlaylist = () => {
  const playList = useSelector(state => state.libraryReduce.value.playlists);

  return (
    <View style={styles.container}>
      <FlatList
            data={playList}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <PlayListItem item={item}/>}
        />
    </View>
  );
};

export default ActualPlaylist;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.catDarkness
    }
});
