import { StyleSheet, Image, View } from 'react-native'
import { colors } from "../Global/Colors";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../Data/Img/Logo.png')}
        style={styles.logo}
      />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: 120,
        width: "100%",
        backgroundColor: colors.cat,
        alignItems: "center",
        justifyContent: "center"
    },
    logo: {
        width: "100%",
        height: "60%"
    }
})