import React, {Component} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  
  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
        <Button onPress={() => Alert.alert('点击了按钮')} title="点我" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue'
  },
  blue: {
    color: 'blue'
  },
  bigBlue: {
    fontSize: 30,
    color: 'blue'
  }
})

