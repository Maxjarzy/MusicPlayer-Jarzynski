import {
  FlatList,
  ImageBackground,
  StyleSheet,
  View,
  Modal,
  Pressable,
  Text,
} from "react-native";
import { useState } from "react";
import { colors } from "../../assets/Colors/Colors";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import Song from "../Components/Song";

const GenreDetail = ({ navigation, route }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const songsSelected = useSelector(state => state.selectionReduce.value.songsSelected)

  const onPressSustain = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./../../assets/Img/Backgrounds/WhiteWood.png")}
        style={styles.background}
      >
        <FlatList
          data={songsSelected}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Song
              item={item}
              navigation={navigation}
              onPressSustain={onPressSustain}
            />
          )}
          style={styles.songsList}
        />
      </ImageBackground>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        on
      >
        <View style={styles.modalFull}></View>
        <View style={styles.modalContainerPressable}>
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
              console.log("Agragando a lista"), setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.pressableContainer}>
              <MaterialIcons name="playlist-add" size={26} color="black" />
              <Text style={styles.pressableText}>
                Agregar a lista de reproducción
              </Text>
            </View>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

export default GenreDetail;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
  songsList: {
    margin: 5,
    rowGap: 5,
  },
  background: {
    flex: 1,
  },
  pressableText: {
    color: colors.nigth,
    fontSize: 20,
    fontFamily: "Noto-Sans",
    marginLeft: 10,
  },
  modalContainerPressable: {
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
  modalFull: {
    height: "100%",
    backgroundColor: colors.nigth,
    opacity: 0.2,
  },
});
