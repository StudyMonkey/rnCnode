import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import NavigationUtil from '../navigation/NavigationUtil'

export default class IndexPage extends Component{
    render(){
        const { navigation } = this.props;
        return (
            <View style={ styles.indexWrap }>
                <Text>
                    This is collect page
                </Text>
                <Button 
                    title="跳转详情页"
                    onPress={ () => {
                        NavigationUtil.goToPage("DetailPage")
                    }}
                />
                <Button 
                    title="改变主题色"
                    onPress={ () => {
                        navigation.setParams({
                            theme: {
                                tintColor: 'red',
                                updateTime: new Date().getTime()
                            }
                        })
                    } }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    indexWrap: {
        fontSize: 30,
        color: 'gray',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})