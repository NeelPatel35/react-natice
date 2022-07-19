import React, { useEffect, useState } from 'react'
import { View, Text, Image, TextInput, StyleSheet, BackHandler, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import { photosUrl } from './src/utils/url'
import Axios from 'axios';

export default function App() {
  const [postData, setPostData] = useState([])
  useEffect(() => {
    fetchApiData();
  }, []);

  const fetchApiData = async () => {
    try {
      const response = await Axios.get(photosUrl);
      setPostData(response.data)
      // console.log("response",response.data)
    } catch (error) {
      console.log(error, "get error")
    }
  }


  return (
    <View style={style.container}>
      <ScrollView style={style.scrollViewStyle}>
        {
          postData.map((list, index) => {
            return (
              <View style={style.cardContainer} key={index}>
                <Image source={{ uri: list.url }} style={style.cardImage} />
                <Text style={style.cardTextTitle}>
                  {list.title}
                </Text>
              </View>
            )
          })
        }
      </ScrollView>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  scrollViewStyle: {

  },
  cardContainer: {
    width: "98%",
    margin:2,
    // backgroundColor: 'lightblue',
    marginVertical: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  cardImage: {
    height: 250,
    width: "100%",
    borderRadius: 25,
  },
  cardTextTitle: {
    marginVertical: 10,
    textAlign: "center",

  },
  inputBox: {
    borderWidth: 2,
    borderColor: "black",
    margin: 10,
    padding: 2,
    width: "90vw"
  }
})