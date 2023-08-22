import { StyleSheet, Text, View, Modal, TextInput } from "react-native";
import AddButton from "../Components/AddButton";
import { colors } from "../../assets/Colors/Colors";

const AddModal = ({
  cancelPlaylist,
  confirmPlaylist,
  onChangeText,
  modalAddVisible,
  error, 
  name
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalAddVisible}
      onRequestClose={() => {
        cancelPlaylist;
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>New playlist</Text>
          <TextInput style={styles.modalInput} onChangeText={onChangeText}/>
          {error ? <Text style={styles.error}>The playlist name already exists</Text> : null}
          <AddButton
            onPress={confirmPlaylist}
            title={"Acept"}
            disabled={name === "" ? true : false}
            
          />
          <AddButton
            onPress={cancelPlaylist}
            title={"Cancel"}
          />
        </View>
      </View>
    </Modal>
  );
};

export default AddModal;

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
    alignItems: "center",
    rowGap: 15
  },
  modalInput: {
    backgroundColor: colors.cat,
    borderBottomColor: colors.sun,
    borderBottomWidth: 3,
    width: "60%",
    paddingTop: 10,
    fontSize: 20
  },
  modalText: {
    fontSize: 20,
    fontFamily: "Noto-Sans",
  },
});
