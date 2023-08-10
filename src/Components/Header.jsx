import { StyleSheet, Image, View, Text, Pressable } from "react-native";
import { colors } from "../../assets/Colors/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../Features/User/userSlice";
const Header = () => {
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.userReducer.value);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/Img/Logo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>MaxxMusic</Text>
      {email ? (
        <Pressable style={styles.logOut} onPress={() => dispatch(logOut())}>
          <MaterialIcons name="logout" size={30} color="black" />
        </Pressable>
      ) : null}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: "100%",
    backgroundColor: colors.cat,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: colors.cat,
  },
  logo: {
    width: "70%",
    height: "70%",
    flex: 3 / 10,
  },
  title: {
    flex: 8 / 10,
    fontFamily: "Noto-Sans",
    fontWeight: "bold",
    fontSize: 30,
    fontStyle: "italic",
    marginLeft: 0,
  },
  logOut: {
    margin: 15,
  },
});
