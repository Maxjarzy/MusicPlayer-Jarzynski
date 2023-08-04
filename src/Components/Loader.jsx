import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { colors } from "../../assets/Colors/Colors";

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={80} color={colors.day} />
    </View>
  )
}

export default Loader

const styles = StyleSheet.create({
    container: {
        flex: 5,
        justifyContent: "center",
        alignItem: "center",
        backgroundColor: colors.catDarkness
      },
      
})