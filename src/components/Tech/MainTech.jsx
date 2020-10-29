import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Navbar from "../Navbar/Navbar"
import Amd from './Amd'
import Work from './Work';
import Twtr from './Twtr';


class MainTech extends Component {
    render() {
        return (
            <div>

                <Navbar />
                <h2 className="sectorHeader">Tech Stocks</h2>
                <Amd />
                <Work /> 
                <Twtr />
                <h5 className="sectorHeader"><Link to="/" style={{color: '#4ad9e4'}}>Return to Homepage</Link></h5>
            </div>
        )
    }
}



export default MainTech;