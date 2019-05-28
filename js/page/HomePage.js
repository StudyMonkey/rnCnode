import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
import {
    createAppContainer,
    createBottomTabNavigator
} from 'react-navigation'
import IndexPage from './IndexPage'
import CollectPage from './CollectPage'
import MyPage from './MyPage'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import NavigationUtil from '../navigation/NavigationUtil';
// import { BottomTabBar } from 'react-navigation-tabs';

const TABS = {
    IndexPage: {
        screen: IndexPage,
        navigationOptions: {
            tabBarLabel: "首页",
            tabBarIcon: ({tintColor, focused}) => (
                <FontAwesome 
                    name={'home'} 
                    size={26} 
                    style={{color: tintColor}} 
                />
            )
        }
    },
    CollectPage: {
        screen: CollectPage,
        navigationOptions: {
            tabBarLabel: '收藏',
            tabBarIcon: ({tintColor, focused}) => (
                <FontAwesome 
                    name={'heart'} 
                    size={26} 
                    style={{color: tintColor}} 
                />
            )
        }                            
    },
    MyPage: {
        screen: MyPage,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor, focused}) => (
                <FontAwesome 
                    name={'user'} 
                    size={26} 
                    style={{color: tintColor}} 
                />
            )                                
        }                            
    }
}

export default class HomePage extends Component {

    constructor(props){
        super(props);
        console.disableYellowBox = true;
    }

    _genBottomTabs = () => {
        const { IndexPage, CollectPage, MyPage } = TABS;
        const tabs = { IndexPage, CollectPage, MyPage };
        return createAppContainer(
            createBottomTabNavigator(tabs, {
                tabBarComponent: TabBarComponent
            })
        )
    }

    render () {
        NavigationUtil.navigation = this.props;
        const Tabs = this._genBottomTabs();
        
        return <Tabs />
    }
}

/* class TabBarComponent extends React.Component{

    constructor(props){
        super(props);
        this.theme = {
            tintColor: props.activeTintColor,
            updateTime: new Date().getTime()
        }
    }

    render(){
        const { routes, index } = this.props.navigation.state;
        if ( routes[index].params ) {
            const { theme } = routes[index].params;
            if ( theme && theme.updateTime > this.theme.updateTime ) {
                this.theme = theme;
            }
        }
        return (
            <BottomTabBar 
                {...this.props} 
                activeTintColor={ this.theme.tintColor || this.props.activeTintColor } 
            />
        )
    }
} */

const styles = StyleSheet.create({
    homeBox: {
        fontSize: 30,
        alignItems: "center"
    }
})

