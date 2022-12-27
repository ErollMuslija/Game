import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton"

const StartGameScreen = () => {
 return (
    <View  style={StartGameScreenStyle.container}>
        <TextInput style={StartGameScreenStyle.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        />
        <View style={StartGameScreenStyle.buttonsContainer}>
            <View style={StartGameScreenStyle.buttonContainer}>
                <PrimaryButton>Reset</PrimaryButton>
            </View>
            <View style={StartGameScreenStyle.buttonContainer}>
                <PrimaryButton>Confirm</PrimaryButton>
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
        backgroundColor: '#4e0329',
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