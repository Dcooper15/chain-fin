import React, { Component } from 'react'
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <>
             <footer>Before engaging in a Covered Call, please do thorough research of the asset before purchasing 100 shares. Keep in mind, if a stock has an upcoming earnings report, their premium will be relatively high, <strong><em>it can be dangerous</em></strong> to play a Covered Call prior to an upcoming earnings report. Below are supplmentary links for Covered Calls.
             <div className="supLinks">
             <a  style={{color: '#4ad9e4', textDecoration: 'none'}} href="https://www.investopedia.com/terms/c/coveredcall.asp" target="_blank" rel="noreferrer">Covered Call Definition</a> |
             <a  style={{color: '#4ad9e4', textDecoration: 'none'}} href="https://www.investopedia.com/articles/optioninvestor/08/covered-call.asp" target="_blank" rel="noreferrer"> The Basics of Covered Calls </a> |
             <a  style={{color: '#4ad9e4', textDecoration: 'none'}} href="https://www.investopedia.com/terms/b/bag-holder.asp" target="_blank" rel="noreferrer">  Bag Holder</a>
             </div>
             </footer>
            </>
        )
    }
}


export default Footer;