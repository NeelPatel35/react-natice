import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import {customStyle} from './style';

export default function App() {
  return (
    <View style={customStyle.mainContainer}>
      <StatusBar backgroundColor={"red"} />
      <Text style={customStyle.text} >Neel</Text>
      <View style={customStyle.shap}>
        <Text>Hello ):( </Text>
      </View>
    </View>
  )
}






















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