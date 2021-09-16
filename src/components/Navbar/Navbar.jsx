import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from "./MenuItems";
import "./Navbar.css"

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }


    render() {
        return (
           <nav className={this.state.clicked ? 'NavbarItems active' : 'NavbarItems'}>
               <h1 className="navbar-logo">Covered Calls<i className="fab fa-react"></i></h1>
               <div className="menu-icon"  onClick={this.handleClick}>
                <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
               </div>
               <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                   {MenuItems.map((item, index) => {
                       return (
                       
                        <strong key={index}
                            className='nav-links'> <Link to={item.url}></Link>
                             {item.title}
                        </strong>
                            
                        
                       
                       )
                   })}
                   
               </ul>
              
           </nav>
        )
    }
}

export default Navbar;