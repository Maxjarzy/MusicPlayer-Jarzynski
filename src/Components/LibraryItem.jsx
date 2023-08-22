import { Pressable, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const LibraryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.name}</Text>
      <Pressable>
        <Feather name="more-vertical" size={24} color="black" />
      </Pressable>
    </View>
  );
};

export default LibraryItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: "#88888899",
    marginVertical: 5,
    padding: 5,
  },
  text: {
    color: "#000000",
    fontFamily: "Noto-Sans-Bold",
  },
});
