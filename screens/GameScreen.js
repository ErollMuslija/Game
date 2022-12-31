import { useState, useEffect } from "react";
import { Text, View, StyleSheet, Alert, FlatList } from "react-native";
import NumberContainer from "../components/game/t/numberContainer";
import Card from "../components/UI/Card";
import InstructionText from "../components/UI/InstructionText";
import PrimaryButton from "../components/UI/PrimaryButton";
import Title from "../components/UI/Title";
import { Ionicons } from '@expo/vector-icons'; 
import Colors from "../constants/colors";
import GuesedLogItems from "../components/game/t/GuessedLogItems";


const GameScreen = ({userNumber, gameOverHandler}) => {

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
    const [guessRound, setGuressRound ] = useState([initialGuess])

 

    useEffect(() => {
        if(currentGuess === userNumber){
          gameOverHandler();
        }
    },[currentGuess, userNumber, gameOverHandler])

    useEffect(() => {
        let minBoundary = 1 
        let maxBoundary = 100
    }, [])

    const guessRoundsLength = guessRound.length
 
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
        setGuressRound(prevGuessRound => [newRndNumber, ...prevGuessRound])
    }

    const renderItem = ({item}) => <Text style={{color: Colors.gold}}>{item}</Text>

    return (
       <View style={GameScreenStyle.screen}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
        <InstructionText style={GameScreenStyle.text} >Higher of Lower?</InstructionText>
        <View style={GameScreenStyle.buttonPositions}>
                <View style={GameScreenStyle.buttonSpace}>
                    <PrimaryButton onPress={nextGuesHandler.bind(this, 'higher')}>
                        <Ionicons name="md-add" size={24} color="white" />
                    </PrimaryButton>
                </View>
                <View style={GameScreenStyle.buttonSpace}>
                    <PrimaryButton onPress={nextGuesHandler.bind(this, 'lower')}>
                        <Ionicons name="md-remove" size={24} color="white" />
                    </PrimaryButton>
                </View>
            </View>
        </Card>
        <View>
            <FlatList
             data={guessRound}
             renderItem={(itemData) => <GuesedLogItems roundedNumber={guessRoundsLength - itemData.index} guess={itemData.item}/>}
             keyExtractor={(item) => item}
            />
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
    },
    text:{
        marginBottom: 15
    }
})