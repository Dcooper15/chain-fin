import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import FinanceStocks from './FinanceStocks';


class MainFinance extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <h2 className="sectorHeader">Finance Stocks</h2>
                <FinanceStocks />
                <h5 className="sectorHeader"><Link to="/" style={{color: '#fff'}}>Return to Homepage</Link></h5>
            </div>
        )
    }
}


export default MainFinance;