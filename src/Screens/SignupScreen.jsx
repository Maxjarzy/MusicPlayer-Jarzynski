import { StyleSheet, Text, View, Pressable } from "react-native";
import { useState, useEffect } from "react";
import InputForm from "../Components/InputForm";
import SubmitButton from "../Components/SubmitButton";
import { colors } from "../../assets/Colors/Colors";
import { useSignUpMutation } from "../Services/AuthSevices";
import { useDispatch } from "react-redux";
import { setUser } from "../Features/User/userSlice";
import { isAtLeastSixCharacters, isValidEmail } from "../Validations/auth";
import { setUserLibrary } from "../Features/Library/librarySlice";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [triggerSignUp, result] = useSignUpMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (result.isSuccess) {
      dispatch(
        setUser({
          email: result.data.email,
          idToken: result.data.idToken,
          localId: result.data.localId,
          profilePhoto: ""
        })
      );
      dispatch(setUserLibrary(email));
    }
  }, [result]);

  const onSubmit = () => {
    try {
      const isValidLoginEmail = isValidEmail(email);
      const isCorrectPassword = isAtLeastSixCharacters(password);
      const isRepeatPasswordCorrect = password === confirmPassword;

      if (isValidLoginEmail && isCorrectPassword && isRepeatPasswordCorrect) {
        const request = {
          email,
          password,
          returnSecureToken: true,
        };
        triggerSignUp(request);
      }

      if (!isValidLoginEmail) setErrorMail("Email is not correct");
      else setErrorMail("");
      if (!isCorrectPassword)
        setErrorPassword("Password must be at least 6 characters");
      else setErrorPassword("");
      if (!isRepeatPasswordCorrect)
        setErrorConfirmPassword("Passwords not match");
      else setErrorConfirmPassword("");
    } catch (error) {
      console.log("Catch error");
      console.log(error.message);
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>Signup</Text>
        <InputForm label={"Email"} onChange={setEmail} error={errorMail} />
        <InputForm
          label={"Password"}
          onChange={setPassword}
          error={errorPassword}
          isSecure={true}
        />
        <InputForm
          label={"Confirm password"}
          onChange={setConfirmPassword}
          error={errorConfirmPassword}
          isSecure={true}
        />
        <SubmitButton onPress={onSubmit} title="Send" />
        <Text style={styles.sub}>Already have an account?</Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={styles.subLink}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.catDarkness,
  },
  container: {
    width: "90%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    paddingVertical: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontFamily: "Noto-Sans-Bold",
  },
  sub: {
    fontSize: 16,
    fontFamily: "Noto-Sans",
    color: colors.nigth,
  },
  subLink: {
    fontSize: 14,
    fontFamily: "Noto-Sans",
    color: colors.sun,
  },
});
