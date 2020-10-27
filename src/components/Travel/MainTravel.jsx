import React, { Component } from 'react'
import Dal from './Dal';
import Nclh from './Nclh';
import Uber from './Uber';

class MainTravel extends Component {
    render() {
        return (
            <div>
               <Dal /> 
               <Nclh />
               <Uber />
            </div>
        )
    }
}


export default MainTravel;