import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { colors } from "../../assets/Colors/Colors";
import { useSelector } from "react-redux";
import { useGetSongByIdQuery } from "../Services/dataServices";
import Loader from "../Components/Loader";
import { Audio } from "expo-av";
import { Asset } from "expo-asset";

const Player = ({navigation}) => {
  const songId = useSelector((state) => state.selectionReducer.value.song);

  const {
    data: songSelected,
    isLoading,
    isError,
  } = useGetSongByIdQuery(songId);


  /*   const reproducirCancion = async (audio) => {
      const soundObject = new Audio.Sound();
      try {
        const asset = Asset.fromModule(require(`../../assets/Songs/Genres/Pop/Shape_of_you.mp3`));
        await soundObject.loadAsync(asset);
        await soundObject.playAsync();
      } catch (error) {
        console.error('Error al reproducir la canción:', error);
      }
    };
  


  if (songSelected) {
    const {url} = songSelected
    reproducirCancion(url);
  } */

  /*  
  const onPlay = () => {};

  const onNext = () => {};

  const onPrevious = () => {};

  const onRandom = () => {};

 */
  return !isLoading ? (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/Img/Backgrounds/WhiteWood.png")}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.info}>
          <Image
            source={{
              uri: "https://static.thenounproject.com/png/1604738-200.png",
            }}
            style={styles.image}
          />
          <Text>{songSelected.title}</Text>
          <Text>{songSelected.artist}</Text>
        </View>
      </ImageBackground>
      <View style={styles.playerContainer}>
        <TouchableOpacity>
          <FontAwesome5
            name="random"
            size={24}
            color="black"
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign
            name="arrowleft"
            size={35}
            color="black"
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign
            name="playcircleo"
            size={50}
            color="black"
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign
            name="arrowright"
            size={35}
            color="black"
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ActualPlaylist")}>
          <MaterialCommunityIcons
            name="playlist-music"
            size={35}
            color="black"
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
  },
  playerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.catDarkness,
    justifyContent: "space-between",
    borderBottomColor: "white",
    borderBottomWidth: 0.5,
    padding: 5,
  },
  icon: {
    margin: 10,
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
