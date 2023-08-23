import { StyleSheet, View, Image, Text } from "react-native";
import { colors } from "../../assets/Colors/Colors";
import { useSelector } from "react-redux";
import { useGetProfileImageQuery } from "../Services/dataServices";
import AddButton from "../Components/AddButton";
import Loader from "../Components/Loader";

const MyProfile = ({ navigation }) => {
  const { localId, profilePhoto } = useSelector(
    (state) => state.userReducer.value
  );
  const {email} = useSelector(state => state.userReducer.value)

  const {
    data: image,
    isLoading,
    isError,
  } = useGetProfileImageQuery(localId, {
    refetchOnMountOrArgChange: true,
  });

  const cameraImage = image?.image;

  const launchCamera = async () => {
    navigation.navigate("ImageSelector");
  };

  return !isLoading ? (
    <View style={styles.container}>
      {!isError ? (
        <Image
          source={
            profilePhoto || cameraImage
              ? { uri: profilePhoto || cameraImage }
              : require("../../assets/Img/defaultProfile.jpg")
          }
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <Image
          source={require("../../assets/Img/defaultProfileError.jpg")}
          style={styles.image}
          resizeMode="cover"
        />
      )}
      <Text style={styles.profileText}>{email}</Text>
      <AddButton
        title={
          profilePhoto || cameraImage
            ? "Change profile photo"
            : "Add profile picture"
        }
        onPress={launchCamera}
      />
    </View>
  ) : (
    <Loader />
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.catDarkness,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    margin: 30,
  },
  profileText: {
    color: colors.sun,
    margin: 5,
    fontFamily: "Noto-Sans",
  }
});
