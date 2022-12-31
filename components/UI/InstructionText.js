import {Text,View, StyleSheet} from 'react-native'
import Colors from '../../constants/colors';

const InstructionText = ({children, style}) => {
    return(
    <View>
        <Text style={[InstructionTextStyle.title, style]}>{children}</Text>
    </View>
    )
  
}

export default InstructionText;

const InstructionTextStyle = StyleSheet.create({
    title:{
        color: Colors.gold,
        fontSize: 24,
        fontFamily: 'popins'
    }
})

