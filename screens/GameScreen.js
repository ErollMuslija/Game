import { Text, View, StyleSheet } from "react-native";
import Title from "../components/Title";

const GameScreen = () => {
    return (
       <View style={GameScreenStyle.screen}>
        <Title>Opponent's Guess</Title>
        <View>
            <Text>Higher or Lower?</Text>
            {/* + - */}
        </View>
        <View>
            {/* LOG ROUND */}
        </View>
       </View>
    )
}

export default GameScreen;

const GameScreenStyle = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 15
    }
})