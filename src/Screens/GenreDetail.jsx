import {
  FlatList,
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
import { useGetSongsByGenreQuery } from "../Services/dataServices";
import Loader from "../Components/Loader";
import Song from "../Components/Song";
import Error from '../Components/Error'
import SelectModal from "../Components/SelectModal";
import {setSongToAdd} from '../Features/Library/librarySlice'

const GenreDetail = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalPlaylistsVisible, setModalPlaylistsVisible] = useState(false)
  const songsSelected = useSelector((state) => state.selectionReducer.value.genre);

  const {
    data: songsByGenre,
    isLoading,
    isError,
  } = useGetSongsByGenreQuery(songsSelected);

  const dispatch = useDispatch();

  const onOptions = (audio) => {
    setModalVisible(true);
    dispatch(setSongToAdd(audio))
  };

  const onAdd = () => {
    setModalVisible(!modalVisible);
    setModalPlaylistsVisible(!modalPlaylistsVisible)

  };

  return !isLoading ? (
    isError ? (
      <Error
        errorMessage={
          "The data could not be retrieved. Please restart the application or come back later."
        }
      />
    ) : (
      <View style={styles.container}>
        <FlatList
          data={songsByGenre}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Song item={item} navigation={navigation} onOptions={onOptions} />
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
          <View style={styles.modalContainerPressable}>
            <Pressable
              onPress={() => {
                console.log("Reproduciendo"), setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.pressableContainer}>
                <Ionicons name="md-play-sharp" size={26} color="black" />
                <Text style={styles.pressableText}>Reproducir</Text>
              </View>
            </Pressable>
            <Pressable onPress={onAdd}>
              <View style={styles.pressableContainer}>
                <MaterialIcons name="playlist-add" size={26} color="black" />
                <Text style={styles.pressableText}>
                  Agregar a lista de reproducción
                </Text>
              </View>
            </Pressable>
          </View>
        </Modal>
        <SelectModal modalPlaylistsVisible={modalPlaylistsVisible} setModalPlaylistsVisible={setModalPlaylistsVisible}/>
      </View>
    )
  ) : (
    <Loader />
  );
};

export default GenreDetail;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: colors.catDarkness,
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
