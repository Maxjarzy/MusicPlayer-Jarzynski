import { StyleSheet, Image, View, Text } from 'react-native'
import { colors } from "../../assets/Colors/Colors";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/Img/Logo.png')}
        style={styles.logo}
      />
      <Text style = {styles.title}>MaxxMusic</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: "100%",
        backgroundColor: colors.cat,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start", 
        backgroundColor: colors.cat
    },
    logo: {
        width: "70%",
        height: "70%",
        flex: 3/10,
    },
    title: {
      flex: 8/10,
      fontFamily: 'Noto-Sans',
      fontWeight: "bold",
      fontSize: 30,
      fontStyle: 'italic',
      marginLeft: 0  
    }
})