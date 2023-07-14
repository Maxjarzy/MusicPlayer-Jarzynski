import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { colors } from "./../../assets/Colors/Colors";

const Nav = ({handleState}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navButton} onPress={() => handleState("Home")}>
        <Ionicons 
          name="ios-home-outline" 
          size={30} 
          color="white" 
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={() => handleState("Player")}>
        <Ionicons 
          name="disc-outline" 
          size={30} 
          color="white" 
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={() => handleState("Playlist")}>
        <SimpleLineIcons 
          name="playlist" 
          size={30} 
          color="white" 
        />
      </TouchableOpacity>
    </View>
  );
};

export default Nav;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.nigth,
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
  },
  navButton: {},
});
