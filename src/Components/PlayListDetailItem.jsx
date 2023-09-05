import { StyleSheet, Text, View, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import {setSongToDelete} from '../Features/Library/librarySlice'

const PlayListDetailItem = ({
  item,
  setDeleteSongModalVisible,
  deleteSongModalVisible 
}) => {
  const dispatch = useDispatch();

  const handleDeleteSong = () => {
    setDeleteSongModalVisible(!deleteSongModalVisible)
    dispatch(setSongToDelete(item))
  }
  return (
    <View style={styles.song}>
      <Text style={styles.songTitle}>{item.title}</Text>
      <Pressable
        onPress={() => handleDeleteSong()}
      >
        <Feather name="more-vertical" size={24} color="black" />
      </Pressable>
    </View>
  );
};

export default PlayListDetailItem;

const styles = StyleSheet.create({
  song: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#88888899",
    marginVertical: 5,
    padding: 5,
  },
  songTitle: {
    color: "#000000",
    fontFamily: "Noto-Sans-Bold",
  },
});
