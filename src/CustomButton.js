import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import color from './Colors';

function selectStyleButton(value) {
  switch (value) {
    case '=':
      return {
        ...styles.button,
        flex: 2,
        backgroundColor: color.ORANGE,
      };
    default:
      return styles.button;
  }
}

function selectTextColor(value) {
  switch (value) {
    case 'C':
      return {...styles.text, color: color.ORANGE};
    case '=':
      return {...styles.text, color: color.BLACK};
    default:
      return styles.text;
  }
}

export default class CustomButton extends Component {
  render() {
    return (
      <View style={selectStyleButton(this.props.value)}>
        <TouchableOpacity style={styles.container} onPress={this.props.update}>
          <Text style={selectTextColor(this.props.value)}>
            {this.props.value}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    backgroundColor: color.BLACK,
    borderWidth: 0.5,
  },
  text: {
    fontSize: 30,
    color: color.WHITE,
  },
});
