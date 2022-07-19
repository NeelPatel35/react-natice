import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, BackHandler, ScrollView, TouchableOpacity, FlatList } from 'react-native'

export default function App() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "A"
    },
    {
      id: 2,
      name: "B"
    },
    {
      id: 3,
      name: "C"
    },
    {
      id: 4,
      name: "D"
    },
    {
      id: 5,
      name: "E"
    },
    {
      id: 6,
      name: "F"
    },
    {
      id: 7,
      name: "G"
    },
    {
      id: 8,
      name: "H"
    },
  ]);

  const handleClick = (id) => {
    setData((prevData)=>{
      return prevData.filter((tempData)=>{
        if(tempData.id != id){
          return tempData
        }
      })
    })
  }

  return (
    <View style={style.mainContainer}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => handleClick(item.id)}>
              <Text style={style.customText} >
                {item.name}
              </Text>
            </TouchableOpacity>
          )
        }}
      // numColumns={2}
      />


      {/* <ScrollView>
      {
        data.map((listData, index) => {
          return (
            <View key={index}>
              <Text style={style.customText}>
                {listData.name}
              </Text>
            </View>
          )
        })
      }
      </ScrollView> */}
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
  customText: {
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    margin: 10,
    borderRadius: 5,
    padding: 4,
    fontSize: 30,



  },
  inputBox: {
    borderWidth: 2,
    borderColor: "black",
    margin: 10,
    padding: 2,
    width: "90vw"
  }
})