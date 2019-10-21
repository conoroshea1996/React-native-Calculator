/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { setState } from 'expect/build/jestMatchersObject';

buttonPressed = (text) => {
}
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      resultText: ''
    }
  }
  render() {
    const rows = []
    const nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']]
    for (let i = 0; i < 4; i++) {
      let row = []
      for (let j = 0; j < 3; j++) {
        row.push(
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.calculationText}>{nums[i][j]}</Text>
          </TouchableOpacity>)
      }
      rows.push(
        <View style={styles.rows}>
          {row}
        </View>)
    }
    const operators = ['+', '-', '*', '/'];
    let operatorBtn = [];
    for (let i = 0; i < operators.length; i++) {
      operatorBtn.push(
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.calculationText} >{operators[i]}</Text>
        </TouchableOpacity>)
    }

    return (
      <SafeAreaView style={styles.container} >
        <View style={styles.container}>
          <View style={styles.result}>
            <Text style={styles.resultText}>{this.state.resultText}</Text>
          </View>
          <View style={styles.calculation} >
            <Text style={styles.calculationText}>200 + 200</Text>
          </View>
          <View style={styles.buttons} >
            <View style={styles.numbers}>
              {rows}
            </View>
            <View style={styles.operations}>
              {operatorBtn}
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  result: {
    flex: 2,
    backgroundColor: 'pink',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
  },
  btn: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.2,
    borderColor: '#BEBEBE',
    borderBottomWidth: 0,
    flex: 1
  },
  resultText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  },
  calculation: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'flex-end',
    paddingHorizontal: 10
  },
  calculationText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  },
  buttons: {
    flex: 6,
    flexDirection: 'row',
  },
  rows: {
    flexDirection: 'row',
    flex: 1,
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
