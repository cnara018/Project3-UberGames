import axios from "axios";
import * as ActionTypes from "./types";
import {getCurrentUser} from "./authActions";

export const addPost = (newPost) => dispatch => {
    axios.post("http://localhost:5000/api/uploads/post",newPost)
        .then((response) => {

            dispatch(addNewPost(response.data));
            dispatch(fetchRecentPosts());
            alert("Post is successfully added");
        }).catch((error) => {
    });
};
export const fetchPosts = ()=>dispatch =>{
    dispatch(postsLoading(true));
    dispatch(getCurrentUser());
    axios.get("http://localhost:5000/api/post/all")
        .then((response) => {
            dispatch(addPosts(response.data));
        }).catch((error) => {
            dispatch(postsFailed(error.message));
    });
};

export const postsLoading = ()=>({
    type: ActionTypes.PROPERTY_LOADING
});
export const postsFailed = (errMess)=>({
    type:ActionTypes.PROPERTY_ERROR,
    payload:errMess
});


export const addNewPost=(post)=>({
    type: ActionTypes.ADD_PROPERTY,
    payload: post
});
export const addPosts=(posts)=>({
    type: ActionTypes.ADD_PROPERTIES,
    payload: posts
});

export const fetchRecentPosts = ()=> dispatch =>{
    dispatch(recentPostsLoading(true));
    dispatch(getCurrentUser());
    axios.get("http://localhost:5000/api/post/recent")
        .then((response) => {
            dispatch(addRecentPosts(response.data));
        }).catch((error) => {
        dispatch(recentPostsFailed(error.message));
    });
};

export const recentPostsLoading = ()=>({
    type: ActionTypes.RECENT_LOADING
});
export const recentPostsFailed = (errMess)=>({
    type:ActionTypes.RECENT_FAILED,
    payload:errMess
});


export const addRecentPosts=(post)=>({
    type: ActionTypes.ADD_RECENT,
    payload: post
});

export const addImageToServer= ( image ) => dispatch =>{
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };
    axios.post("http://localhost:5000/api/uploads/image",image,config)
        .then((response) => {
            console.log('Images Uploaded')
        }).catch((error) => {
    });
};

export const sendEmailToOwner = (data)=> dispatch =>{
    axios.post("http://localhost:5000/api/post/contact",data)
        .then((response) => {
            alert('Email Sent :D');
        }).catch((error) => {
            console.log(error);
    });
};
export const fetchMyPosts = (email)=> dispatch => {
    dispatch(myPostsLoading(true));
    axios
        .get(`http://localhost:5000/api/post/my/${email}`)
        .then(res => {
            if (res.status === 200){
                dispatch(addMyPosts(res.data));
            }

        })
        .catch(err => {
            dispatch(myPostsFailed(err.message));
        });
};
export const removePost=(id)=>dispatch=>{
    axios
        .delete(`http://localhost:5000/api/post/my/delete/${id}`)
        .then(res => {
            if (res.status === 200){
                dispatch(removeMyPost(id));
                dispatch(fetchPosts());
            }

        })
        .catch(err => {
            console.log(JSON.stringify(err))
        });
};

export const addMyPosts = (posts) => ({
    type: ActionTypes.ADD_MY_PROPERTIES,
    payload: posts
});
export const removeMyPost = (id) => ({
    type:ActionTypes.REMOVE_MY_PROPERTY,
    payload: id
});
export const myPostsLoading = ()=>({
    type: ActionTypes.MY_PROPERTIES_LOADING
});
export const myPostsFailed = (errMess)=>({
    type:ActionTypes.MY_PROPERTIES_FAILED,
    payload:errMess
});
