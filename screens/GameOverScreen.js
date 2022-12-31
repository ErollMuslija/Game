import { View, StyleSheet, Image, Text } from "react-native";
import Colors from '../constants/colors'
import Title from '../components/UI/Title'
import PrimaryButton from "../components/UI/PrimaryButton";

const GameOverScreen = ({roundsNumber, userNumber, newGame}) => {
    console.log(newGame);
 return (
    <View style={GameOverScreenStyle.container}>
        <Title>Game Over</Title>
        <View style={GameOverScreenStyle.imageContainer}>
            <Image  style={GameOverScreenStyle.image} source={require('../assets/Images/success.png')}/>
        </View>
        <Text style={GameOverScreenStyle.summaryText}>You'r phone needed
            <Text style={GameOverScreenStyle.highLeitetText}>
            {' '}{roundsNumber}
            </Text> rounds to get the number
            <Text style={GameOverScreenStyle.highLeitetText}>
              {''}  {userNumber}
            </Text>.</Text>
        <View style={GameOverScreenStyle.buttonPosition}>
            <PrimaryButton onPress={newGame}>Start New Game</PrimaryButton>
        </View>
    </View>
 )
}

export default GameOverScreen;

const GameOverScreenStyle = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    imageContainer:{
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.gold,
        overflow: 'hidden',
        margin: 30
    },
    image:{
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontFamily: 'popins',
        fontSize: 20,
        textAlign: 'center'
    },
    highLeitetText:{
        fontFamily: 'popins-bold',
        color: Colors.primaryPurple
    },
    buttonPosition: {
        marginTop: 20
    }
})