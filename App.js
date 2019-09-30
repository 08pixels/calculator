import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class Calculator extends Component {
  
  constructor(props) {
    super(props);
    this.state = { opened: false, display: ''};
  }

  changeDisplay(currentDisplay, value, opened) {
    if(value == 'C')
      return '';

    if(value == '='){
      if(currentDisplay)
        return eval(currentDisplay.replace(/x/gi, '*'));
      return '';
    }

    if(value == '()') {
      if(opened)
        return currentDisplay + ')';
      return currentDisplay + '(';
    }

    if(value == 'del') {
      if(currentDisplay.length != 0)
        return currentDisplay.substr(0, currentDisplay.length - 1);

      return '';
    }

    return (currentDisplay + value).replace(/\x\x/g, '^');
  }

  customButton(value, currentStyle) {
    return (
      <View style={currentStyle}>
        <TouchableOpacity
          style={styles.containerButton}
          onPress={() => { this.setState({
            display: this.changeDisplay(this.state.display, value, this.state.opened).toString(),
            opened: value == '()' ? !this.state.opened : this.state.opened,
          })}}
        >
          <Text style={styles.text}> {value} </Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.display}>
          <Text style={styles.text}>
              {this.state.display}
          </Text>
        </View>

        <View style={styles.container}>
          { this.customButton('C', styles.darkButton) }
          { this.customButton('()', styles.darkButton) }
          { this.customButton('del', styles.darkButton) }
          { this.customButton('/', styles.darkButton) }
        </View>

        <View style={styles.container}>
          {this.customButton('7', styles.normalButton)}
          {this.customButton('8', styles.normalButton)}
          {this.customButton('9', styles.normalButton)}
          {this.customButton('x', styles.normalButton)}
        </View>

        <View style={styles.container}>
          {this.customButton('4', styles.normalButton)}
          {this.customButton('5', styles.normalButton)}
          {this.customButton('6', styles.normalButton)}
          {this.customButton('-', styles.normalButton)}
        </View>

        <View style={styles.container}>
          {this.customButton('1', styles.normalButton)}
          {this.customButton('2', styles.normalButton)}
          {this.customButton('3', styles.normalButton)}
          {this.customButton('+', styles.normalButton)}
        </View>

        <View style={styles.container}>
          {this.customButton('+/-', styles.normalButton)}
          {this.customButton('0', styles.normalButton)}
          {this.customButton('.', styles.normalButton)}
          {this.customButton('=', styles.highlightButton)}
        </View>
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
  containerButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  normalButton: {
    flex: 1,
    backgroundColor: '#757575',
    borderWidth: 0.5,
  },
  darkButton: {
    flex: 1,
    backgroundColor: '#494949',
    borderWidth: 0.5,
  },
  highlightButton: {
    flex: 1,
    backgroundColor: '#1c313a',
    borderWidth: 0.5,
  },
  display: {
    flex: 4,
    backgroundColor: '#757575',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 35,
    color: '#ccc',
  }
});
