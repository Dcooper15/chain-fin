import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../Navbar/Navbar"
import Att from './Att';
import Dis from './Dis';
import Amc from './Amc';
import Mgm from './Mgm';
import Wynn from './Wynn';

class MainEntertainment extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <h2 className="sectorHeader">Entertainment Stocks</h2>
                <Att />
                <Dis />
                <Amc />
                <Mgm />
                <Wynn />
                <h5 className="sectorHeader"><Link to="/" style={{color: '#fff'}}>Return to Homepage</Link></h5>
            </div>
        )
    }
}

export default MainEntertainment;