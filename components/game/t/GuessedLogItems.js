import {View, Text, StyleSheet} from 'react-native'
import Colors from '../../../constants/colors';

const GuesedLogItems = ({roundedNumber, guess}) => {
    return(
        <View style={GuesedLogItemsStyle.listItem}>
            <Text style={GuesedLogItemsStyle.itemText}>{roundedNumber}</Text>
            <Text style={GuesedLogItemsStyle.itemText}>Opponents Guess{guess}</Text>
        </View>
    )
}

export default GuesedLogItems;

const GuesedLogItemsStyle = StyleSheet.create({
    listItem:{
        borderColor: Colors.secondaryPurple,
        borderWidth: 1,
        borderRadius: 10,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.gold,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    itemText:{
        fontFamily: 'popins'
    }
})