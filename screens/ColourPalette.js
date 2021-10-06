import React from 'react';
import {Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import ColourBox from '../colourBox';

const ColourPalette = ({ route }) => {
    const { colors, paletteName } = route.params

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.exalted}>Hello, Exalted!</Text>
            <Text>The Revolution will be televised.</Text>
            <Text style={styles.pick}>Here are some different colours. Pick a costume colour for the Revolution or join the enemy overlords.</Text>
            <FlatList
            data={colors}
            keyExtractor={item => item.hexCode}
            renderItem={({ item }) => <ColourBox colour={item.colorName} colourCode={item.hexCode} />}
            ListHeaderComponent={<Text>{paletteName}</Text>}
            />
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
  exalted: {
    fontSize: 20,
    marginBottom: 20
  },
  pick: {
    marginVertical: 10,
    fontWeight: 'bold'
  }
})

export default ColourPalette;