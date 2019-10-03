import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomButton from './CustomButton';
import calculate from './Calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.buttons = [
      ['C', '()', 'del', '/'],
      ['7', '8', '9', 'x'],
      ['4', '5', '6', '-'],
      ['1', '2', '3', '+'],
      ['+/-', '0', '.', '='],
    ];

    this.state = {
      display: '',
      parenthesis: [],
    };
  }

  update(value) {
    this.setState({
      display: this.getResult(this.state.display, value).toString(),
    });
  }

  getResult(expr, value) {
    return calculate(expr, value);
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.display}>
          <Text style={styles.text}> {this.state.display} </Text>
        </View>

        {this.buttons.map(line => (
          <View key={line.join('')} style={styles.container}>
            {line.map(value => (
              <CustomButton
                key={value}
                value={value}
                color="#757575"
                update={() => this.update(value)}
              />
            ))}
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  display: {
    flex: 4,
    backgroundColor: '#757575',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 35,
    color: '#fff',
  },
});
