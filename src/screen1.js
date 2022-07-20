import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

export default function Screen1() {
    const handleClick = (screenName) => {
        navigation.navigate(screenName);
    }
    return (
        <View>
            <TouchableOpacity
                style={{ backgroundColor: "lightblue", margin: 20, padding: 30 }}
                onPress={() => handleClick("Screen2")}
            >
                <Text>Screen 2</Text>
            </TouchableOpacity>
        </View>
    )
}