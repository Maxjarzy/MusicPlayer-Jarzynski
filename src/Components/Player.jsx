import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../Global/Colors";
import { Pressable } from "react-native";

const Player = () => {

    const onPlay = () =>{
       
    }


  return (
    <View style={styles.container}>
      <Pressable>
        <AntDesign
          name="left"
          size={40}
          color={colors.sun}
          style={styles.icon}
        />
      </Pressable>
      <Pressable>
        <AntDesign
          name="caretright"
          size={40}
          color={colors.sun}
          style={styles.icon}
        />
      </Pressable>
      <Pressable>
        <AntDesign
          name="right"
          size={40}
          color={colors.sun}
          style={styles.icon}
        />
      </Pressable>
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
    justifyContent: "center",
  },
  icon: {
    margin: 10,
  },
});
