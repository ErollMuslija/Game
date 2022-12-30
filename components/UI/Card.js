import {View, Text, StyleSheet } from 'react-native'
import Colors from '../../constants/colors';
import PrimaryButton from './PrimaryButton';

const Card = ({children, confirmHandler, resetValue}) => {
    return (
        <View  style={CardStyle.container}>
            {children}
            {/* <View style={CardStyle.buttonsContainer}>
                <View style={CardStyle.buttonContainer}>
                    <PrimaryButton onPress={resetValue}>Reset</PrimaryButton>
                </View>
                <View style={CardStyle.buttonContainer}>
                    <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
                </View>
            </View> */}
        </View>
    )
}

export default Card; 

const CardStyle = StyleSheet.create({
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
    title:{
        color: Colors.gold,
        fontSize: 24
    },
    buttonsContainer:{
        flexDirection: 'row'
    },
    buttonContainer:{
        flex: 1
    },
})