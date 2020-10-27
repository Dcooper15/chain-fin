import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Amd from './Amd'
import Work from './Work';
import Twtr from './Twtr';


class MainTech extends Component {
    render() {
        return (
            <div>
                
                <Amd />
                <Work /> 
                <Twtr />
                <Link to="/">Return to Homepage</Link>
            </div>
        )
    }
}



export default MainTech;