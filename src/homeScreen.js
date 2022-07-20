import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function HomeScreen({ navigation }) {

    const handleClick = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View>
                <TouchableOpacity
                    style={{ backgroundColor: "lightblue", margin: 20, padding: 30 }}
                    onPress={() => handleClick("Screen1")}
                >
                    <Text>Screen 1</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    style={{ backgroundColor: "lightblue", margin: 20, padding: 30 }}
                    onPress={() => handleClick("Screen2")}
                >
                    <Text>Screen 2</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
