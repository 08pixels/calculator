import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class CustomButton extends Component {
  render() {
    return (
      <View style={[styles.button, {backgroundColor: this.props.color}]}>
        <TouchableOpacity style={styles.container} onPress={this.props.update}>
          <Text style={styles.text}> {this.props.value} </Text>
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
    borderWidth: 0.5,
  },
  text: {
    fontSize: 35,
    color: '#ccc',
  },
});
