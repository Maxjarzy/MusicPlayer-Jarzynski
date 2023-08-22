import { StyleSheet, View, Pressable, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../assets/Colors/Colors";
import {
  useGetPlaylistByUserQuery,
  usePostPlaylistMutation,
} from "../Services/dataServices";
import { useState, useEffect } from "react";
import Loader from "../Components/Loader";
import LibraryItem from "../Components/LibraryItem";
import AddModal from "../Components/AddModal";
import { setPlaylists } from "../Features/Library/librarySlice";
import { useDispatch, useSelector } from "react-redux";

const PlayList = () => {
  const [modalAddVisible, setModalAddVisible] = useState(false);
  const [name, onChangeName] = useState("");
  const [error, setError] = useState(false);
  const [triggerPostPlaylist, result] = usePostPlaylistMutation();

  const { email } = useSelector((state) => state.userReducer.value);
  const { data, isError, isLoading, refetch } =
    useGetPlaylistByUserQuery(email);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setPlaylists(data));
    if (result.isSuccess) {
      refetch();
    }
  }, [result, data]);

  const onAddPlaylist = () => {
    setModalAddVisible(!modalAddVisible);
  };

  const confirmPlaylist = () => {
    const playlistExist = data.some((playlist) => playlist.name === name);
    if (playlistExist) {
      setError(true);
    } else {
      triggerPostPlaylist({
        name,
        user: email,
        updateAt: Date().toLocaleString(),
        playlist: [],
      });
      setModalAddVisible(false);
      onChangeName("");
    }
  };
  const cancelPlaylist = () => {
    onChangeName("");
    setError(false);
    setModalAddVisible(!modalAddVisible);
  };

  return isLoading ? (
    <Loader />
  ) : isError ? (
    <Error />
  ) : data.length === 0 ? (
    <View style={styles.container}>
      <Pressable onPress={onAddPlaylist}>
        <Ionicons name="add-circle-outline" size={50} color="black" />
      </Pressable>
      <AddModal
        confirmPlaylist={confirmPlaylist}
        cancelPlaylist={cancelPlaylist}
        onChangeText={onChangeName}
        modalAddVisible={modalAddVisible}
        error={error}
      />
    </View>
  ) : (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <LibraryItem item={item} />}
        style={styles.flatlist}
      />
      <Pressable onPress={onAddPlaylist}>
        <Ionicons name="add-circle-outline" size={50} color="black" />
      </Pressable>
      <AddModal
        confirmPlaylist={confirmPlaylist}
        cancelPlaylist={cancelPlaylist}
        onChangeText={onChangeName}
        modalAddVisible={modalAddVisible}
        error={error}
        name={name}
      />
    </View>
  );
};

export default PlayList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.catDarkness,
    padding: 5
  },
  flatlist: {
    width: "100%"
  }
});