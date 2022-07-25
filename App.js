import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Profile"
//         onPress={() =>
//           navigation.navigate('Profile', { name: 'Custom profile header' })
//         }
//       />
//     </View>
//   );
// }
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() =>
          navigation.setOptions({ title: "Updated!!" })
        }
      />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
// function StackScreen() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           title: 'My home...',
//           headerStyle: {
//             backgroundColor: '#f4511e',
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      // source={require('@expo/snack-static/react-native-logo.png')}
    />
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: '#fff',
      }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          // options={{
          //   title: 'My home...',
          // }}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}

        />
        {/* <Stack.Screen
          name="Home"
          component={StackScreen}
          options={{ title: false }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          // options={({ route }) => ({ title: route.params.name })}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
