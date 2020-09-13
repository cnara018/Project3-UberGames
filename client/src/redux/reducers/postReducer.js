import * as ActionTypes from "../actions/types";

const initialState = {
    isLoading:true,
    errMess:null,
    posts:[]
};
export default function(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.ADD_PROPERTIES:
            return {
                ...state,
                isLoading: false,
                errMess: null,
                posts: action.payload
            };

        case ActionTypes.ADD_PROPERTY:
            return {
                ...state,
                isLoading: false,
                errMess: null,
                posts: [
                    ...state.posts,
                    action.payload
                ]
            };
        case ActionTypes.PROPERTY_LOADING:
            return {
                ...state,
                isLoading: true,
                errMess: null,
                posts: []
            };
        case ActionTypes.PROPERTY_ERROR:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload,
                posts: []
            };
        default:
            return state;
    }
}