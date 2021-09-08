import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import SectorStocks from './SectorStocks';


function MainSectors() {
  
        return (
            <div>
                <Navbar />
                <SectorStocks />
                <h5 className="sectorHeader"><Link to="/" style={{color: '#fff'}}>Return to Homepage</Link></h5>
            </div>
        )
    
}

export default MainSectors;