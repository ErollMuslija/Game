import { useState } from "react";
import { TextInput, View, StyleSheet, Alert, useWindowDimensions } from "react-native";
import PrimaryButton from "../components/UI/PrimaryButton";
import Title from "../components/UI/Title";
import Colors from "../constants/colors";
import Card from "../components/UI/Card";
import InstructionText from "../components/UI/InstructionText";

const StartGameScreen = ({pickedNumberHandler}) => {
    const [ enteredNumber, setEnteredNumber ] = useState('');

    const {width, height} = useWindowDimensions();

    const marginTopDistance = height < 500 ? 30 : 100

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
    <View style={[StartGameScreenStyle.screenContainer, {marginTop: marginTopDistance}]}>
        <Title>Guess my number</Title>
        <Card confirmHandler={confirmHandler} resetValue={resetValue}>
        <InstructionText>Enter a number</InstructionText>
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
        </Card>
    </View>

 )
}

export default StartGameScreen;

// const deviceHeight = Dimensions.get('window').height

const StartGameScreenStyle = StyleSheet.create({
    screenContainer:{
        flex: 1,
        // marginTop: marginTopDistance,
        alignItems: 'center'
    },
    container: {
        marginTop: 36,
        alignItems: 'center',
        padding: 15,
        marginHorizontal: 15,
        backgroundColor: Colors.secondaryPurple,
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
        borderBottomColor: Colors.gold,
        borderBottomWidth: 2,
        color: Colors.gold,
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