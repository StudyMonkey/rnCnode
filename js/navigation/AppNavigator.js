import { 
    createStackNavigator, 
    createAppContainer,
    createSwitchNavigator 
} from 'react-navigation';
// 引入redux
import { connect } from 'react-redux';
import { 
    createReactNavigationReduxMiddleware,
    createReduxContainer 
} from 'react-navigation-redux-helpers';
import WelcomePage from '../page/WelcomPage'
import HomePage from '../page/HomePage'
import DetailPage from '../page/DetailPage'
import Register from '../page/Register'

export const rootCom = "Init"; // 设置根路由

const InitNavigation = createStackNavigator({
    WelcomePage: {
        screen: WelcomePage,
        navigationOptions: {
            header: null
        }
    }
})

const MainNavigation = createStackNavigator({
    HomePage: {
        screen: HomePage,
        navigationOptions: {
            headerTitle: null
        }
    },
    DetailPage: {
        screen: DetailPage,
        navigationOptions: {
            headerTitle: '详情页'
        }
    },
    Register: {
        screen: Register,
        navigationOptions: {
            headerTitle: '注册'
        }
    }
})

// export default createAppContainer(MainNavigation);

export const RootNavigator = createAppContainer(
    createSwitchNavigator({
        Init: InitNavigation,
        Main: MainNavigation
    })
)

export const middleware = createReactNavigationReduxMiddleware(
    state => state.nav,
    "root"
)

// root 是一个 key
const AppWithNavigationState = createReduxContainer(RootNavigator, 'root');

// state 到 props 的映射关系
const mapStateToProps = state => {
    return {
        state: state.nav
    }
}

// 使用Redux 的 connect 函数再封装一个高阶组件，连接React 组件与 Redux Store
export default connect(mapStateToProps)(AppWithNavigationState);