import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PlayList from "../Screens/Playlist"
import Header from "../Components/Header";
import PlaylistDetail from '../Screens/PlaylistDetail'

const PlayListStack = () => {

    const Stack = createNativeStackNavigator();


  return (
    <Stack.Navigator
      initialRouteName="Playlist"
      screenOptions={({ route }) => ({
        header: () => {
          return <Header />;
        },
      })}
    >
      <Stack.Screen name="Playlist" component={PlayList} />
      <Stack.Screen name="PlaylistDetail" component={PlaylistDetail} />
    </Stack.Navigator>
  );
};

export default PlayListStack;

