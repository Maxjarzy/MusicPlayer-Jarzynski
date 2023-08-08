import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  TextInput,
} from "react-native";
import { useState } from "react";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../assets/Colors/Colors";


const PlayList = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalAddVisible, setModalAddVisible] = useState(false);
  const [name, onChangeName] = useState("")

  const handleModal = () => {
    setModalVisible(true);
  };
  return (
    <View style={styles.container}>
        <Pressable onPress={() => setModalAddVisible(!modalAddVisible)}>
          <Ionicons name="add-circle-outline" size={50} color="black" />
        </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onTouchEnd={() => {
          setModalVisible(!modalVisible);
        }}
        on
      >
        <View style={styles.modalContainer}>
          <Pressable
            onPress={() => {
              console.log("Reproduciendo"), setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.pressableContainer}>
              <Ionicons name="md-play-sharp" size={24} color="black" />
              <Text style={styles.pressableText}>Reproducir</Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => {
              console.log("Reproduciendo todo"), setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.pressableContainer}>
              <MaterialIcons name="playlist-play" size={24} color="black" />
              <Text style={styles.pressableText}>Reproducir lista</Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => {
              console.log("Canción eliminada"), setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.pressableContainer}>
              <Feather name="x" size={24} color="black" />
              <Text style={styles.pressableText}>
                Eliminar de la lista de reproducción
              </Text>
            </View>
          </Pressable>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalAddVisible}
        onTouchEnd={() => {
          setModalAddVisible(!modalAddVisible);
          onChangeName("")
        }}
      >
        <View style={styles.modalAddContainer}>
          <View style={styles.modalAddView}>
            <TextInput 
              onChangeText={onChangeName}
              value={name}
              placeholder="New playlist name"
              />
            <Pressable style={styles.buttonModalAdd}>
              <Text style={styles.buttonText}>Crear lista</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PlayList;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    alignItems: "center",
    backgroundColor: colors.catDarkness,
    flex: 1
  },
  modalContainer: {
    backgroundColor: colors.cat,
    width: "100%",
    height: "50%",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    padding: 15,
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
  image: {
    alignItems: "center",
  },
  modalAddContainer: {
    backgroundColor: colors.cat,
    width: "100%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    padding: 15,
  },
  modalAddView: {
    justifyContent: "center",
    alignItems: "center"
  },
  buttonModalAdd: {
    marginTop: 15,
    backgroundColor: colors.sun,
    padding: 10,
    width: "fit-content"
  },
  buttonText: {
    fontFamily: "Noto-Sans-Bold"
  }
});
