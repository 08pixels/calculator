import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import CustomButton from './CustomButton';
import calculate from './Calculate';
import color from './Colors';

export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.buttons = [
      ['C', 'del', '^', '/'],
      ['7', '8', '9', 'x'],
      ['4', '5', '6', '-'],
      ['1', '2', '3', '+'],
      ['.', '0', '='],
    ];

    this.state = {
      expr: '',
    };
  }

  update(value) {
    this.setState({
      expr: this.getResult(this.state.expr, value).toString(),
    });
  }

  getResult(expr, value) {
    return calculate(expr, value);
  }

  render() {
    return (
      <View style={styles.main}>
        <StatusBar backgroundColor={color.BLACK} barStyle="light-content" />
        <View style={styles.expr}>
          <Text style={styles.text}> {this.state.expr} </Text>
        </View>

        {this.buttons.map(line => (
          <View key={line.join('')} style={styles.container}>
            {line.map(value => (
              <CustomButton
                key={value}
                value={value}
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
  expr: {
    flex: 4,
    backgroundColor: '#303030',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 35,
    color: '#FFFFFF',
  },
});
