import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Navbar from "../Navbar/Navbar"
import Wfc from './Wfc';
import Axp from './Axp';
import Citi from './Citi';

class MainFinance extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Wfc />
                <Axp />
                <Citi />
                <Link to="/">Return to Homepage</Link>
            </div>
        )
    }
}


export default MainFinance;