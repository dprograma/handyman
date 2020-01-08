import { Platform } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../Screen/login';
import Home from '../Screen/home';
import Registration from '../Screen/registration';
import Services from '../Screen/services';
import ServiceInformationForm from '../Screen/Serviceinformationform';
import Cart from '../Screen/cart';
import Checkout from '../Screen/chechout';
import AccountAndProfile from '../Screen/accountandprofile';
import Colors from '../constants/colors';
import OurServices from '../Screen/ourservices';
import HelpScreen from '../Screen/help';
import EditProfile from '../Screen/editprofile';
import FreeServices from '../Screen/freeservices';
import SettingsScreen from '../Screen/settings';
import LegalScreen from '../Screen/legal';
import ServiceOverviewScreen from '../Screen/serviceOverview';

const defaultnavoption = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
};

const HandyManNavigator = createStackNavigator({
    home: {
        screen: Home,
        navigationOptions: {
            headerTitle: 'Artisan Categories'
        }
    },
    services: {
        screen: Services
    },
    serviceinformationform: {
        screen: ServiceInformationForm,
        navigationOptions: {
            headerTitle: 'Service Information Form'
        }
    },
    cart: {
        screen: Cart,
        navigationOptions: {
            headerTitle: 'Cart'
        }
    },
    checkout: {
        screen: Checkout,
        navigationOptions: {
            headerTitle: 'Check Out'
        }
    },
    accountandprofile: {
        screen: AccountAndProfile
    },
},
{
    defaultNavigationOptions: defaultnavoption
},
{
    initialRouteName: 'Home'
}
);

const profileNavigator = createStackNavigator({
    editProfile: {
        screen: EditProfile,
        navigationOptions: {
            headerTitle: 'Edit Profile'
        }
    }
},{
    defaultNavigationOptions: defaultnavoption
});

const servicesNavigator = createStackNavigator({
    ourservice: {
        screen: OurServices,
        navigationOptions: {
            headerTitle: 'Our Services'
        }
    }
},{
    defaultNavigationOptions: defaultnavoption
});

const overviewNavigator = createStackNavigator({
    overview: {
        screen: ServiceOverviewScreen,
        navigationOptions:{
            headerTitle: 'Service Overview'
        }
    }
},{
    defaultNavigationOptions: defaultnavoption
});

const helpNavigator = createStackNavigator({
    helpScreen:{
        screen: HelpScreen,
        navigationOptions: {
            headerTitle: 'Help'
        }
    }
},{
    defaultNavigationOptions: defaultnavoption
});

const freeServiceNavigator = createStackNavigator({
    freeServices: {
        screen: FreeServices,
        navigationOptions: {
            headerTitle: 'Free Services'
        }
    }
},{
    defaultNavigationOptions: defaultnavoption
});

const settingsNavigator = createStackNavigator({
    settingsScreen: {
        screen: SettingsScreen,
        navigationOptions: {
            headerTitle: 'Settings'
        }
    }
},{
    defaultNavigationOptions: defaultnavoption
});

const legalNavigator = createStackNavigator({
    legalScreen: {
        screen: LegalScreen,
        navigationOptions: {
            headerTitle: 'Legal'
        }
    }
},{
    defaultNavigationOptions: defaultnavoption
});

const MainNavigator = createDrawerNavigator({
    HomePage: {
        screen: HandyManNavigator,
        navigationOptions:{
            drawerLabel: 'Home'
        }
    },
    profile: {
        screen: profileNavigator,
        navigationOptions: {
            drawerLabel: 'Edit profile'
        }
    },
    overview: {
        screen: overviewNavigator,
        navigationOptions: {
            drawerLabel: 'Service Overview'
        }
    },
    helpScreen: {
        screen: helpNavigator,
        navigationOptions: {
            drawerLabel: 'Help'
        }
    },
    freeServices: {
        screen: freeServiceNavigator,
        navigationOptions: {
            drawerLabel: 'Free Services'
        }
    },
    settingsScreen: {
        screen: settingsNavigator,
        navigationOptions: {
            drawerLabel: 'Settings'
        }
    },
    legalScreen: {
        screen: legalNavigator,
        navigationOptions: {
            drawerLabel: 'Legal'
        }
    },
},{
    contentOptions: {
        labelStyle: {
            textAlign: 'left',
            fontFamily: 'roboto-bold'
        }
    }
},{
    initialRouteName: 'home'
});

const UserNavigator = createSwitchNavigator({
    login: {
        screen: Login,
        navigationOptions: {
            headerTitle: 'Login'
        }
    },
    registration: {
        screen: Registration,
        navigationOptions: {
            headerTitle: 'Registration'
        }
    },
    //AuthLogin: {screen: Login},
    //AuthReg: {screen: Registration},
    Main: {screen: MainNavigator, navigationOptions: {header: null}}
});

export default createAppContainer(UserNavigator);