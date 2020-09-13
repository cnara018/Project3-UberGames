import React, {Component} from 'react';
import Moment from 'react-moment';
import {Label, Button, Row, Col} from "reactstrap";
import {Errors, Control, Form} from "react-redux-form";
import {Loading} from "../LoadingComponent/LoadingComponent";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => !(val) || (val.length >= len);
const isNumber = val => !isNaN(Number(val));
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class PostDetailComponent extends Component{
    handleSubmit= values => {
        const val= {
            ...values,
            reciever:this.props.post.email
        };
        this.props.sendEmailToOwner(val);
        this.props.resetEmailOwnerForm();
    };

    componentDidMount() {
        this.props.resetEmailOwnerForm();
    }

    render() {
        const {post ,isLoading, errMess} = this.props;
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
            return(
                <div className="container pt-5">
                    <div className="card ">
                        <div style={{ textAlign: 'center', backgroundColor: 'transparent'}}>
                            <h3>Post Detail</h3>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className='col-12 col-md-5 '>
                                    <img src={`/uploads/${post.image}`}  alt={post.posttitle} className="w-100" height="400"/>
                                </div>
                                <div className='col-12 col-md-7 '>
                                    <h3>{post.posttitle}</h3>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <table className="table table-striped table-borderless">
                                                <thead>
                                                <tr>
                                                    <th>Details</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>Condition:</td>
                                                    <td>{post.condition}</td>

                                                </tr>
                                                <tr>
                                                    <td>Esrb Rating:</td>
                                                    <td>{post.esrb}</td>

                                                </tr>
                                                <tr>
                                                    <td>Developer:</td>
                                                    <td>{post.developer}</td>
                                                </tr>
                                                <tr>
                                                    <td>Price:</td>
                                                    <td>{`${post.priceUnit} ${post.price} `} </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <table className="table table-striped table-borderless">
                                                <thead>
                                                <tr>
                                                    <th>&nbsp;</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>Genre</td>
                                                    <td>{post.genre}</td>
                                                </tr>
                                                <tr>
                                                    <td>Added On:</td>
                                                    <td><Moment format="MMM DD, YYYY">{post.date}</Moment></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className="row p-2">
                                <div className="col-12 col-md-7">
                                    <h5>Description</h5>
                                    <hr/>
                                    <p>{post.description}</p>
                                </div>
                                <div className="col-12 col-md-5">
                                    <h5>Contact Info</h5>
                                    <hr/>
                                    <div className="d-flex flex-row justify-content-around">
                                        <h6>Contact No: {post.contact}</h6>
                                    </div>
                                    <hr/>
                                    <div>
                                        <Form model="contact" onSubmit={value => this.handleSubmit(value)}>
                                            <Label className="font-weight-bold">Contact Via Email</Label>
                                            <Row className="form-group">
                                                <Col >
                                                    <Control.text model=".name" id="name" name="name"
                                                                  placeholder="Your Name"
                                                                  className="form-control"
                                                                  validators={{
                                                                      required, minLength: minLength(3), maxLength: maxLength(20)
                                                                  }}
                                                    />
                                                    <Errors model=".name"
                                                            className="text-danger"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required',
                                                                minLength: 'Must be greater than 3 characters',
                                                                maxLength: 'Must be less than 20 Characters'
                                                            }}
                                                    />

                                                </Col>
                                            </Row>
                                            <Row className="form-group">
                                                <Col >
                                                    <Control.text model=".contactNumber" id="contactNumber" name="contactNumber"
                                                                  placeholder="Your Phone Number"
                                                                  className="form-control"
                                                                  validators={{
                                                                      required,minLength: minLength(11), maxLength: maxLength(11), isNumber
                                                                  }}
                                                    />
                                                    <Errors model=".contactNumber"
                                                            className="text-danger"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required',
                                                                minLength: 'Not Valid Number',
                                                                maxLength: 'Not Valid Number',
                                                                isNumber: 'Must be Number'
                                                            }}
                                                    />
                                                </Col>
                                            </Row>
                                            <Row className="form-group">
                                                <Col >
                                                    <Control.text model=".emailAddress" id="emailAddress" name="emailAddress"
                                                                  placeholder="Your Email"
                                                                  className="form-control"
                                                                  validators={{
                                                                      required, validEmail
                                                                  }}
                                                    />
                                                    <Errors model=".emailAddress"
                                                            className="text-danger"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required',
                                                                validEmail: 'Invalid Email'
                                                            }}
                                                    />

                                                </Col>
                                            </Row>
                                            <Row className="form-group">
                                                <Col >

                                                    <Control.textarea model=".message" id="message" name="message"
                                                                      rows="5"
                                                                      className="form-control"
                                                                      placeholder="Your Message"
                                                                      validators={{
                                                                          required
                                                                      }}
                                                    />
                                                    <Errors model=".message"
                                                            className="text-danger"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required',
                                                            }}
                                                    />
                                                </Col>
                                            </Row>
                                            <Row className="form-group">
                                                <Col >
                                                    <Button outline type="submit" className="btn-block" color="primary">
                                                        Send Email
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

};

export default PostDetailComponent;