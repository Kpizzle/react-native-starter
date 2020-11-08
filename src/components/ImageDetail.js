import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({imagePath, title, score}) => {
  return (
    <View>
      <Image source={imagePath} />
      <Text>{title}</Text>
      <Text>Image Score: {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
