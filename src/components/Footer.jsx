import React, { Component } from 'react';
import { ExtLink, SupLinks } from './Styles/styledElements';
import './Footer.css';


class Footer extends Component {
    render() {
        return (
            
             <footer>
             <SupLinks>
             <ExtLink href="https://www.investopedia.com/terms/c/coveredcall.asp" target="_blank" rel="noreferrer">Covered Call Definition</ExtLink>|
             <ExtLink href="https://www.investopedia.com/articles/optioninvestor/08/covered-call.asp" target="_blank" rel="noreferrer"> The Basics of Covered Calls </ExtLink> 
             </SupLinks>
             </footer>
            
        )
    }
}


export default Footer;