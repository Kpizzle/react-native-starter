import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const name = 'Kyle';
  const title = (
    <Text style={styles.text}>Getting started with react native!</Text>
  );
  const introduction = <Text style={styles.intro}>My Name is {name}</Text>;

  return (
    <View>
      {title}
      {introduction}
      <Button
        onPress={() => {
          navigation.navigate('Components');
        }}
        title='Go to components demo'
      />
      <Button
        onPress={() => {
          navigation.navigate('List');
        }}
        title='Go to list component'
      />
      <Button
        onPress={() => {
          navigation.navigate('Screen');
        }}
        title='Go to Image Screen'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
  },
  intro: {
    fontSize: 15,
  },
});

export default HomeScreen;
