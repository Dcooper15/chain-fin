import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Dis from './Dis';
import Amc from './Amc';
import Mgm from './Mgm';

class MainEntertainment extends Component {
    render() {
        return (
            <div>
                <Dis />
                <Amc />
                <Mgm />
                <Link to="/">Return to Homepage</Link>
            </div>
        )
    }
}

export default MainEntertainment;