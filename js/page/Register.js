import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'

export default class Register extends Component{
    render(){
        const { navigation } = this.props;
        return(
            <View style={ styles.registerBox }>
                <Text> This is register page</Text>
                <Button
                    title="返回首页"
                    onPress={ () => {
                        navigation.navigate("HomePage")
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    registerBox: {
        alignItems: "center",
        justifyContent: "center",
        fontSize: 40,
        color: "blue"
    }
})