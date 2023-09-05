import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import TrackPlayer, {
  Capability,
  State,
  usePlaybackState,
  useProgress,
  AppKilledPlaybackBehavior,
} from "react-native-track-player";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../assets/Colors/Colors";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Components/Loader";
import { useEffect, useState } from "react";
import { setPlaylistInRandom } from "../Features/Player/playerSlice";
import Slider from "@react-native-community/slider";
import * as Animatable from "react-native-animatable";

const Player = ({ navigation }) => {
  const { songToPlay, playlistToPlay } = useSelector(
    (state) => state.playerReducer.value
  );
  const [actualSong, setActualSong] = useState("");
  const progress = useProgress();
  const playBackState = usePlaybackState();
  const dispatch = useDispatch();

  const actualTrackInformation = async () => {
    const actualTrackIndex = await TrackPlayer.getCurrentTrack();
    const actualTrackObject = await TrackPlayer.getTrack(actualTrackIndex);
    setActualSong(actualTrackObject);
  };

  const configure = async () => {
    await TrackPlayer.add(songToPlay || playlistToPlay);
    await TrackPlayer.play();
    TrackPlayer.updateOptions({
      android: {
        appKilledPlaybackBehavior:
          AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
      },
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.SeekTo,
        Capability.Stop,
      ],
      compactCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.Stop,
      ],
      progressUpdateEventInterval: 2,
    });
  };
  const setUpPlayer = async () => {
    try {
      await TrackPlayer.setupPlayer();
      configure();
    } catch (error) {
      await TrackPlayer.reset();
      configure();
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

  useEffect(() => {
    setUpPlayer();
    return () => {
      TrackPlayer.reset();
    };
  }, [songToPlay, playlistToPlay]);

  useEffect(() => {
    if (State.Playing == playBackState) actualTrackInformation();
  }, [playBackState]);

  return songToPlay || playlistToPlay ? (
    <View style={styles.container}>
      <View style={styles.info}>
        <Image
          source={{
            uri: actualSong
              ? actualSong.artwork
              : "https://static.thenounproject.com/png/1604738-200.png",
          }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.songDetail}>
          <Animatable.View
            style={styles.songInfoTextAnimated}
            iterationCount={"infinite"}
            iterationDelay={2000}
            duration={20000}
            useNativeDriver={true}
            animation={"slideOutLeft"}
          >
            <Text numberOfLines={1} style={styles.songInfoText}>
              {actualSong ? actualSong.title : ""}
            </Text>
          </Animatable.View>
          <Text numberOfLines={1} style={styles.songInfoText}>
            {actualSong ? actualSong.artist : ""}
          </Text>
        </View>
      </View>
      <View style={styles.controls}>
        <Slider
          style={styles.slider}
          minimumTrackTintColor={colors.sun}
          maximumTrackTintColor="#FFFFFF"
          minimumValue={0}
          value={progress.position}
          maximumValue={progress.duration}
          thumbTintColor={colors.sun}
          onSlidingComplete={async (value) => {
            await TrackPlayer.seekTo(value);
          }}
        />
        <View style={styles.progressNumbers}>
          <Text style={styles.progressText}>
            {new Date(progress.position * 1000).toLocaleString("en-US", {
              minute: "2-digit",
              second: "2-digit",
            })}
          </Text>
          <Text style={styles.progressText}>
            {actualSong
              ? new Date(
                  (actualSong.duration - progress.position) * 1000
                ).toLocaleString("en-US", {
                  minute: "2-digit",
                  second: "2-digit",
                })
              : "00:00"}
          </Text>
        </View>
        <View style={styles.playerContainer}>
          <TouchableOpacity
            onPress={() =>
              dispatch(setPlaylistInRandom(playlistToPlay || songToPlay))
            }
          >
            <Ionicons
              name="ios-shuffle-outline"
              size={25}
              color={colors.sun}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => TrackPlayer.skipToPrevious()}>
            <Ionicons
              name="play-skip-back-sharp"
              size={30}
              color={colors.sun}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => togglePayBack(playBackState)}>
            <Ionicons
              name={
                playBackState === State.Playing
                  ? "ios-pause-circle"
                  : "ios-play-circle-outline"
              }
              size={60}
              color={colors.sun}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => TrackPlayer.skipToNext()}>
            <Ionicons
              name="play-skip-forward-sharp"
              size={30}
              color={colors.sun}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("ActualPlaylist")}
          >
            <Ionicons
              name="ios-musical-notes-outline"
              size={25}
              color={colors.sun}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
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
    alignItems: "center",
  },
  playerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.catDarkness,
    justifyContent: "center",
    padding: 5,
    columnGap: 15,
  },
  icon: {
    margin: 5,
  },
  info: {
    flex: 3 / 4,
    alignItems: "center",
    justifyContent: "center",
    rowGap: 5,
  },
  image: {
    width: 300,
    height: 300,
    overflow: "hidden",
    borderRadius: 15,
  },
  controls: {
    flex: 1 / 4,
    width: 350,
    flexDirection: "column",
    marginBottom: 10,
  },
  playButton: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.13)",
    borderRadius: 60,
  },
  slider: {
    height: 40,
    marginVertical: 4,
  },
  progressNumbers: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  progressText: {
    color: "#fff",
  },
  songDetail: {
    width: 300,
    overflow: "hidden",
  },
  songInfoText: {
    textAlign: "justify",
    fontSize: 20,
    color: "white",
    fontFamily: "Noto-Sans",
  },
  songInfoTextAnimated: {
    textAlign: "justify",
    fontSize: 20,
    color: "white",
    fontFamily: "Noto-Sans",
    display: "flex",
    flexDirection: "row",
    width: 1000,
  },
});
