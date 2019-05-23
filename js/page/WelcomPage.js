import React, {Component} from 'react';
import { Text, View, StyleSheet} from 'react-native';

export default class WelcomePage extends Component {

  componentDidMount () {
    this.timer = setTimeout(() => {
        console.log(this.props);
        const { navigation } = this.props;
        navigation.navigate("Main")
    }, 3000)
  }

  componentWillUnmount () {
    this.timer && clearTimeout(this.timer)
  }
  
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.welcomeBox}>
          <Text>This is welcome page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    welcomeBox: {
        alignItems: "center",
        justifyContent: "center",
        fontSize: 40,
        color: "blue",
    }   
})


