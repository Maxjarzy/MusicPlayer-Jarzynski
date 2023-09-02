import { StyleSheet, Text, View, Pressable } from "react-native";
import { Feather } from '@expo/vector-icons'; 
import { useDispatch } from "react-redux";
import {setSongToPlay} from '../Features/Player/playerSlice'

const Song = ({ item, navigation, onOptions }) => {

  const dispatch = useDispatch();

  const onSelectSong = () => {
    dispatch(setSongToPlay(item.id));
    navigation.navigate("Play");
  };



  return (
    <Pressable
      style={styles.song}
      onPress={() => onSelectSong()}
    >
      <Text style={styles.songTitle}>{item.title}</Text>
      <Pressable onPress={() => onOptions(item)}>
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
    fontFamily: "Noto-Sans-Bold",
  },
});
