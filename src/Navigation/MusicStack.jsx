import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Genres from "../Screens/Genres";
import GenreDetail from "../Screens/GenreDetail";
import Player from "../Screens/Player";
import Header from "../Components/Header";

const MusicStack = () => {

    const Stack = createNativeStackNavigator();


  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        header: () => {
          return <Header />;
        },
      })}
    >
      <Stack.Screen name="Home" component={Genres} />
      <Stack.Screen name="GenreDetail" component={GenreDetail} />
      <Stack.Screen name="Player" component={Player} />
    </Stack.Navigator>
  );
};

export default MusicStack;
