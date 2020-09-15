import React, {Component} from 'react';
import {Loading} from "../LoadingComponent/LoadingComponent";
import Jumbotron from 'react-bootstrap/Jumbotron';
import {Button} from "reactstrap";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

class UserDashboardComponent extends Component {
    handleRemove = (val) => event => {
        this.props.removePost(val);
    };
    render() {
        const {myPosts, isLoading, errMess} =this.props;
        if(isLoading){
            return(
                <div className="col-12 col-md p-5">
                    <Loading/>
                </div>
            );
        }
        else if (errMess){
            return(
                <div className="col-12 col-md m-5 d-flex justify-content-center">
                    <h4 className="text-danger">{errMess}</h4>
                </div>
            );
        }
        else {
            return (
                <div className="container pt-5">
                    <Jumbotron style={{ textAlign: 'center', backgroundColor: 'transparent' }}>
                        <h1>My Post</h1>
                        <h6>Here you can Manage your post.</h6>
                    </Jumbotron>
                   
                        <CardDeck>
                            { myPosts.length === 0 ?
                                <div className="text-center p-4" >
                                    <h6>You Don't have any posts yet</h6>
                                </div>
                                :myPosts.map(post => {
                                return (
                                   
                                   <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={`/uploads/${post.image}`} alt="not image available"/>
                                        <Card.Body>
                                            <Card.Title>Game Name: {post.posttitle}</Card.Title>
                                            <Card.Text>Genre: {post.genre}</Card.Text>
                                            <Card.Text>Platform: {post.platform}</Card.Text>
                                            <Card.Text>Developer: {post.developer}</Card.Text>
                                            <Card.Text>Esrb rating: {post.esrb}</Card.Text>
                                            <Card.Text>Price: {post.priceUnit} {post.price}</Card.Text>
                                            <Card.Text>Condition: {post.condition}</Card.Text>
                                            <Card.Text>Description: {post.description}</Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted">Last updated {post.date}</small>
                                            {/** 
                                            <Link to={`/post/${post._id}`} className="btn btn-block btn-green mt-2">Remove</Link>
                                            */}
                                            <Button className="btn btn-block btn-green mt-2" onClick={this.handleRemove(post._id)}>Remove</Button>
                                        </Card.Footer>
                                    </Card>
                                )
                            })}

                        </CardDeck>      
                </div>
            );
        }
    }
}



export default UserDashboardComponent;