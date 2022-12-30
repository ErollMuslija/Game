import {Text,View, StyleSheet} from 'react-native'
import Colors from '../../constants/colors';

const InstructionText = ({children}) => {
    return(
    <View>
        <Text style={InstructionTextStyle.title}>{children}</Text>
    </View>
    )
  
}

export default InstructionText;

const InstructionTextStyle = StyleSheet.create({
    title:{
        color: Colors.gold,
        fontSize: 24
    }
})

