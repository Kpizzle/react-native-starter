import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = () => {
  const title = <Text style={styles.text}>Components</Text>;
  const introduction = (
    <Text style={styles.intro}>Welcome to the new screen!</Text>
  );
  return (
    <View>
      {title}
      {introduction}
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
