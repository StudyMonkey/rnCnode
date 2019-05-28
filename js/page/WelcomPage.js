import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import NavigationUtil from '../navigation/NavigationUtil'

export default class WelcomePage extends Component{

    constructor(props){
        super(props);
        console.disableYellowBox = true;
    }

    componentDidMount(){
        this.timer = setTimeout ( () => {
            NavigationUtil.resetToHomePage(this.props);
        }, 200)
    }

    componentWillUnmount(){
        this.timer && clearTimeout(this.timer)
    }

    render(){
        return (
            <View style={ styles.welcomeWrap }>
                <Text style={ styles.welcomeWord }>
                    Welcome to RN
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    welcomeWrap: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    welcomeWord: {
        color: "red",
        fontSize: 40
    }
})


