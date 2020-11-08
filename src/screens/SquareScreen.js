import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColourCounter from '../components/ColourCounter';

const SquareScreen = () => {

  // const [state]

  return (
    <View>
      <ColourCounter onIncrease={() => {}} onDecrease={() => {}} colour='Red' />
      <ColourCounter
        onIncrease={() => {}}
        onDecrease={() => {}}
        colour='Blue'
      />
      <ColourCounter
        onIncrease={() => {}}
        onDecrease={() => {}}
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
