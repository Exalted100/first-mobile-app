import React from 'react'
import {View, Text, SafeAreaView, StyleSheet, FlatList} from 'react-native'
import ColourBox from './colourBox'

const COLORS = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Violet', hexCode: '#6c71c4' },
  { colorName: 'Blue', hexCode: '#268bd2' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' },
]

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.exalted}>Hello, Exalted!</Text>
        <Text>The Revolution will be televised.</Text>
        <Text style={styles.pick}>Here are some different colours. Pick a costume colour for the Revolution or join the enemy overlords.</Text>
        <FlatList
          data={COLORS}
          keyExtractor={item => item.hexCode}
          renderItem={({ item }) => <ColourBox colour={item.colorName} colourCode={item.hexCode} />}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: 'pink',
    padding: 10,
    borderColor: 'red',
    borderWidth: 2,
    textAlign: 'center',
    justifyContent: 'center',
    flex: 1
  },
  safeArea: {
    flex: 1
  },
  exalted: {
    fontSize: 20,
    marginBottom: 20
  },
  pick: {
    marginVertical: 10,
    fontWeight: 'bold'
  }
})

export default App

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <Text>The Revolution shall be televised!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
