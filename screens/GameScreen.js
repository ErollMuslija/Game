import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import NumberContainer from "../components/game/t/numberContainer";
import Title from "../components/UI/Title";

const generateRandomNumber = (min, max, exclude) => {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if(randomNumber === exclude){
        return generateRandomNumber(min, max, exclude);
    } else {
        return randomNumber
    }
}

const GameScreen = ({userNumber}) => {

    const initialGuess = generateRandomNumber(1, 100, userNumber)
    const [currentGuess, setCurrentGues] = useState(initialGuess)
    return (
       <View style={GameScreenStyle.screen}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View>
            <Text>Higher or Lower?</Text>
            {/* + - */}
        </View>
        <View>
            {/* LOG ROUND */}
        </View>
       </View>
    )
}

export default GameScreen;

const GameScreenStyle = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 15
    }
})