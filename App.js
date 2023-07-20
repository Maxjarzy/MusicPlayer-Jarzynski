import { useFonts } from "expo-font";
import Navigator from "./src/Navigation/Navigator";

export default function App() {

  const [fontsLoaded] = useFonts({
    "Noto-Sans": require("./assets/Fonts/Noto_Sans/NotoSans-Light.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Navigator/>
  );
}
