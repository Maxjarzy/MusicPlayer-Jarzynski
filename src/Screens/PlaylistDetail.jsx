import { FlatList, StyleSheet, Text, View } from "react-native";
import { colors } from "../../assets/Colors/Colors";
import { useDispatch, useSelector } from "react-redux";
import PlayListDetailItem from "../Components/PlayListDetailItem";
import { useGetPlaylistByIdQuery } from "../Services/dataServices";
import { useFocusEffect } from "@react-navigation/native";
import Loader from "../Components/Loader";
import Error from "../Components/Error";
import { setPlaylistsSelected } from "../Features/Library/librarySlice";
import { useCallback } from "react";
import { useState } from "react";
import DeleteSongModal from '../Components/DeleteSongModal'

const PlaylistDetail = ({ navigation }) => {
  const [deleteSongModalVisible, setDeleteSongModalVisible] = useState(false)
  const { playlistSelected } = useSelector((state) => state.libraryReducer.value);
  const { data, isLoading, isError, refetch } = useGetPlaylistByIdQuery(playlistSelected,{ refetchOnFocus: true });

  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() =>{
      refetch()
      return () => {
        navigation.goBack()
        dispatch(setPlaylistsSelected(""))
      }
    }, [])
 );


  return isLoading ? (
    <Loader />
  ) : isError ? (
    <Error />
  ) : (
    <View style={styles.container}>
      {data.playlist ? (
        <>
          <Text style={styles.title}>{data.name}</Text>
          <FlatList
            data={data.playlist}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => <PlayListDetailItem item={item} deleteSongModalVisible={deleteSongModalVisible} setDeleteSongModalVisible={setDeleteSongModalVisible}/>}
            showsVerticalScrollIndicator={false}
          />
          <DeleteSongModal setDeleteSongModalVisible={setDeleteSongModalVisible} deleteSongModalVisible={deleteSongModalVisible}/>
        </>
      ) : (
        <>
          <Text style={styles.title}>{data.name}</Text>
          <Text style={styles.text}>Playlist is empty</Text>
        </>
      )}
    </View>
  );
};

export default PlaylistDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.catDarkness,
    padding: 5,
  },
  text: {
    textAlign: "center",
    fontFamily: "Noto-Sans-Bold",
    color: colors.sun,
  },
  title: {
    fontSize: 30,
    fontFamily: "Noto-Sans-Bold",
    textAlign: "center",
  },
});
