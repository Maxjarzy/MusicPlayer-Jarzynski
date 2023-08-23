import { StyleSheet, Text, View, Pressable, Modal} from 'react-native'
import { colors } from '../../assets/Colors/Colors';
import { MaterialIcons, Ionicons } from '@expo/vector-icons'; 



const DeleteModal = ({ deleteModalVisible, setDeleteModalVisible,item, deletePlaylist}) => {
  
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={deleteModalVisible}
          onRequestClose={() => {
            setDeleteModalVisible(!deleteModalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{item.name}</Text>
              <Pressable >
              <View style={styles.pressableContainer}>
              <Ionicons name="md-play-sharp" size={26} color="black" />
                <Text style={styles.pressableText}>
                  Play
                </Text>
              </View>
            </Pressable>
            <Pressable onPress={()=> deletePlaylist(item.id)}>
              <View style={styles.pressableContainer}>
              <MaterialIcons name="delete-forever" size={26} color="black" />
                <Text style={styles.pressableText}>
                  Delete
                </Text>
              </View>
            </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    );
}

export default DeleteModal

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
    rowGap: 15,
    padding: 15
  },
  modalText: {
    fontSize: 20,
    fontFamily: "Noto-Sans-Bold",
    alignSelf: "center"
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
})