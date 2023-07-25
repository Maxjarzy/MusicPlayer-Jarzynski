import { StyleSheet, Text, View, Pressable } from "react-native";
import { Feather } from '@expo/vector-icons'; 

const Song = ({ item, navigation, onPressSustain }) => {


  const onSelect = (url) => {
    navigation.navigate("Play", { item });
  };


  return (
    <Pressable
      style={styles.song}
      onPress={() => onSelect(item)}
    >
      <Text style={styles.songTitle}>{item.title}</Text>
      <Pressable onPress={onPressSustain}>
        <Feather name="more-vertical" size={24} color="black" />
      </Pressable>
    </Pressable>
  );
};

export default Song;

const styles = StyleSheet.create({
  song: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#88888899",
    marginVertical: 5,
    padding: 5,
  },
  songTitle: {
    color: "#000000",
    fontFamily: "Noto-Sans",
    fontWeight: "500",
  },
});
