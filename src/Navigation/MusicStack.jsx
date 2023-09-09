import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Genres from "../Screens/Genres";
import GenreDetail from "../Screens/GenreDetail";
import ActualPlaylist from "../Screens/ActualPlaylist";

const MusicStack = () => {

    const Stack = createNativeStackNavigator();


  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false
      })}
    >
      <Stack.Screen name="Home" component={Genres} />
      <Stack.Screen name="GenreDetail" component={GenreDetail} />
      <Stack.Screen name="ActualPlaylist" component={ActualPlaylist}/>
    </Stack.Navigator>
  );
};

export default MusicStack;

