import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { colors } from "../../assets/Colors/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { setSongToDelete } from "../Features/Library/librarySlice";
import { useDeleteSongToPlaylistMutation } from "../Services/dataServices";
import { useEffect } from "react";

const DeleteSongModal = ({
  deleteSongModalVisible,
  setDeleteSongModalVisible,
}) => {
  const [deleteSongTrigger, deleteSongResult] =
    useDeleteSongToPlaylistMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (deleteSongResult.isSuccess) dispatch(setSongToDelete(""));
  }, [deleteSongResult]);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={deleteSongModalVisible}
        onRequestClose={() => {
          setDeleteSongModalVisible(!deleteSongModalVisible);
          dispatch(setSongToDelete(""));
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              onPress={() => {
                deleteSongTrigger({ songToDelete, playlistSelected });
                dispatch(setSongToDelete(""));
                setDeleteSongModalVisible(!deleteSongModalVisible);
              }}
              style={styles.pressable}
            >
              <View style={styles.pressableContainer}>
                <Ionicons name="md-play-sharp" size={26} color="black" />
                <Text style={styles.pressableText}>Delete</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DeleteSongModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: colors.cat,
    width: "100%",
    height: "50%",
    alignItems: "flex-start",
    justifyContent: "center",
    rowGap: 15,
    padding: 15,
  },
  modalText: {
    fontSize: 20,
    fontFamily: "Noto-Sans-Bold",
    alignSelf: "center",
  },
  pressableContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  pressableText: {
    color: colors.nigth,
    fontSize: 20,
    fontFamily: "Noto-Sans",
    marginLeft: 10,
  },
});
