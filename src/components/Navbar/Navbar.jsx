import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from "./MenuItems";
import { Button } from "./Button";
import "./Navbar.css"

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }


    render() {
        return (
           <nav className="NavbarItems">
               <h1 className="navbar-logo">Covered Calls<i className="fab fa-react"></i></h1>
               <div className="menu-icon" onClick={this.handleClick}>
                <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
               </div>
               <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                   {MenuItems.map((item, index) => {
                       return (
                       
                        <i key={index}
                            className={item.cName}> <Link to={item.url}></Link>
                             {item.title}
                        </i>
                            
                        
                       
                       )
                   })}
                   
               </ul>
               <form method="get" action="https://github.com/Dcooper15/covered-call-scanner">
               <Button type="submit">Repo</Button>
               </form>
           </nav>
        )
    }
}

export default Navbar;