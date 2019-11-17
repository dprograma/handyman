import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
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

export default createAppContainer(HandyManNavigator);