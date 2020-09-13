import * as ActionTypes from "../actions/types";

const initialState = {
    isLoading:true,
    errMess:null,
    myPosts:[]
};
export default function(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.ADD_MY_PROPERTIES:
            return {
                ...state,
                isLoading: false,
                errMess: null,
                myPosts: action.payload
            };

        case ActionTypes.MY_PROPERTIES_LOADING:
            return {
                ...state,
                isLoading: true,
                errMess: null,
                myPosts: []
            };
        case ActionTypes.MY_PROPERTIES_FAILED:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload,
                myPosts: []
            };

        case ActionTypes.REMOVE_MY_PROPERTY:
            return{
                ...state,
                myPosts: state.myPosts.filter(prop => prop._id !== action.payload )
            };
        default:
            return state;
    }
}