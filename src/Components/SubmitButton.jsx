import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../../assets/Colors/Colors";

const SubmitButton = ({ onPress, title }) => {
    return (
        <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

export default SubmitButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.sun,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        width: '60%'
    },
    text: {
        color: colors.nigth,
        fontFamily: 'Noto-Sans',
        fontSize: 22
    },
});