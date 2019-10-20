/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <View style={styles.result}></View>
      <View style={styles.calculation} ></View>
      <View style={styles.buttons} >
        <View style={styles.numbers}></View>
        <View style={styles.operations}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  result: {
    flex: 2,
    backgroundColor: 'pink'
  },
  calculation: {
    flex: 1,
    backgroundColor: 'green'
  },
  buttons: {
    flex: 6,
    flexDirection: 'row'
  },
  numbers: {
    flex: 3,
    backgroundColor: 'red',
  },
  operations: {
    flex: 1,
    backgroundColor: 'black'
  }
});

export default App;
