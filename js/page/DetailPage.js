import React, {Component} from 'react';
import { Text, View, Button} from 'react-native';

export default class HomePage extends Component {
  
  render() {
    const { navigation } = this.props;
    return (
      <View style={{alignItems: 'center',color: 'yellow'}}>
          <Text>This is detail page</Text>
          <Button title="go to home" onPress={ () => navigation.navigate("HomePage") } />
      </View>
    );
  }
}


