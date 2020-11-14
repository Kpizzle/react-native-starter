import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColourCounter from '../components/ColourCounter';

const COLOUR_INCREMENT = 25;

//Reducer Component
//You must always return a value from a reducer
const reducer = (state, action) => {
  switch (action.colorToChange) {
    case 'red':
      return state.red + action.amount > 225 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount };
    case 'green':
      return state.green + action.amount > 225 ||
        state.green + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount };
    case 'blue':
      return state.blue + action.amount > 225 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount };
    case 'default':
      return;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <ColourCounter
        onIncrease={() =>
          dispatch({ colorToChange: 'red', amount: COLOUR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'red', amount: -1 * COLOUR_INCREMENT })
        }
        colour='Red'
      />
      <ColourCounter
        onIncrease={() =>
          dispatch({ colorToChange: 'blue', amount: COLOUR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'blue', amount: -1 * COLOUR_INCREMENT })
        }
        colour='Blue'
      />
      <ColourCounter
        onIncrease={() =>
          dispatch({ colorToChange: 'green', amount: COLOUR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'green', amount: -1 * COLOUR_INCREMENT })
        }
        colour='Green'
      />
      <View
        style={{
          height: 200,
          width: 200,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
