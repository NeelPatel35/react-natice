import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Screen2() {
    const handleClick = (screenName) => {
        navigation.navigate(screenName);
    }
    return (
        <View>
            <TouchableOpacity
                style={{ backgroundColor: "lightblue", margin: 20, padding: 30 }}
                onPress={() => handleClick("Screen1")}
            >
                <Text>Screen 1</Text>
            </TouchableOpacity>
        </View>
    )
}