import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class DetailPage extends Component {
    render(){
        const { navigation } = this.props;
        return (
            <View>
                <Text>This is detail page</Text>
                <Button
                    title="go to register"
                    onPress={ () => {
                        navigation.navigate("Register")
                    }}
                />
            </View>
        )       
    }
}


