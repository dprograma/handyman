import { SERVICEINFORMATION } from '../../data/dummydata';
import { DELETE_SERVICE, CREATE_SERVICE, UPDATE_SERVICE, SET_SERVICE } from '../actions/serviceinformationaction';
import ServiceInformation from '../../models/serviceinformation';

const initialstate = {
    userServiceInformation: SERVICEINFORMATION,
    updatedUserServiceInformation: SERVICEINFORMATION
};

const serviceInformationReducer = (state = initialstate, action) => {
    switch (action.type) {
        case SET_SERVICE:
            return{
                userServiceInformation: action.services,
                updatedUserServiceInformation: action.services
            };
        case CREATE_SERVICE:
            const newService = new ServiceInformation(action.serviceData.id, action.serviceData.firstname, action.serviceData.lastname, action.serviceData.phonenumber, action.serviceData.email, action.serviceData.address1, action.serviceData.address2,
            action.serviceData.date, action.serviceData.updateddate
            );
            return {
                ...state, userServiceInformation: state.userServiceInformation.concat(newService)
            };

        case UPDATE_SERVICE:
            const serviceIndex = state.updatedUserServiceInformation.findIndex(service => service.id === action.id);

            const updatedService = new ServiceInformation( state.updatedUserServiceInformation[serviceIndex].id, action.serviceData.firstname, action.serviceData.lastname, action.serviceData.phonenumber, action.serviceData.email, action.serviceData.address1, action.serviceData.address2,
            action.serviceData.date, action.serviceData.updateddate);
            return{
                ...state, updatedUserServiceInformation: updatedService
            };
        case DELETE_SERVICE:
            return{
                ...state, userServiceInformation: state.userServiceInformation.filter(service => service.id !== action.id),
                ...state, updatedUserServiceInformation: state.updatedUserServiceInformation.filter(service => service.id !== action.id)
            };
        default:
            return state;
    }

};

export default serviceInformationReducer;