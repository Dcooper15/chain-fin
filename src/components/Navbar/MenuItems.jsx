import { Link } from 'react-router-dom';
import React from 'react';


export const MenuItems = [
    
    {
        title: 'Finance',
        url:  '/finance',
        cName: 'nav-links'
    },
    {
        title: 'Entertainment',
        url: <Link to='/entertainment'></Link>,
        cName: 'nav-links'
    },
    {
        title: 'Tech',
        url: '/tech',
        cName: 'nav-links'
    },
    {
        title: 'Travel',
        url: 'https://coveredcalls.dev/travel',
        cName: 'nav-links'
    },
    {
        title: 'Repo',
        url: 'https://github.com/Dcooper15/covered-call-scanner',
        cName: 'nav-links-mobile'
    }
    
]