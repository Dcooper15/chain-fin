import React, { Component } from 'react'
import Wfc from './Wfc';
import Axp from './Axp';
import Citi from './Citi';

class MainFinance extends Component {
    render() {
        return (
            <div>
                <Wfc />
                <Axp />
                <Citi />
            </div>
        )
    }
}


export default MainFinance;