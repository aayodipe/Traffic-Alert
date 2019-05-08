import React, { Component } from "react";
import Navbar from "./Navbar"
import DashboardFooter from "../component/DashboardFooter"
import DashboardPost from "../component/DashboardPost"
import DashboardHeader from "../component/DashboardHeader"
import { Container } from "react-bootstrap";

export default class Dashboard extends Component {

    render() {
        return (
            <div>
                <Navbar />
                {/* <Container className ="bg-primary mt-4"> */}
                <DashboardHeader />
                <DashboardPost />
                <DashboardFooter />
                {/* </Container> */}
            </div>
        );
    }

}