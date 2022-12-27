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
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
    </View>
 )
}

export default StartGameScreen;

const StartGameScreenStyle = StyleSheet.create({
    container: {
        marginTop: 100,
        padding: 15,
        marginHorizontal: 15,
        backgroundColor: '#72063c',
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
    }
})