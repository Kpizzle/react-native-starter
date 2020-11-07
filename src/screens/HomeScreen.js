import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = () => {
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
          console.log('button pressed');
        }}
        title='Go to components demo'
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
