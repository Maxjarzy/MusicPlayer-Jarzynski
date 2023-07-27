import { useFonts } from "expo-font";
import Navigator from "./src/Navigation/Navigator";
import { Provider } from "react-redux";
import Store from "./src/Store/Store";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Noto-Sans": require("./assets/Fonts/Noto_Sans/NotoSans-Light.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={Store}>
      <Navigator />
    </Provider>
  );
}
