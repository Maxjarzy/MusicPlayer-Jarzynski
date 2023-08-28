import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  FlatList,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../assets/Colors/Colors";
import { useAddSongToPlaylistMutation } from "../Services/dataServices";
import { setPlaylists, setSongToAdd } from "../Features/Library/librarySlice";
import { useEffect } from "react";

const SelectModal = ({ modalPlaylistsVisible, setModalPlaylistsVisible }) => {
  const { songToAdd, playlists } = useSelector((state) => state.libraryReducer.value);
  const dispatch = useDispatch();
  const [triggerAddSong, result] = useAddSongToPlaylistMutation();

  useEffect(() => {
    if (result.isSuccess) dispatch(setSongToAdd(""));
  }, [result]);

  const onAddSong = (item, song) => {
    let playlistUpdate = playlists.map((list) => {
      if (list.id === item.id) {
        if (!list.playlist) {
          return {
            ...list,
            playlist: [song],
            updateAt: Date().toLocaleString(),
          };
        } else {
          return {
            ...list,
            playlist: [...list.playlist, song],
            updateAt: Date().toLocaleString(),
          };
        }
      } else {
        return list;
      }
    });
    dispatch(setPlaylists(playlistUpdate));
    
    playlistUpdate.map((playlist) => {
      if (playlist.id && playlist.playlist) {
        triggerAddSong(playlist);
      }
      return playlist;
    }); 
    setModalPlaylistsVisible(!modalPlaylistsVisible);
  };
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalPlaylistsVisible}
        onRequestClose={() => {
          setModalPlaylistsVisible(!modalPlaylistsVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Agregar "{songToAdd.title}" a:</Text>
            <FlatList
              data={playlists}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Pressable onPress={() => onAddSong(item, songToAdd)}>
                  <Text>{item.name}</Text>
                </Pressable>
              )}
              style={styles.flatList}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalPlaylistsVisible(!modalPlaylistsVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SelectModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: colors.cat,
    width: "100%",
    height: "50%",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    padding: 15,
  },
  flatList: {
    width: "100%",
    height: "100%",
  },
});
