import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
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

const HandyManNavigator = createStackNavigator({
    login: {
        screen: Login,
        navigationOptions: {
            headerTitle: 'User Login'
        }
    },
    home: {
        screen: Home,
        navigationOptions: {
            headerTitle: 'Artisan Categories'
        }
    },
    registration: {
        screen: Registration,
        navigationOptions: {
            headerTitle: 'User Registration'
        }
    },
    services: {
        screen: Services
    },
    serviceinformationform: {
        screen: ServiceInformationForm,
        navigationOptions: {
            headerTitle: 'Serive Information Form'
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
    Editprofile: {
        screen: EditProfile,
        navigationOptions: {
            headerTitle: 'Edit profile'
        }
    },
    Ourservices: {
        screen: OurServices,
        navigationOptions: {
            headerTitle: 'Our Services'
        }
    },
    helpScreen: {
        screen: HelpScreen,
        navigationOptions: {
            headerTitle: 'Help'
        }
    },
    freeServices: {
        screen: FreeServices,
        navigationOptions: {
            headerTitle: 'Free Services'
        }
    },
    settingsScreen: {
        screen: SettingsScreen,
        navigationOptions: {
            headerTitle: 'Settings'
        }
    },
    legalScreen: {
        screen: LegalScreen,
        navigationOptions: {
            headerTitle: 'Legal'
        }
    },
},
{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    }
}
);

const MainNavigator = createDrawerNavigator({
    HomePage: {
        screen: HandyManNavigator,
        navigationOptions:{
            drawerLabel: 'Home'
        }
    },
    Editprofile: {
        screen: EditProfile,
        navigationOptions: {
            drawerLabel: 'Edit profile'
        }
    },
    Ourservices: {
        screen: OurServices,
        navigationOptions: {
            drawerLabel: 'Our Services'
        }
    },
    helpScreen: {
        screen: HelpScreen,
        navigationOptions: {
            drawerLabel: 'Help'
        }
    },
    freeServices: {
        screen: FreeServices,
        navigationOptions: {
            drawerLabel: 'Free Services'
        }
    },
    settingsScreen: {
        screen: SettingsScreen,
        navigationOptions: {
            drawerLabel: 'Settings'
        }
    },
    legalScreen: {
        screen: LegalScreen,
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
});

export default createAppContainer(MainNavigator);