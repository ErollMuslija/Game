import {View, Text, StyleSheet, Dimensions} from 'react-native'
import Colors from '../../../constants/colors';

const NumberContainer = ({children}) => {


    return (
        <View style={NumberContainerStyle.container}>
            <Text style={NumberContainerStyle.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width


const NumberContainerStyle = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.gold,
        padding: deviceWidth / 20,
        borderRadius: 8,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText:{
        color: Colors.gold,
        fontSize: 36,
        fontWeight: 'bold'
    }


})