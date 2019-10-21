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
      resultText: '',
      calculationText: ''
    }
    this.operators = ['D', '+', '-', '*', '/'];
  }
  calculateResult = () => {
    this.setState({
      calculationText: eval(this.state.resultText)
    })
  }
  buttonPressed = (text) => {
    if (text === '=') {
      this.calculateResult()
    } else {
      this.setState({ resultText: this.state.resultText + text })
    }
  }
  operatorCheck = (operator) => {
    switch (operator) {
      case 'D':
        let result = this.state.resultText.split('')
        result.pop()
        this.setState({ resultText: result.join('') })
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        const lastChar = this.state.resultText.split('').pop()
        if (this.operators.indexOf(lastChar) > 0) return
        if (this.state.text == '') return
        this.setState({
          resultText: this.state.resultText + operator
        })

    }

  }
  render() {
    const rows = []
    const nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']]
    for (let i = 0; i < 4; i++) {
      let row = []
      for (let j = 0; j < 3; j++) {
        row.push(
          <TouchableOpacity onPress={() => this.buttonPressed(nums[i][j])} style={styles.btn}>
            <Text style={styles.calculationText}>{nums[i][j]}</Text>
          </TouchableOpacity>)
      }
      rows.push(
        <View style={styles.rows}>
          {row}
        </View>)
    }

    let operatorBtn = [];
    for (let i = 0; i < this.operators.length; i++) {
      operatorBtn.push(
        <TouchableOpacity onPress={() => this.operatorCheck(this.operators[i])} style={styles.btnOperator}>
          <Text style={styles.calculationText} >{this.operators[i]}</Text>
        </TouchableOpacity>)
    }

    return (
      <SafeAreaView style={styles.container} >
        <View style={styles.container}>
          <View style={styles.result}>
            <Text style={styles.resultText}>{this.state.resultText}</Text>
          </View>
          <View style={styles.calculation} >
            <Text style={styles.calculationText}>{this.state.calculationText}</Text>
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
    backgroundColor: '#4d4d4d',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
  },
  btn: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  btnOperator: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.3,
    flex: 1
  },
  resultText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  },
  calculation: {
    flex: 1,
    backgroundColor: '#4d4d4d',
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
    backgroundColor: '#6b6b6b',
  },
  operations: {
    flex: 1,
    backgroundColor: '#ffb901',
    justifyContent: 'space-around',
  }
});
