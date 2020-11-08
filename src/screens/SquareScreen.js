import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColourCounter from '../components/ColourCounter'

const SquareScreen = () => {
  return (
    <View>
      <ColourCounter colour='Red' />
      <ColourCounter colour='Blue' />
      <ColourCounter colour='Green' />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;