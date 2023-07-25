import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
} from "react-native";
import { useState } from "react";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../assets/Colors/Colors";
import SongsMock from "../../assets/Data/SongsMock";
import PlayListItem from "../Components/PlayListItem";

const PlayList = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleModal = () => {
    setModalVisible(true);
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/Img/Backgrounds/WhiteWood.png")}
      >
        <FlatList
          data={SongsMock}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PlayListItem item={item} handleModal={handleModal} />
          )}
        />
      </ImageBackground>
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
    </View>
  );
};

export default PlayList;

const styles = StyleSheet.create({
  container: {
    padding: 5,
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
});
