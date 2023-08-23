import { Pressable, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import DeleteModal from "./DeleteModal";
import { useState } from "react";

const LibraryItem = ({ item, triggerDeletePlaylist }) => {
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);


  const deletePlaylist = (id) => {
    triggerDeletePlaylist(id)
    setDeleteModalVisible(!deleteModalVisible)
  }
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>{item.name}</Text>
        <Pressable onPress={() => setDeleteModalVisible(true)}>
          <Feather name="more-vertical" size={24} color="black" />
        </Pressable>
      </View>
      <DeleteModal
        deleteModalVisible={deleteModalVisible}
        setDeleteModalVisible={setDeleteModalVisible}
        item={item}
        deletePlaylist={deletePlaylist}
      />
    </>
  );
};

export default LibraryItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: "#88888899",
    marginVertical: 5,
    padding: 5,
  },
  text: {
    color: "#000000",
    fontFamily: "Noto-Sans-Bold",
  },
});
