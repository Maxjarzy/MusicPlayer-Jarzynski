import { Pressable, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const PlayListItem = ({ item, handleModal }) => {
  return (
    <View style={styles.song}>
      <View>
        <Text style={styles.songTitle}>{item.title}</Text>
      </View>
      <Pressable onPress={handleModal}>
        <Feather name="more-vertical" size={24} color="black" />
      </Pressable>
    </View>
  );
};

export default PlayListItem;

const styles = StyleSheet.create({
  song: {
    backgroundColor: "#88888899",
    marginVertical: 5,
    paddingLeft: 5,
    paddingRight: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-between"
  },
  songTitle: {
    color: "#000000",
    fontFamily: "Noto-Sans",
    fontWeight: "500",
  },
});
