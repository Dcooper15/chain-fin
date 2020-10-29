import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Navbar from "../Navbar/Navbar"
import Wfc from './Wfc';
import Axp from './Axp';
import Citi from './Citi';
import Bac from './Bac';
import Jpm from './Jpm';

class MainFinance extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <h2 className="sectorHeader">Finance Stocks</h2>
                <Axp />
                <Bac />
                <Citi />
                <Jpm />
                <Wfc />
                <h5 className="sectorHeader"><Link to="/" style={{color: '#fff'}}>Return to Homepage</Link></h5>
            </div>
        )
    }
}


export default MainFinance;