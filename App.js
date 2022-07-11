import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, BackHandler } from 'react-native'

export default function App() {
  const [inputBoxValue, setInputBoxValue] = useState("");

  const inutboxChagne = (value) => {
setInputBoxValue(value)
  }

  return (
    <View style={style.mainContainer}>
      <Text>Hello</Text>
      <TextInput style={style.inputBox} value={inputBoxValue} onChangeText={(value)=>{inutboxChagne(value)}} />
      <View style={style.outputView}>
        <Text>{inputBoxValue}</Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  outputView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputBox: {
    borderWidth: 2,
    borderColor: "black",
    margin: 10,
    padding: 2,
    width: "90vw"
  }
})