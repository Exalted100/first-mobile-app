import React from 'react'
import {View, Text, SafeAreaView, StyleSheet} from 'react-native'

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.exalted}>Hello, Exalted!</Text>
        <Text>The Revolution will be televised.</Text>
        <Text style={styles.pick}>Here are some different colours. Pick a costume colour for the Revolution or join the enemy overlords.</Text>
        <Text style={[styles.colourContainer, styles.cyan]}>Cyan #2aa198</Text>
        <Text style={styles.colourContainer, styles.blue}>Blue #268bd2</Text>
        <Text style={styles.colourContainer, styles.magenta}>Magenta #d33682</Text>
        <Text style={styles.colourContainer, styles.orange}>Orange #cb4b16</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  safeArea: {
    flex: 2
  },
  exalted: {
    fontSize: 20,
    marginBottom: 20
  },
  pick: {
    margin: 10,
    fontWeight: 'bold'
  },
  colourContainer: {
    paddingVertical: 10,
    margin: 5,
    color: 'white',
    fontWeight: 'bold'
  },
  cyan: {
    paddingHorizontal: 137,
    backgroundColor: '#2aa198',
  },
  blue: {
    paddingHorizontal: 137,
    backgroundColor: '#268bd2',
  },
  magenta: {
    paddingHorizontal: 124,
    backgroundColor: '#d33682',
  },
  orange: {
    paddingHorizontal: 129,
    backgroundColor: '#cb4b16',
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
