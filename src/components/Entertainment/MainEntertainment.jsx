import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import EntertainmentStocks from './EntertainmentStocks';
//import FullOptionChain from '../OptionChain/FullOptionChain';

function MainEntertainment({option}) {
  
        return (
            <div>
                <Navbar />
                <h2 className="sectorHeader">Entertainment Stocks</h2>
                <EntertainmentStocks />
               
                <h5 className="sectorHeader"><Link to="/" style={{color: '#fff'}}>Return to Homepage</Link></h5>
            </div>
        )
    
}

export default MainEntertainment;