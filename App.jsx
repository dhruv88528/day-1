// // import React from 'react';
// // import { NavigationContainer } from '@react-navigation/native';
// // import StackNavigator from './navigation/StackNavigator';

// // export default function App() {
// //   return (
// //     <NavigationContainer>
// //       <StackNavigator />
// //     </NavigationContainer>
// //   );
// // }

// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import BottomTab from "./navigation/BottomTab";
// import ProfileDetail from "./screens/ProfileDetail"; // Example extra screen

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         {/* Bottom tabs ke andar jo 4 tabs hain (Home, Library, etc.) */}
//         <Stack.Screen
//           name="Main"
//           component={BottomTab}
//           options={{ headerShown: false }}
//         />

//         {/* Stack ke extra screens */}
//         <Stack.Screen
//           name="ProfileDetail"
//           component={ProfileDetail}
//           options={{ title: "Profile Details" }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./navigation/BottomTab";

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
}

