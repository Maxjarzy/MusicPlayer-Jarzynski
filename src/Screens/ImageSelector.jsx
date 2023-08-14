import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddButton from "../Components/AddButton";
import { colors } from "../../assets/Colors/Colors";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import { setCameraImage } from "../Features/User/userSlice";
import {
  useGetProfileImageQuery,
  usePostProfileImageMutation,
} from "../Services/dataServices";
import Error from "../Components/Error";

const ImageSelector = ({ navigation }) => {
  const { localId } = useSelector((state) => state.userReducer.value);
  const { data } = useGetProfileImageQuery(localId, {
    refetchOnMountOrArgChange: true,
  });
  const profilePhoto = data?.image;

  const [image, setImage] = useState(null);
  const [permissionsError, setPermissionsError] = useState("");
  const dispatch = useDispatch();

  const [triggerSaveImage, resultSaveImage] = usePostProfileImageMutation();

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      return false;
    }
    return true;
  };

  const pickImage = async () => {
    try{
      const isCameraOk = await verifyCameraPermissions();
      if (isCameraOk) {
        let result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [1, 1],
          base64: true,
          quality: 1,
        });
  
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      } else {
        setPermissionsError("You must accept the camera permissions to continue");
      }
    }catch{
      setPermissionsError("You must accept all permissions to continue")
    }
  };


  const resetErrorMessage = () => {
    setPermissionsError("")
  }

  const confirmImage = async () => {
    try {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status === "granted") {
        const response = await MediaLibrary.createAssetAsync(image);
        triggerSaveImage({
          image: response.uri,
          localId: localId,
        });
        dispatch(setCameraImage(response.uri));
      }
    } catch (error) {
      setPermissionsError("Image can't be saved")
    }
    navigation.goBack();
  };

  const cancelPhoto = () => {
    setImage(null);
    navigation.goBack();
  };

  return permissionsError ? (
    <Error errorMessage={permissionsError} resetErrorMessage={resetErrorMessage}/>
  ) : (
    <View style={styles.container}>
      {image || profilePhoto ? (
        <>
          <Image source={{ uri: image || profilePhoto }} style={styles.image} />
          <AddButton title="Take anoter photo" onPress={pickImage} />
          {image ? (
            <AddButton title="Confirm photo" onPress={confirmImage} />
          ) : null}
          <AddButton title="Cancel" onPress={cancelPhoto} />
        </>
      ) : (
        <>
          <View style={styles.noPhotoContainer}>
            <Text style={styles.text}>No photo to show</Text>
          </View>
          <AddButton title="Take a photo" onPress={pickImage} />
        </>
      )}
    </View>
  );
};

export default ImageSelector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    backgroundColor: colors.catDarkness,
  },
  image: {
    width: 200,
    height: 200,
  },
  noPhotoContainer: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: colors.sun,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Noto-Sans",
  },
  modalView: {
    backgroundColor: colors.cat,
    width: 300,
    height: 200,
    padding: 20,
    alignItems: "center",
    borderRadius: 6,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.catDarkness,
  },
  textStyle: {
    fontFamily: "Noto-Sans-Bold",
    fontSize: 20,
  },
  modalText: {
    fontFamily: "Noto-Sans-Bold",
    textAlign: "center",
  },
  buttonClose: {
    backgroundColor: colors.sun,
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 6,
    marginTop: 40,
  },
});
