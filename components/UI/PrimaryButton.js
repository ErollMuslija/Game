import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const PrimaryButton = ({children, onPress}) => {
    return (
    <View style={PrimaryButtonStyle.buttonOutercontainer}>
        <Pressable
        onPress={onPress}
        style={({pressed}) => pressed ? [PrimaryButtonStyle.buttonInerContainer, PrimaryButtonStyle.pressed] : PrimaryButtonStyle.buttonInerContainer} android_ripple={{color: '#640233'}}>
                <Text style={PrimaryButtonStyle.buttonText}>{children}</Text>
        </Pressable>
    </View>
    )
}

export default PrimaryButton;

const PrimaryButtonStyle = StyleSheet.create({
    buttonOutercontainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInerContainer:{
        backgroundColor: Colors.primaryPurple,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,

    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed:{
        opacity: 0.75
    }
})