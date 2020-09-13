import React, {Component} from 'react';
import { Control, Form, Errors } from "react-redux-form";
import {Button, Label, Col, Row } from 'reactstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => !(val) || (val.length >= len);
const isNumber = val => !isNaN(Number(val));


class AddPostComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            image:'',
            imageFile:null,
            latitude:'',
            longitude:''
        }
    }
    componentDidMount() {
        this.props.resetAddPostForm();
    }

    handleSubmit = values => {
        if (this.state.imageFile === null){
            alert('Please add Image of Post');
        }
        else {
            const val = {
                ...values,
                image: this.state.image,
                latitude:this.state.latitude,
                longitude:this.state.longitude,
                email: this.props.auth.user.email
            };
            const formData = new FormData();
            formData.append('image',this.state.imageFile);
            this.props.addImageToServer(formData);
            this.props.addPost(val);
            this.props.resetAddPostForm();
        }
    };

    imageHandler = (event) => {
        if (event.target.files.length > 0)
        {
            this.setState(prevState=>({
                image:event.target.files[0].name,
                imageFile: event.target.files[0]
            }));

        }

    };

    getLocation=(event)=>{
        if(!navigator.geolocation){
            return alert('Location not Supported by your browser');
        }


        navigator.geolocation.getCurrentPosition((position)=>{
            this.setState({
                latitude:position.coords.latitude,
                longitude:position.coords.longitude
                });

            alert('Got Your Location :D');
        });

    };

    render() {
        return (
            <div className="container pt-5">
                <Jumbotron style={{ textAlign: 'center', backgroundColor: 'transparent' }}>
                    <h1>ADD LISTING</h1>
                    <h6>Got something you want to trade or sell? Tell us a bit about it.</h6>
                </Jumbotron>
                <div className="card ">
                    <div className="card-body">
                        <Form model="addPost" onSubmit={value => this.handleSubmit(value)}>
                            <Row className="form-group">
                                <Label htmlFor="posttitle" md={2}>Game Title</Label>
                                <Col md={6}>

                                    <Control.text model=".posttitle" id="posttitle" name="posttitle"
                                                  placeholder="Post Title"
                                                  className="form-control"
                                                  validators={{
                                                      required, minLength: minLength(3), maxLength: maxLength(30)
                                                  }}
                                    />
                                    <Errors model=".posttitle"
                                            className="text-danger"
                                            show="touched"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be greater than 3 characters',
                                                maxLength: 'Must be less than 30 Characters'
                                            }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="for" md={2}>Condition</Label>
                                <Col md={6}>
                                    <Control.select model=".condition" name="condition" className="form-control" defaultValue="New">
                                        <option>New</option>
                                        <option>Used</option>
                                        <option>Refurbished</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="genre" md={2}>Genre</Label>
                                <Col md={6}>
                                    <Control.select model=".genre" name="genre" className="form-control" defaultValue="Action">
                                        <option>Action</option>
                                        <option>Strategy</option>
                                        <option>Fight</option>
                                        <option>Role Playing</option>
                                        <option>Simulation</option>
                                        <option>Sports</option>
                                        <option>Board Game</option>
                                        <option>Horror Game</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="bathrooms" md={2}>Developer</Label>
                                <Col md={6}>
                                    <Control.select model=".developer" name="developer" className="form-control" defaultValue="Action">
                                        <option>Overflow</option>
                                        <option>3D Realms</option>
                                        <option>42 Enterteinment</option>
                                        <option>Capcom</option>
                                        <option>Acclaim Studios Austin</option>
                                        <option>Adventure Soft</option>
                                        <option>AQ Interactive</option>
                                        <option>Arc System Works</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="address" md={2}>Esrb Rating</Label>
                                <Col md={6}>

                                    <Control.text model=".esrb" id="esrb" name="posttitlesrbe"
                                                  placeholder="Esrb Rating"
                                                  className="form-control"
                                                  validators={{
                                                      required, maxLength: maxLength(30)
                                                  }}
                                    />
                                    <Errors model=".esrb"
                                            className="text-danger"
                                            show="touched"
                                            messages={{
                                                required: 'Required',
                                                maxLength: 'Must be less than 30 Characters'
                                            }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="city" md={2}>Platform</Label>
                                <Col md={6}>
                                    <Control.select model=".platform" name="platform" className="form-control" defaultValue="Rawalpindi">
                                        <option>Xbox</option>
                                        <option>PlayStation</option>
                                        <option>Nintendo</option>
                                        <option>PC</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            
                            <Row className="form-group">
                                <Label htmlFor="images" md={2}>Upload Images</Label>
                                <Col md={6}>
                                    <Control.file model="image1" id="image1" name="image1"
                                                  className="form-control-file mb-2"
                                                  accept="image/jpg, image/jpeg"
                                                  onChange={this.imageHandler}
                                    />

                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="price" md={2}>Price</Label>
                                <Col md={3}>
                                    <Control.text model=".price" id="price" name="price"
                                                  placeholder="Price"
                                                  className="form-control"
                                                  validators={{
                                                      required,isNumber
                                                  }}
                                    />
                                    <Errors model=".price"
                                            className="text-danger"
                                            show="touched"
                                            messages={{
                                                required: 'Required',
                                                isNumber: 'Must be Number'
                                            }}
                                    />
                                </Col>
                                <Col md={3}>
                                    <Control.select model=".priceUnit" name="priceUnit" className="form-control" defaultValue="USD">
                                        <option>USD</option>
                                        <option>EU</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="contact" md={2}>Contact No</Label>
                                <Col md={3}>
                                    <Control.text model=".contact" id="contact" name="contact"
                                                  placeholder="03*********"
                                                  className="form-control"
                                                  validators={{
                                                      required,isNumber, minLength: minLength(11), maxLength: maxLength(11)
                                                  }}
                                    />
                                    <Errors model=".contact"
                                            className="text-danger"
                                            show="touched"
                                            messages={{
                                                required: 'Required',
                                                minLength:'Invalid Number',
                                                maxLength:'Invalid Number',
                                                isNumber: 'Must be Number'
                                            }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="description" md={2} >Description</Label>
                                <Col md={6}>
                                    <Control.textarea model=".description" id="description" name="description"
                                                      rows="12"
                                                      className="form-control"
                                                      placeholder="Your Description goes here..."
                                                      validators={{
                                                          required
                                                      }}
                                    />
                                    <Errors model=".description"
                                            className="text-danger"
                                            show="touched"
                                            messages={{
                                                required: 'Required',
                                            }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:6, offset: 2}}>
                                    <Button type="submit" className="btn-block btn-green">
                                        Add Post
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>

                </div>
            </div>

        );
    }
}

export default AddPostComponent;