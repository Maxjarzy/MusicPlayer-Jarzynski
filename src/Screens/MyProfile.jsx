import { StyleSheet, View, Image } from "react-native";
import React, { useState } from "react";
import AddButton from "../Components/AddButton";
import { colors } from "../../assets/Colors/Colors";
import { useSelector } from "react-redux";
import { useGetProfileImageQuery } from "../Services/dataServices";

const MyProfile = ({ navigation }) => {
  const { localId, profilePhoto } = useSelector(
    (state) => state.userReducer.value
  );

  const { data: image } = useGetProfileImageQuery(localId, {
    refetchOnMountOrArgChange: true,
  });

  const cameraImage = image?.image;

  const launchCamera = async () => {
    navigation.navigate("ImageSelector");
  };

  return (
    <View style={styles.container}>
      <Image
        source={
          profilePhoto || cameraImage
            ? { uri: profilePhoto || cameraImage }
            : require("../../assets/Img/defaultProfile.jpg")
        }
        style={styles.image}
        resizeMode="cover"
      />
      <AddButton
        title={
          profilePhoto || cameraImage
            ? "Change profile photo"
            : "Add profile picture"
        }
        onPress={launchCamera}
      />
    </View>
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
});
