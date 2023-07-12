import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Components/Header';
import Player from './src/Components/Player';
import Genres from './src/Components/Genres';
import { useFonts } from 'expo-font';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Noto-Sans': require('./assets/Fonts/Noto_Sans/NotoSans-Light.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Header/>
      <Genres/>
      <Player/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  },
});
