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
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.result}></View>
      <View style={styles.calculation} ></View>
      <View style={styles.buttons} >
        <View style={styles.numbers}>
          <View style={styles.rows} >
            <Button title='1' />
            <Button title='1' />
            <Button title='1' />
          </View>
          <View style={styles.rows} >
            <Button title='1' />
            <Button title='1' />
            <Button title='1' />
          </View>
          <View style={styles.rows} >
            <Button title='1' />
            <Button title='1' />
            <Button title='1' />
          </View>
          <View style={styles.rows} >
            <Button title='1' />
            <Button title='1' />
            <Button title='1' />
          </View>
        </View>
        <View style={styles.operations}>
          <Button title='+' />
          <Button title='-' />
          <Button title='*' />
          <Button title='/' />
        </View>
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
    flexDirection: 'row',
  },
  rows: {
    flexDirection: 'row',
    flex: 1,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    justifyContent: 'space-around',
    alignItems: "center"
  },
  numbers: {
    flex: 3,
    backgroundColor: 'red',
  },
  operations: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'space-around',
  }
});

export default App;
