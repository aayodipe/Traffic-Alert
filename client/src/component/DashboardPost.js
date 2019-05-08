import React, { Component } from 'react';
import "../styles/DashboardPost.css"
import API from "../util/API";
import Post from "../pages/Post"
import PotholePosting from './PotholePosting';
import { Button, Form } from "react-bootstrap";


export default class DashboardPost extends Component {

    state = {
        posts: [],
        description: [],
        location: [],
        likes: 0,
        show: false
    };

    //     // showModal = () => {
    //     //     this.setState({ show: true });
    //     // },

    //     // hideModal = () => {
    //     //     this.setState({ show: false });

    //     // },

    // }



    componentDidMount() {
        API.getAllPosts().then(
            (res) => {
                console.log(res.data);
                this.setState({ posts: res.data });           
            }
        )
    }

    render() {
        return (
            <div className="PostContainer">
                <div className="post-top">
                    {this.state.posts.map((post) => {
                        return <div style={{ marginBottom: 20 }}><PotholePosting post={post} /></div>

                    })}

                </div>
                <div className="post-bottom">
                    <Button as="input" type="button" value="Yes! Fix this please!" />
                    <Button as="input" type="button" value="Additional Notes" />
                    {/* <Modal show={this.state.show} handleClose={this.hideModal}>
                        <p>Modal</p>
                        <p>Data</p>
                    </Modal>
                    <button type="button" onClick={this.showModal}>
                        Open
        </button> */}





                </div>
            </div>
        );
    }
}

// const Modal = ({ handleClose, show, children }) => {
//     const showHideClassName = show ? "modal display-block" : "modal display-none";

//     return (
//       <div className={showHideClassName}>
//         <section className="modal-main">
//           {children}
//           <button onClick={handleClose}>Close</button>
//         </section>
//       </div>
//     );
//   };

//   const container = document.createElement("div");
//   document.body.appendChild(container);
//   ReactDOM.render(<App />, container);