import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
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
          props.navigation.navigate('Components');
        }}
        title='Go to components demo'
      />
      <TouchableOpacity onPress={() => console.log('Op pressed')}>
        <Text>Go to list demo</Text>
      </TouchableOpacity>
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
