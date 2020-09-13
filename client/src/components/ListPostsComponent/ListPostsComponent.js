import React, {Component} from 'react';
import {Input, InputGroup, InputGroupAddon, InputGroupText, Label} from "reactstrap";
import Jumbotron from 'react-bootstrap/Jumbotron'
import PostComponent from '../PostComponent/PostComponent';
import CardDeck from 'react-bootstrap/CardDeck'


class ListPostsComponent extends Component{
    componentWillMount() {
        this.setState({
            post: this.props.posts,
            filteredPosts: this.props.posts,
            filteredByCondition:this.props.posts,
            filteredByPlatform:this.props.posts
        })
    }
    constructor(props){
       super(props);
       this.state={
           text:'',
           platform:'All',
           condition:'All',
           post:[],
           filteredPosts:[],
           filteredByCondition:[],
           filteredByPlatform:[]
       }
   }
    onChangePlatform = (event)=>{
        this.setState({
            platform:event.target.value
        },()=>{
            this.filterByPlatform();
        });

    };
    filterByPlatform = ()=>{
        this.setState({
            filteredPosts: this.state.platform !== 'All' ? this.state.filteredByCondition.filter(prop => prop.platform === this.state.platform)  : this.state.filteredByCondition,
            filteredByPlatform:this.state.platform !== 'All' ? this.state.filteredByCondition.filter(prop => prop.platform === this.state.platform)  : this.state.filteredByCondition
        })
    };
    onChangeCondition = (event)=>{
        this.setState({
            condition:event.target.value
        },()=>{
            this.filterByCondition();
        });
    };
    filterByCondition = ()=>{
        this.setState({
            filteredPosts: this.state.condition !== 'All' ?this.state.post.filter(prop => prop.condition === this.state.condition) : this.state.post,
            filteredByFor:this.state.condition !== 'All' ?this.state.post.filter(prop => prop.condition === this.state.condition) : this.state.post
        })
    };
    onChangeText = (event)=>{
        this.setState({
            text:event.target.value
        }, ()=>{
            this.filterByText()
        })
    };
    filterByText = ()=>{
        this.setState({
            filteredPosts: this.state.text !== '' ? this.state.filteredByPlatform.filter(prop => prop.posttitle.toLowerCase().includes(this.state.text.toLowerCase()))  : this.state.filteredByPlatform
        })
    };
    render() {
        return(
            <div>
                    <div className="bg-green text-center p-4 mt-5" >
                        <Jumbotron style={{ textAlign: 'center', backgroundColor: 'transparent'}}>
                            <h1>SHOP LISTINGS</h1>
                            <h6>Search far and wide for games you've been wanting to get your hands on.</h6>
                        </Jumbotron>
                    </div>
                    <div className="container mt-5">
                        <InputGroup className="form-group">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <span className="fa fa-search"/>
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input type="text" placeholder="Search for Games..." onChange={this.onChangeText} value={this.state.text}/>
                        </InputGroup>
                        <div className="form-inline">
                            <Label className="mr-1">Condition</Label>
                            <select className="form-control mr-2" id="for" onChange={this.onChangeCondition} value={this.state.condition}>
                                <option>All</option>
                                <option>New</option>
                                <option>Used</option>
                                <option>Refurbished</option>
                            </select>
                            <Label className="mr-1">Platform</Label>
                            <select className="form-control mr-2" onChange={this.onChangePlatform} value={this.state.platform}>
                                <option>All</option>
                                <option>Xbox</option>
                                <option>PlayStation</option>
                                <option>Nintendo</option>
                                <option>PC</option>
                            </select>
                        </div>
                    </div>
                    <div className="container mt-5">
                    <CardDeck>
                        <PostComponent posts={this.state.filteredPosts}
                                           isLoading={this.props.isLoading}
                                           errMess={this.props.errMess}
                        />
                    </CardDeck>
                    </div>
            </div>
        )
    }
}

export default ListPostsComponent;