import SignIn from './src/screens/SignIn';
import { ThemeProvider } from "styled-components/native"
import theme from './src/theme';
import {useFonts, Roboto_400Regular, Roboto_700Bold, } from "@expo-google-fonts/roboto"
import Loading from './src/components/Loading';
import { Container } from './src/components/Loading/styles';
import { StatusBar } from 'react-native';

export default function App() {

  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});

  if(!fontsLoaded) {
    return (
        <Loading />
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={"light-content"}  />
      <SignIn />
    </ThemeProvider>
  );
}


