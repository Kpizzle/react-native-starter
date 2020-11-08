import React, { useState } from 'react';
import { Button } from 'react-native';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  const [savedCount, setSavedCount] = useState([]);
  console.log(savedCount)

  return (
    <View>
      <Button
        title='Increase'
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title='Decrease'
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text>Current Count: {counter} </Text>

      <View>
        <Button
          title='Reset'
          onPress={() => {
            setCounter(0);
          }}
        />
        <Button
          title='Save Count'
          onPress={() => {
          setSavedCount([...savedCount, counter])
          }}
        />
      </View>
      <View>
        <FlatList
          keyExtractor={(savedCount) => savedCount.value}
          data={savedCount}
          renderItem={({ item }) => {
            return <Text style={styles.textStyle}>{item.value}</Text>;
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
