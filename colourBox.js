import React from 'react'
import {Text, StyleSheet} from 'react-native'

const ColourBox = (props) => {
    const colourStyle = {
        backgroundColor: props.colourCode,
      }

    const textStyle = {
    color:
      parseInt(props.colourCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
    };

    return (
        <Text style={[styles.colourContainer, colourStyle, textStyle]}>{props.colour} {props.colourCode}</Text>
    )
}

const styles = StyleSheet.create({
    colourContainer: {
        textAlign: 'center',
        paddingVertical: 10,
        marginVertical: 5,
        color: 'white',
        fontWeight: 'bold'
      }
})

export default ColourBox