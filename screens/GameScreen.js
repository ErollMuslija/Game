import { useState } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import NumberContainer from "../components/game/t/numberContainer";
import PrimaryButton from "../components/UI/PrimaryButton";
import Title from "../components/UI/Title";





const GameScreen = ({userNumber}) => {

    const generateRandomNumber = (min, max, exclude) => {
        const randomNumber = Math.floor(Math.random() * (max - min)) + min;
        if(randomNumber === exclude){
            return generateRandomNumber(min, max, exclude);
        } else {
            return randomNumber
        }
    }

    let minBoundary = 1 
    let maxBoundary = 100

    const initialGuess = generateRandomNumber(minBoundary, maxBoundary, userNumber)
    const [currentGuess, setCurrentGues] = useState(initialGuess)

 
    function nextGuesHandler (direction){
        if((direction === 'lower' && currentGuess < userNumber) ||
        (direction === 'higher' && currentGuess > userNumber)){
            Alert.alert("Don't Lie, you know that this is wrong..")
            return;
         
        }
        if(direction === 'lower'){
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomNumber(minBoundary, maxBoundary, currentGuess);
        setCurrentGues(newRndNumber);
    }
    return (
       <View style={GameScreenStyle.screen}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View>
            <Text>Higher or Lower?</Text>
            <View style={GameScreenStyle.buttonPositions}>
                <View style={GameScreenStyle.buttonSpace}>
                    <PrimaryButton onPress={nextGuesHandler.bind(this, 'higher')}>+</PrimaryButton>
                </View>
                <View style={GameScreenStyle.buttonSpace}>
                    <PrimaryButton onPress={nextGuesHandler.bind(this, 'lower')}>-</PrimaryButton>
                </View>
            </View>
         
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
    },
    buttonPositions:{
        flexDirection:'row'
    },
    buttonSpace: {
        flex: 1
    }
})