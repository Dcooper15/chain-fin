import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../Navbar/Navbar"
import Dis from './Dis';
import Amc from './Amc';
import Mgm from './Mgm';

class MainEntertainment extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <h2 className="sectorHeader">Tech Stocks</h2>
                <Dis />
                <Amc />
                <Mgm />
                <h5 className="sectorHeader"><Link to="/" style={{color: '#4ad9e4'}}>Return to Homepage</Link></h5>
            </div>
        )
    }
}

export default MainEntertainment;