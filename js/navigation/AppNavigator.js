import {
    createStackNavigator,
    createMaterialTopTabNavigator,
    createBottomTabNavigator,
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation'
import WelcomePage from '../page/WelcomPage'
import HomePage from '../page/HomePage'
import DetailPage from '../page/DetailPage'

const InitNavigator = createStackNavigator({
    WelcomePage: {
        screen: WelcomePage,
        navigationOptions: {
            header: null
        }
    }
})

const MainNavigator = createStackNavigator({
    // 路由配置
    HomePage: {
        screen: HomePage,
    },
    DetailPage: {
        screen: DetailPage,
        navigationOptions: props => {
            const { navigation } = props;
            return {
                headerTitle: navigation.state.params.name
            }
        }
    }
},{
    // 导航器配置
    mode: 'card'
})

// export default createAppContainer(MainNavigator);

export default createAppContainer(
    createSwitchNavigator({
        Init: InitNavigator,
        Main: MainNavigator
    }, {
        navigationOptions: {
            header: null
        }
    })
)