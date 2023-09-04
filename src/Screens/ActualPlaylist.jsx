import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import PlayListItem from "../Components/PlayListItem";
import {colors} from '../../assets/Colors/Colors'
import ItemActualPlaylist from "../Components/ItemActualPlaylist";
const ActualPlaylist = () => {
  const {playlistToPlay, songToPlay} = useSelector(state => state.playerReducer.value)

  return (
    <View style={styles.container}>
      <FlatList
            data={songToPlay ? [songToPlay] : playlistToPlay}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <ItemActualPlaylist item={item}/>}
        />
    </View>
  );
};

export default ActualPlaylist;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.catDarkness, 
        padding: 5
    }
});
