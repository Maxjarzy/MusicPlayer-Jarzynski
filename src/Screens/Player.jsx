import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import TrackPlayer, {
  Capability,
  Event,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from "react-native-track-player";
import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import { colors } from "../../assets/Colors/Colors";
import { useSelector } from "react-redux";
import { useGetSongByIdQuery } from "../Services/dataServices";
import Loader from "../Components/Loader";
import { useEffect } from "react";
import songs from "../../assets/Data/Songs";

const Player = ({ navigation }) => {
  const setUpPlayer = async () => {
    try {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.add(songs);
      TrackPlayer.updateOptions({});
    } catch (error) {
      console.log(error);
    }
  };
  const togglePayBack = async (playBackState) => {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (currentTrack != null) {
      if (playBackState == State.Paused || playBackState == State.Ready) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };
  const playBackState = usePlaybackState();

  const songId = useSelector((state) => state.selectionReducer.value.song);

  const {
    data: songSelected,
    isLoading,
    isError,
  } = useGetSongByIdQuery(songId);

  useEffect(() => {
    setUpPlayer();
    return () => {
      TrackPlayer.reset()
    };
  }, []);
   


  return !isLoading ? (
    <View style={styles.container}>
      <View style={styles.info}>
        <Image
          source={{
            uri: "https://static.thenounproject.com/png/1604738-200.png",
          }}
          style={styles.image}
        />
        <Text>{}</Text>
        <Text>{}</Text>
      </View>
      <View style={styles.playerContainer}>
        <TouchableOpacity>
          <FontAwesome5
            name="random"
            size={25}
            color="black"
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => TrackPlayer.skipToPrevious()}>
          <AntDesign
            name="stepbackward"
            size={25}
            color="black"
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => togglePayBack(playBackState)}>
          <Ionicons
            name={
              playBackState === State.Playing ? "md-pause" : "md-play-sharp"
            }
            size={50}
            color="black"
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => TrackPlayer.skipToNext()}>
          <AntDesign
            name="stepforward"
            size={25}
            color="black"
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ActualPlaylist")}>
          <MaterialCommunityIcons
            name="playlist-music"
            size={25}
            color="black"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  ) : (
    <Loader />
  );
};

export default Player;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.catDarkness,
  },
  playerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.catDarkness,
    justifyContent: "center",
    borderBottomColor: "white",
    borderBottomWidth: 0.5,
    padding: 5,
    columnGap: 10
  },
  icon: {
    margin: 2,
  },
  info: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
    rowGap: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
  background: {
    flex: 4,
  },
});
