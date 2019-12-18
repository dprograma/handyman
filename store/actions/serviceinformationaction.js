export const DELETE_SERVICE = 'DELETE_SERVICE';
export const CREATE_SERVICE = 'CREATE_SERVICE';
export const UPDATE_SERVICE = 'UPDATE_SERVICE';
export const SET_SERVICE = 'SET_SERVICE';
import ServiceInformation from '../../models/serviceinformation';

export const fetchService = () => {
    return async dispatch => {
    try {
        const response = await fetch('https://handyman-f61fc.firebaseio.com/serviceinformation.json');

        if (!response.ok) {
            throw new Error('Something went wrong!');
        }

        const resData = await response.json();
        const loadedService = [];
    
        for (const key in resData) {
            loadedService.push(
                new ServiceInformation(
                    key,
                    resData[key].firstname,
                    resData[key].lastname,
                    resData[key].phonenumber,
                    resData[key].email,
                    resData[key].address1,
                    resData[key].address2,
                    resData[key].date,
                    resData[key].updateddate
                ) 
            );
        }
    
            dispatch({ type: SET_SERVICE, services: [] });
    } catch (err) {
        throw err;
    }
      
};
};

export const deleteService = issueId => {
    return{type: DELETE_SERVICE, serviceid: issueId};
};

export const createService = (firstname, lastname, phonenumber, email, address1, address2) => {
    return async dispatch =>{
        const date = new Date();
        const response = await fetch('https://handyman-f61fc.firebaseio.com/serviceinformation.json', {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstname,
                lastname,
                phonenumber,
                email,
                address1,
                address2,
                date: date.toISOString(),
                updateddate: date.toDateString()
            })
        });

        const resData = await response.json();

        dispatch({type: CREATE_SERVICE, serviceData: {
            id: resData.name,
            firstname,
            lastname,
            phonenumber,
            email,
            address1,
            address2,
            date: date,
            date: date,
        }
        });
    };
    
};

export const updateService = (id, firstname, lastname, phonenumber, email, address1, address2) => {
    return async dispatch => {
        const date = new Date();
        await fetch(
            `https://handyman-f61fc.firebaseio.com/serviceinformation/${id}.json`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstname,
                    lastname,
                    phonenumber,
                    email,
                    address1,
                    address2,
                    updateddate: date.toISOString()
                })
            }
        );
        dispatch({type: UPDATE_SERVICE,
            serviceid: id,
            serviceData: {
            firstname,
            lastname,
            phonenumber,
            email,
            address1,
            address2,
            updateddate: date.toISOString()
        }
    });
    };
};

export const deleteProduct = serviceId => {
    return async dispatch => {
        await fetch(
            `https://handyman-f61fc.firebaseio.com/serviceinformation/${serviceId}.json`,
            {
                method: 'DELETE'
            }
        );

        dispatch({
            type: DELETE_SERVICE, pid: serviceId
        });
    };
};
