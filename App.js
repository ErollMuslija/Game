import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native';

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver ] = useState(true);

  const [fontsLoaded] = useFonts({
    'popins': require('./assets/fonts/Poppins-Regular.ttf'),
    'popins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
  });

  if(!fontsLoaded) {
    return <ActivityIndicator/>
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber)
    setGameOver(false)
  }

  const gameOverHandler = () => {
    setGameOver(true)
  }

  let screen = <StartGameScreen pickedNumberHandler={pickedNumberHandler}/>

  if(userNumber){
    screen = <GameScreen userNumber={userNumber} gameOverHandler={gameOverHandler}/>
  }

  if(gameOver && userNumber){
    screen = <GameOverScreen/>
  }


  return (
    <LinearGradient colors={[ '#4e0329', '#ddb52f',]} style={styles.container}>
      <ImageBackground
      source={require('./assets/Images/background.png')}
      resizeMode="cover"
      style={styles.container}
      imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.container}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage:{
    opacity: 0.25
  }
});
