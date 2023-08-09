import { StyleSheet, Text, View, TextInput } from "react-native";
import { colors } from "../../assets/Colors/Colors";
import { useState } from "react";


const InputForm = ({ label, onChange, error = "", isSecure = false }) => {
  const [input, setInput] = useState("");

  const onChangeText = (text) => {
    setInput(text);
    onChange(text);
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.subtitle}>{label}</Text>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

export default InputForm;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        backgroundColor: colors.catDarkness
    },
    subtitle: {
        width: '90%',
        fontSize: 16,
        fontFamily: 'Noto-Sans'
    },
    error: {
        fontSize: 16,
        color: 'red',
        fontFamily: 'Noto-Sans',
        fontStyle: 'italic',
    },
    input: {
        width: '90%',
        borderWidth: 0,
        borderBottomWidth: 3,
        borderBottomColor: colors.sun,
        padding: 2,
        fontFamily: 'Noto-Sans',
        fontSize: 14,
    }
})
