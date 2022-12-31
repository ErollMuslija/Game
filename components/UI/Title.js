import { StyleSheet, Text } from "react-native"

const Title = ({children}) => {
 return (
    <Text style={titleStyle.title}>{children}</Text>
 )
}

export default Title;

const titleStyle = StyleSheet.create({
    title: {
        fontFamily: 'popins',
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12
    }
})