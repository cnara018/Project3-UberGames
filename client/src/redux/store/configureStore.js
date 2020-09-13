import { createStore, combineReducers, applyMiddleware,compose } from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {InitialFeedback, ContactForm} from "../forms/forms";
import authReducer from "../reducers/authReducers";
import postReducer from '../reducers/postReducer';
import recentPostsReducer from '../reducers/recentPostsReducer';
import myPostReducer from "../reducers/myPostReducer";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            auth: authReducer,
            posts:postReducer,
            recent:recentPostsReducer,
            myPosts: myPostReducer,
            ...createForms({
                addPost: InitialFeedback,
                contact: ContactForm
            })
        }),
        compose(
            applyMiddleware(thunk, logger)
        )
    );
    return store
};