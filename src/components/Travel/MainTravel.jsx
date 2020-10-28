import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../Navbar/Navbar"
import Dal from './Dal';
import Nclh from './Nclh';
import Uber from './Uber';

class MainTravel extends Component {
    render() {
        return (
            <div>
                <Navbar />
               <Dal /> 
               <Nclh />
               <Uber />
               <Link to="/">Return to Homepage</Link>
            </div>
        )
    }
}


export default MainTravel;