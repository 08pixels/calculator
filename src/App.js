import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class Calculator extends Component {
  
  constructor(props) {
    super(props);
    this.state = { opened: false, display: ''};

    this.buttons = [
      ['C', '()', 'del', '/'],
      ['7', '8', '9', 'x'],
      ['4', '5', '6', '-'],
      ['1', '2', '3', '+'],
      ['+/-', '0', '.', '=']
    ]
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

        {
          this.buttons.map(line => (
            <View style={styles.container}>
              { line.map(value => this.customButton(value, styles.normalButton) ) }
            </View>)
          )
        }

        {/* <View style={styles.container}>
          { this.buttons[0].map(value => this.customButton(value, styles.darkButton)) }
        </View>

        <View style={styles.container}>
          { this.buttons[1].map(value => this.customButton(value, styles.normalButton)) }
        </View>

        <View style={styles.container}>
          { this.buttons[2].map(value => this.customButton(value, styles.normalButton)) }
        </View>

        <View style={styles.container}>
          { this.buttons[3].map(value => this.customButton(value, styles.normalButton)) }          
        </View>

        <View style={styles.container}>
          { this.buttons[4].map(value => this.customButton(value, styles.normalButton)) }
        </View> */}
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
