export default class NavigationUtil {

    static goToPage(page){
        console.log(NavigationUtil.navigation);
        const { navigation } = NavigationUtil.navigation;
        navigation.navigate(page)
    }

    static resetToHomePage(params){
        const { navigation } = params;
        navigation.navigate("Main")
    }
}