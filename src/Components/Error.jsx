import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../assets/Colors/Colors";

const Error = ({ errorMessage, resetErrorMessage }) => {
  return (
    <View style={styles.errorContainer}>
        <View style={styles.errorView}>
          <Text style={styles.errorText}>{errorMessage}</Text>
          <Pressable onPress={resetErrorMessage}>
            <Text style={styles.pressableTextStyle}>Ok</Text>
          </Pressable>
        </View>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.catDarkness
  },
  errorView: {
    backgroundColor: colors.cat,
    width: 300,
    height: 200,
    padding: 20,
    alignItems: "center",
    borderRadius: 6,
  },
  pressableTextStyle: {
    fontFamily: "Noto-Sans-Bold",
    fontSize: 18,
    backgroundColor: colors.sun,
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 6,
    marginTop: 40
  },
  errorText: {
    textAlign: "center",
    fontFamily: "Noto-Sans",
  }
});
