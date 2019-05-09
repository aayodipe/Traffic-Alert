import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Post.css";
import axios from "axios";
import API from "../util/API";


export default class Post extends Component {


    constructor(props) {
        super(props);

        this.state = {
            posts:[],
            location: "",
            description: "",
            image: null

        };
    }

 //On page upload
    componentDidMount() {
        this.loadAllPost();
      }

      loadAllPost = () => {
        API.getAllPosts()
          .then(res =>{
            console.log(res)
            this.setState({ 
            posts: res.data,                 
            location: "",
            description: "",
            image: null })}
          )
          .catch(err => console.log(err));
      };

      //hanld Image File
     fileSelectedHandler = event => {
       this.setState({
         image: event.target.files[0]
       })
     }
      //Handle Change
      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
    
    //Prevent login from clearing out
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.location) {
          API.uploadImage(this.state.image)
            .then((uploadImageResponse) => {
              const nameOfFile = uploadImageResponse.data.name;

              API.savePost({
                location: this.state.location,
                description: this.state.description,
                image: nameOfFile,
              })
                .then(
                    res => {
                    this.loadAllPost()
                    console.log(res)
                })
                .catch(err => console.log(err));

            }).catch((err) => {
              console.error(err);
            })



        }
      };


    render() {
        return (
            <div className="Register">
                <div className="header">
                    <div className="headerWaves"></div>
                    <h1 className="headerFont">SWERVE</h1>
                </div>
                <form onSubmit={this.handleFormSubmit}>
                    <Form.Group controlId="location">
                        <Form.Label className="normal-font"> Please enter the street name </Form.Label>
                        <Form.Control
                            autoFocus
                            type="text"
                            name="location"
                            value={this.state.location}
                            onChange={this.handleInputChange}
                            
                        />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label className="normal-font"> Please enter the description of the issue </Form.Label>

                        <Form.Control
                            autoFocus
                            as="textarea"
                            rows="5"
                            type="textarea"
                            name="description"
                            value={this.state.description}
                            onChange={this.handleInputChange}
                        />
                     </Form.Group>
                    <div className="image">
                    <input type="file" onChange={this.fileSelectedHandler}/>
                    <button onClick={this.fileUploadHandler}>Upload</button>
                    </div>

                    <Button block className="custom-btn" onClick={this.handleFormSubmit}>
              
                        Submit
                 
                    </Button>
                </form>
            </div>

        );
    }
}