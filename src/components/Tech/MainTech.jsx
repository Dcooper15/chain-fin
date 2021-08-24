import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import Amd from './Amd';
import Pins from './Pins';
import Sne from './Sne';
import Twtr from './Twtr';
import Zm from './Zm';


class MainTech extends Component {
    render() {
        return (
            <div>

                <Navbar />
                <h2 className="sectorHeader">Tech Stocks</h2>
                <Amd />
                <Pins />
                <Sne /> 
                <Twtr />
                <Zm />
                <h5 className="sectorHeader"><Link to="/" style={{color: '#fff'}}>Return to Homepage</Link></h5>
            </div>
        )
    }
}



export default MainTech;