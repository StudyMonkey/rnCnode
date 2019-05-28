import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createAppContainer,createMaterialTopTabNavigator } from 'react-navigation';
import NavigationUtil from '../navigation/NavigationUtil'

export default class IndexPage extends Component{

/*     Tab1: {
        screen: IndexTabs,
        navigationOptions: {
            title: '按钮1'
        }
    },
    Tab2: {
        screen: IndexTabs,
        navigationOptions: {
            title: '按钮2'
        }
    } */

    constructor(props) {
        super(props);
        this.tabsName = ['Ios', 'Android', 'Vue', 'React', 'NodeJs', 'Angular', 'Python'];
    }


    _indexTabs = () => {
        const tabs = {}
        this.tabsName.forEach( (item,index) => {
            tabs[`Tab${index}`] = {
                screen: props => <IndexTabs {...props} tabName={item} />,
                navigationOptions: {
                    title: item
                }
            }
        })
        return tabs
    }

    render(){
        const { navigation } = this.props;
        const IndexTabNavigator = createAppContainer(
            // 头部的 tab 切换
            createMaterialTopTabNavigator(this._indexTabs(), {
                tabBarOptions: {
                    upperCaseLabel: false, // 是否需要大写，默认大写
                    scrollEnabled: true, // 允许导航栏滚动
                    style: { // 设置头部 tab 的背景颜色
                        backgroundColor: 'red'
                    },
                    indicatorStyle: {
                        height: 2,
                        backgroundColor: "#fff"
                    },
                    labelStyle: {
                        fontSize: 20,
                        marginTop: 4
                    }
                }
            })
        )
        return (
            <View style={ {flex: 1} }>           
                <IndexTabNavigator />
            </View>
        )
    }
}

class IndexTabs extends Component {
    render(){
        return (
            <View>
                <Text>{this.props.tabName}</Text>
                <Button 
                    title={"detail"}
                    onPress={ () => {
                        NavigationUtil.goToPage("DetailPage");
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    indexWrap: {
        fontSize: 30,
        color: 'yellow',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})