import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton"

const StartGameScreen = ({pickedNumberHandler}) => {
    const [ enteredNumber, setEnteredNumber ] = useState('');

    const inputHandler = (value) => {
        setEnteredNumber(value)
    }

    const resetValue = () => {
        setEnteredNumber('')
    }

    const confirmHandler = () => {
        const choosenNumber = parseInt(enteredNumber);
        if(isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
            Alert.alert(
            'Invalid number',
            'Number has to be a number between 1 and 99',
            [{text: 'Okay', style: 'destructive', onPress: resetValue }])
            return;
        }
        pickedNumberHandler(choosenNumber)
    }

 return (
    <View  style={StartGameScreenStyle.container}>
        <TextInput style={StartGameScreenStyle.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={inputHandler}
        value={enteredNumber}
        />
        <View style={StartGameScreenStyle.buttonsContainer}>
            <View style={StartGameScreenStyle.buttonContainer}>
                <PrimaryButton onPress={resetValue}>Reset</PrimaryButton>
            </View>
            <View style={StartGameScreenStyle.buttonContainer}>
                <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
            </View>
        </View>

    </View>
 )
}

export default StartGameScreen;

const StartGameScreenStyle = StyleSheet.create({
    container: {
        marginTop: 100,
        alignItems: 'center',
        padding: 15,
        marginHorizontal: 15,
        backgroundColor: '#3b0217',
        borderRadius: 8,
        elevation: 4, //-> Only Android
        shadowColor: 'black',
        shadowOffset: {width: 0 , height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.5
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8, 
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer:{
        flexDirection: 'row'
    },
    buttonContainer:{
        flex: 1
    }
})