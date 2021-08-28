import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import TechStocks from './TechStocks';



class MainTech extends Component {
    render() {
        return (
            <div>

                <Navbar />
                <h2 className="sectorHeader">Tech Stocks</h2>
                <TechStocks />
                <h5 className="sectorHeader"><Link to="/" style={{color: '#fff'}}>Return to Homepage</Link></h5>
            </div>
        )
    }
}



export default MainTech;