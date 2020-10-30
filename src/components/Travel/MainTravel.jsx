import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../Navbar/Navbar"
import Ccl from './Ccl';
import Dal from './Dal';
import Nclh from './Nclh';
import Ual from './Ual';
import Luv from './Luv';
import Uber from './Uber';
import './MainTravel.css';

class MainTravel extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <h2 className="sectorHeader">Travel Stocks</h2>
                <Ccl />
               <Dal /> 
               <Nclh />
               <Luv />
               <Uber />
               <Ual />
               
               <h5 className="sectorHeader"><Link to="/" style={{color: '#fff'}}>Return to Homepage</Link></h5>
            </div>
        )
    }
}


export default MainTravel;