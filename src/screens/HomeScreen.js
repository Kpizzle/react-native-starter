import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const name = 'Kyle';
  const title = <Text style={styles.text}>Learning React Native</Text>;
  const introduction = <Text style={styles.intro}>By Kyle Potter</Text>;

  return (
    <View>
      {title}
      {introduction}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Components');
        }}>
        <Text style={styles.loginText}>Components</Text>
      </TouchableOpacity>
      <Button
        onPress={() => {
          navigation.navigate('List');
        }}
        title='Go to list component'
      />
      <Button
        onPress={() => {
          navigation.navigate('Image');
        }}
        title='Go to Image Screen'
      />
      <Button
        onPress={() => {
          navigation.navigate('Count');
        }}
        title='Go to Counter Screen'
      />
      <Button
        onPress={() => {
          navigation.navigate('Colour');
        }}
        title='Go to Colour Screen'
      />
      <Button
        onPress={() => {
          navigation.navigate('Square');
        }}
        title='Go to Colour Square Screen'
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
  button: {
    marginRight: 100,
    marginLeft: 100,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#1E6738',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },

  loginText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default HomeScreen;
