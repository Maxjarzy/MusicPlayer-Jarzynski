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
import { useDispatch, useSelector } from "react-redux";
import { useGetSongsByGenreQuery } from "../Services/songsServices";
import Loader from "../Components/Loader";
import Song from "../Components/Song";
import { addSongToPlaylist } from "../Features/Library/librarySlice";

const GenreDetail = ({ navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [songToAdd, setSongToAdd] = useState("")
  const songsSelected = useSelector(state => state.selectionReduce.value.genre) 

  const {data: songsByGenre, isLoading} = useGetSongsByGenreQuery(songsSelected)

  const dispatch = useDispatch()

  const onOptions = (audio) => {
    setModalVisible(true);
    setSongToAdd(audio)
  };

  const onAdd = () => {
    dispatch(addSongToPlaylist(songToAdd))
    setModalVisible(!modalVisible)
  }

  return (
    !isLoading ?
    <View style={styles.container}>
        <FlatList
          data={songsByGenre}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Song
              item={item}
              navigation={navigation}
              onOptions={onOptions}
            />
          )}
          style={styles.songsList}
        />
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
            onPress={onAdd}
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
    : <Loader/>
  );
};

export default GenreDetail;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: colors.catDarkness
  },
  songsList: {
    margin: 5,
    rowGap: 5,
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
});
