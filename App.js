import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Components/Header';
import Player from './src/Components/Player';
import Genres from './src/Components/Genres';

export default function App() {
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
  },
});
