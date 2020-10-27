import React, { Component } from 'react'
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
            </div>
        )
    }
}



export default MainTech;