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

const HandyManNavigator = createStackNavigator({
    login: {
        screen: Login
    },
    home: {
        screen: Home
    },
    registration: {
        screen: Registration
    },
    services: {
        screen: Services
    },
    serviceinformationform: {
        screen: ServiceInformationForm
    },
    cart: {
        screen: Cart
    },
    checkout: {
        screen: Checkout
    },
    accountandprofile: {
        screen: AccountAndProfile
    }
});

export default createAppContainer(HandyManNavigator);