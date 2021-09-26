import {GET_PEOPLE_SUCCESS,GET_PEOPLE_LOADING,GET_PEOPLE_FAIL} from '../actions/types'

const initState={
    people:[],
    loading:false,
    errors: null
};

const personReducer =(state=initState,action)=>{
    switch (action.type) {
        case GET_PEOPLE_LOADING:
            return{
                ...state,
                loading: true
            }
        case GET_PEOPLE_SUCCESS:
            return{
                ...state,
                loading: false,
                people: action.payload,
                errors: null
            }
        case GET_PEOPLE_FAIL:
            return{
                ...state,
                loading: false,
                errors: action.payload
            }
    
        default:
        return state;
    }

};
export default personReducer;