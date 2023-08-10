import { Pressable, StyleSheet, Text, View } from "react-native";
import InputForm from "../Components/InputForm";
import SubmitButton from "../Components/SubmitButton";
import { colors } from "../../assets/Colors/Colors";
import { useSignInMutation } from "../Services/AuthSevices";
import { useEffect, useState } from "react";
import { isValidEmail, isAtLeastSixCharacters } from "../Validations/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../Features/User/userSlice";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorMail] = useState("")
  const [errorPassword, setErrorPassword] = useState("")

  const [triggerSignIn, resultSignIn] = useSignInMutation();

  const dispatch = useDispatch()

  const onSubmit = () => {
    const isValidLoginEmail = isValidEmail(email);
    const isCorrectPassword = isAtLeastSixCharacters(password);

    if (isValidLoginEmail && isCorrectPassword) {
      triggerSignIn({
        email,
        password,
        returnSecureToken: true,
      });
    }

    if (!isValidLoginEmail) setErrorMail("Email is not correct");
    else setErrorMail("");
    if (!isCorrectPassword) setErrorPassword("Password must be at least 6 characters");
    else setErrorPassword("");
  };

  console.log(resultSignIn);

  useEffect(() => {
    if(resultSignIn.isSuccess){
        dispatch(setUser({
            email : resultSignIn.data.email,
            idToken: resultSignIn.data.idToken
        }))
    }
  }, [resultSignIn])

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <InputForm
          label={"Email"}
          onChange={(email) => setEmail(email)}
          error={errorEmail}
        />
        <InputForm
          label={"Password"}
          onChange={(password) => setPassword(password)}
          error={errorPassword}
          isSecure={true}
        />
        <SubmitButton onPress={onSubmit} title="Send" />
        <Text style={styles.sub}>Not have an account?</Text>
        <Pressable onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.subLink}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;

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
    backgroundColor: colors.catDarkness,
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
    color: colors.nigth,
    fontFamily: "Noto-Sans",
  },
  subLink: {
    fontSize: 14,
    color: colors.sun,
  },
});
