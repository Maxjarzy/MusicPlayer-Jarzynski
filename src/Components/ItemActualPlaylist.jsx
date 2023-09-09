import { StyleSheet, Text, View, Pressable } from "react-native";
import TrackPlayer from "react-native-track-player";

const ItemActualPlaylist = ({ item }) => {
  const skipToSong = async () => {
    try {
      const queue = await TrackPlayer.getQueue();
      const songIndex = queue.findIndex((track) => track.id === item.id);
      TrackPlayer.skip(songIndex);
    } catch (error) {}
  };

  return (
    <Pressable style={styles.song} onPress={skipToSong}>
      <View>
        <Text style={styles.songTitle}>{item.title}</Text>
      </View>
    </Pressable>
  );
};

export default ItemActualPlaylist;

const styles = StyleSheet.create({
  song: {
    backgroundColor: "#88888899",
    marginVertical: 5,
    paddingLeft: 5,
    paddingRight: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  songTitle: {
    color: "#000000",
    fontFamily: "Noto-Sans-Bold",
    fontWeight: "500",
  },
});
