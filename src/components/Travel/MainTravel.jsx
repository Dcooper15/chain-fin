import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import TravelStocks from './TravelStocks';
import './MainTravel.css';

class MainTravel extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <h2 className="sectorHeader">Travel Stocks</h2>
               <TravelStocks />
               
               <h5 className="sectorHeader"><Link to="/" style={{color: '#fff'}}>Return to Homepage</Link></h5>
            </div>
        )
    }
}


export default MainTravel;