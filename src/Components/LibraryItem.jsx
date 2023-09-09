import { Pressable, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import DeleteModal from "./DeleteModal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setPlaylistsSelected } from "../Features/Library/librarySlice";
import {setPlaylistToPlay} from '../Features/Player/playerSlice'


const LibraryItem = ({ item, triggerDeletePlaylist, navigation }) => {
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const dispatch = useDispatch()

  const deletePlaylist = (id) => {
    triggerDeletePlaylist(id)
    setDeleteModalVisible(!deleteModalVisible)
  }

  const onSelectPlaylist = () => {
    navigation.navigate("PlaylistDetail")
    dispatch(setPlaylistsSelected(item.id))
  }

  const onPlayPlaylist =(playlist) => {
    dispatch(setPlaylistToPlay(playlist))
    setDeleteModalVisible(!deleteModalVisible)
    navigation.navigate("Play")
  }
  return (
    <>
      <Pressable style={styles.container} onPress={onSelectPlaylist}>
        <Text style={styles.text}>{item.name}</Text>
        <Pressable onPress={() => setDeleteModalVisible(true)}>
          <Feather name="more-vertical" size={24} color="black" />
        </Pressable>
      </Pressable>
      <DeleteModal
        deleteModalVisible={deleteModalVisible}
        setDeleteModalVisible={setDeleteModalVisible}
        item={item}
        deletePlaylist={deletePlaylist}
        onPlayPlaylist={onPlayPlaylist}
      />
    </>
  );
};

export default LibraryItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: "#88888899",
    marginVertical: 5,
    padding: 5,
  },
  text: {
    color: "#000000",
    fontFamily: "Noto-Sans-Bold",
  },
});
