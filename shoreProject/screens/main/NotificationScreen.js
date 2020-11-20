import React from "react";
import { View, StyleSheet, Text, Dimensions, StatusBar } from "react-native";
import { TabView, SceneMap } from 'react-native-tab-view';

export default function App() {
  // เพิ่มโค้ดส่วนนี้
  return(
    <View style={styles.screen}>
      <Text>notification</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
      backgroundColor: '#EDF5FA',
      flex: 1,
      padding: 20,
      paddingTop: 20,
  },
});

// const FirstRoute = () => (
//   <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
// );

// const SecondRoute = () => (
//   <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
// );

// const initialLayout = { width: Dimensions.get('window').width };

// export default function TabViewExample() {
//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     { key: 'first', title: 'First' },
//     { key: 'second', title: 'Second' },
//   ]);

//   const renderScene = SceneMap({
//     first: FirstRoute,
//     second: SecondRoute,
//   });

//   return (
//     <TabView
//       navigationState={{ index, routes }}
//       renderScene={renderScene}
//       onIndexChange={setIndex}
//       initialLayout={initialLayout}
//       style={styles.container}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     marginTop: StatusBar.currentHeight,
//   },
//   scene: {
//     flex: 1,
//   },
// });