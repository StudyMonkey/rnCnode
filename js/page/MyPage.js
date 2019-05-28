import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class IndexPage extends Component{
    render(){
        const { navigation } = this.props;
        return (
            <View style={ styles.indexWrap }>
                <Text>
                    This is my page
                </Text>
                <Button 
                    title="跳转详情页"
                    onPress={ () => {
                        navigation.navigate("DetailPage")
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    indexWrap: {
        fontSize: 30,
        color: 'blue',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})