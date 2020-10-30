import { Link } from "react-router-dom";



export const MenuItems = [
    
    {
        title: <Link style={{textDecoration: 'none', color: '#fff'}} to='/finance'>Finance</Link>,
        
        cName: 'nav-links'
    },
    {
        title: <Link style={{textDecoration: 'none', color: '#fff'}} to='/entertainment'>Entertainment</Link>,
        
        cName: 'nav-links'
    },
    {
        title: <Link style={{textDecoration: 'none', color: '#fff'}} to='/tech'>Tech</Link>,
        
        cName: 'nav-links'
    },
    {
        title: <Link style={{textDecoration: 'none', color: '#fff'}}to='/travel'>Travel</Link>,
        url: 'travel',
        cName: 'nav-links'
    },
    {   title: <a style={{textDecoration: 'none', color: '#fff'}} href='https://github.com/Dcooper15/covered-call-scanner'>Repo</a>,

        cName: 'nav-links-mobile'

    }
    
    
]