import React from 'react';
import { Loading } from '../LoadingComponent/LoadingComponent';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'

const PostComponent = ({posts, isLoading, errMess})=>{
    if(isLoading){
        return(
            <div className="col-12 col-md">
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
            posts.map(post =>{
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
                    <Link to={`/post/${post._id}`} className="btn btn-block btn-green mt-2">View</Link>
                </Card.Footer>
            </Card>
             )
            })
        );
    }
};

export default PostComponent;