import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColourCounter from '../components/ColourCounter';

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const COLOUR_INCREMENT = 25;

  const setColour = (colour, change) => {
    //colour === 'red', 'green' or 'blue'
    //change = plus/minus COLOUR_INCREMENT

    switch (colour) {
      case 'red':
        red + change > 225 || red + change < 0 ? null : setRed(red + change);
        return;
      case 'blue':
        blue + change > 225 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      case 'green':
        green + change > 225 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
    }
  };

  return (
    <View>
      <ColourCounter
        onIncrease={() => setColour('red', COLOUR_INCREMENT)}
        onDecrease={() => setColour('red', -1 * COLOUR_INCREMENT)}
        colour='Red'
      />
      <ColourCounter
        onIncrease={() => setColour('blue', COLOUR_INCREMENT)}
        onDecrease={() => setColour('blue', -1 * COLOUR_INCREMENT)}
        colour='Blue'
      />
      <ColourCounter
        onIncrease={() => setColour('green', COLOUR_INCREMENT)}
        onDecrease={() => setColour('green', -1 * COLOUR_INCREMENT)}
        colour='Green'
      />
      <View
        style={{
          height: 200,
          width: 200,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
