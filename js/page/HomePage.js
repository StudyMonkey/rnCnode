import React, {Component} from 'react';
import { Text, View, StyleSheet, Button} from 'react-native';

export default class HomePage extends Component {
  
  render() {
    const { navigation } = this.props;
    return (
      <View style={{alignItems: 'center',color: 'red'}}>
          <Text>This is home page</Text>
          <Button 
            title="go to detail" 
            onPress={() => {
                navigation.navigate("DetailPage", {
                    name: 'test'
                })}
            } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    homeBox: {
        alignItems: "center",
        justifyContent: "center",
        fontSize: 40,
        color: "red"
    }
})


