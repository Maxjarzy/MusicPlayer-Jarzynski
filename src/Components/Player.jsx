import { StyleSheet, View, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome5, MaterialCommunityIcons   } from "@expo/vector-icons";
import { colors } from "../../assets/Colors/Colors";

const Player = () => {

  const onPlay = () =>{

  }

  const onNext = () =>{

  }

  const onPrevious = () => {

  }

  const onRandom = () => {

  }

  return (
    <View style={styles.container}>
      <TouchableOpacity>
      <FontAwesome5 
        name="random" 
        size={24} 
        color="white" 
        style = {styles.icon}
      
      />
      </TouchableOpacity>
      <TouchableOpacity>
        <AntDesign 
          name="arrowleft" 
          size={35} 
          color="white" 
          style = {styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <AntDesign 
          name="playcircleo" 
          size={50} 
          color="white" 
          style = {styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <AntDesign 
          name="arrowright" 
          size={35} 
          color="white" 
          style = {styles.icon}       
        />
      </TouchableOpacity>
      <TouchableOpacity>
      <MaterialCommunityIcons 
        name="playlist-music" 
        size={35} 
        color="white" 
      />
      </TouchableOpacity>
      
    </View>
  );
};

export default Player;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.nigth,
    justifyContent: "space-around",
  },
  icon: {
    margin: 10,
  },
});
