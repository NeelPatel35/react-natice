import React, { useState } from 'react'
import { View, Text, StatusBar, StyleSheet, Button, TouchableOpacity } from 'react-native'

// import {customStyle} from './style';

export default function App() {
  const [counter, setcounter] = useState(0)

  const increment = () => {
    setcounter(counter + 1)
  }
  const decrement = () => {
    if(counter >0){
      setcounter(counter - 1)
    }
  }
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={decrement}>
        <View style={style.customBtn}>
          <Text style={style.text}>-</Text>
        </View>
      </TouchableOpacity>

      <Text style={{ fontSize: 50 }}>{counter}</Text>

      <TouchableOpacity onPress={increment}>
        <View style={style.customBtn}>
          <Text style={style.text}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  customBtn: {
    border: "2px solid black",
    backgroundColor: "white",
    color: "white",
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  },
  text: {
    color: "red",
  }
})




















// export default function App() {
//   return (
//     <View style={{ flex: 1 }}>
//       {/* TO SHOW ALL PROPERTY OF STATUSBAR TO PRESS CTR+SPACE */}
//       <StatusBar backgroundColor={"red"} />
//       {/* <StatusBar hidden={true} backgroundColor={"red"} /> */}
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <Text style={{ fontSize: 20, fontWeight: "bold", color: "red" }}>Hello </Text>
//       </View>
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <Text>World!</Text>
//       </View>
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <Text>Awesome</Text>
//       </View>
//     </View>
//   )
// }