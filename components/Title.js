import { StyleSheet, Text } from "react-native"
import Colors from "../constants/colors";

const Title = ({children}) => {
 return (
    <Text style={titleStyle.title}>{children}</Text>
 )
}

export default Title;

const titleStyle = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.gold,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.gold,
        padding: 12
    }
})