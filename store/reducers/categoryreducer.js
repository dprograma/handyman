import { CATEGORYSECTIONS } from '../../data/dummydata';


const initialstate = {
    categories: CATEGORYSECTIONS
};

const categoriesReducer = (state=initialstate, action)=>{
    return state;
};

export default categoriesReducer;