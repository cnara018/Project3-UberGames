import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './HomeComponent/HomeComponent';
import Header from './HeaderComponent/HeaderComponent';
import Footer from './FooterComponent/FooterComponent';
import ListPostsComponent from './ListPostsComponent/ListPostsComponent';
import AdminDashboard from './AdminDashboardComponent/AdminDashboardComponent';
import UserDashboard from './UserDashboardComponent/UserDashboardComponent';
import AddPostComponent from "./AddPostComponent/AddPostComponent";
import PostDetail from './PostDetailComponent/PostDetailComponent';
import TermsOfService from './termsofservice';
import { loginUser, logoutUser, registerUser } from "../redux/actions/authActions";
import { Link } from 'react-router-dom';
import PrivateRoute from '../routes/PrivateRoute';


import {
    addImageToServer,
    addPost,
    fetchPosts,
    fetchRecentPosts, removePost,
    sendEmailToOwner
} from "../redux/actions/postActions";
import {actions} from "react-redux-form";

const mapStateToProps = state => {
    return {
        auth: state.auth,
        posts: state.posts,
        recent:state.recent,
        myPosts: state.myPosts
    }
};

const mapDispatchToProps = (dispatch) => ({
    loginUser: (userData)=> dispatch(loginUser(userData)),
    logoutUser: ()=>{dispatch(logoutUser())},
    registerUser:(userData)=> dispatch(registerUser(userData)),
    addPost:(newPost)=>dispatch(addPost(newPost)),
    addImageToServer:(image)=>dispatch(addImageToServer(image)),
    fetchPosts: ()=>{dispatch(fetchPosts())},
    fetchRecentPosts:()=>{dispatch(fetchRecentPosts())},
    resetAddPostForm: ()=> {dispatch(actions.reset('addPost'))},
    resetEmailOwnerForm:()=>{dispatch(actions.reset('contact'))},
    sendEmailToOwner:(data)=>{dispatch(sendEmailToOwner(data))},
    removePost: (id) => dispatch(removePost(id))
});


class Main extends Component {

    componentDidMount() {
        this.props.fetchPosts();
        this.props.fetchRecentPosts();
    }

    render() {

        return (
            <div>
                
                <Header  style={{backgroundColor: 'black'}} title={<Link style={{textDecoration: 'none', color: 'white',}} to="/">UberGames</Link>} scroll
                    loginUser={this.props.loginUser}
                    registerUser={this.props.registerUser}
                    logoutUser={this.props.logoutUser}
                    auth={this.props.auth}
                />
                
                <Switch>
                    <Route exact path="/" component={()=> <HomePage isLoading={this.props.posts.isLoading}
                                                                    errMess={this.props.posts.errMess}
                                                                    recentPosts={this.props.recent.recent}
                                                        />}
                    />

                    <Route path="/list" component={()=> <ListPostsComponent
                                                            posts={this.props.posts.posts}
                                                            isLoading={this.props.posts.isLoading}
                                                            errMess={this.props.posts.errMess}
                                                        />}
                    />
                    <PrivateRoute exact path="/admin/dashboard" component={AdminDashboard}/>
                    <PrivateRoute exact path="/user/dashboard" component={()=><UserDashboard
                                                                                myPosts={this.props.myPosts.myPosts}
                                                                                isLoading={this.props.myPosts.isLoading}
                                                                                errMess={this.props.myPosts.errMess}
                                                                                removePost={this.props.removePost}
                                                                                />}
                    />
                    <PrivateRoute path="/post/add" component={() => <AddPostComponent
                                                                    addPost={this.props.addPost}
                                                                    addImageToServer={this.props.addImageToServer}
                                                                    resetAddPostForm={this.props.resetAddPostForm}
                                                                    auth={this.props.auth}
                                                                />}
                    />
                    <Route path="/post/:id" component={({match})=><PostDetail
                        post={this.props.posts.posts.filter(post => post._id === match.params.id)[0]}
                        isLoading={this.props.posts.isLoading}
                        errMess={this.props.posts.errMess}
                        resetEmailOwnerForm={this.props.resetEmailOwnerForm}
                        sendEmailToOwner={this.props.sendEmailToOwner}
                    />}
                    />
                    
                    <Route exact path="/termsofservice" component={()=> <TermsOfService/>}
                    />
                    
                    <Redirect to="/"/>
                    

                </Switch>
                <Footer/>
            </div>
            
        );
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
