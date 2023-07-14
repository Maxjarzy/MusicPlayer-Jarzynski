import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Song = ({ item }) => {

  return (
    <TouchableOpacity style={styles.song}>
      <Text style={styles.songTitle}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default Song;

const styles = StyleSheet.create({
  song: {
    backgroundColor: "#88888899",
    marginVertical: 5,
    padding: 5,
  },
  songTitle: {
    color: "#000000",
    fontFamily: "Noto-Sans",
    fontWeight: "500"
  }
});
