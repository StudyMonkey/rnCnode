import { combineReducers } from 'redux';
// import theme from './theme';
import { rootCom, RootNavigator } from '../navigation/AppNavigator';

// 指定默认state
const navState = RootNavigator.router.getStateForAction(
    RootNavigator.router.getActionForPathAndParams(rootCom)
)

// 创建自己的 navigation reducer
const navReducer = (state = navState, action) => {
    const nextState = RootNavigator.router.getStateForAction(action, state);
    return nextState || state
}

// 合并 Reducer
const index = combineReducers({
    nav: navReducer,
    // theme: theme
})

export default index;