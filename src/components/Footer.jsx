import React, { Component } from 'react';
import './Footer.css';


class Footer extends Component {
    render() {
        return (
            <>
             <footer>
             <div className="supLinks">
             <a  style={{color: '#d4af37', textDecoration: 'none'}} href="https://www.investopedia.com/terms/c/coveredcall.asp" target="_blank" rel="noreferrer">Covered Call Definition</a> |
             <a  style={{color: '#d4af37', textDecoration: 'none'}} href="https://www.investopedia.com/articles/optioninvestor/08/covered-call.asp" target="_blank" rel="noreferrer"> The Basics of Covered Calls </a> 
             </div>
             </footer>
            </>
        )
    }
}


export default Footer;