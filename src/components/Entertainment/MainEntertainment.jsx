import React, { Component } from 'react'
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
            </div>
        )
    }
}

export default MainEntertainment;