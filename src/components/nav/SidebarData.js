import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";
import './Navbar.css';

export const SidebarData =[
    {
        title: 'Hem',
        path: '/',
        icon:<RiIcons.RiHomeSmileFill />,
        cName: 'nav-text'
    },
    {
        title: 'Psoriasis',
        path: '/psoriasis',
        icon:<AiIcons.AiOutlineBarChart />,
        cName: 'nav-text'
    },
    {
        title: 'Cancer',
        path: '/cancer',
        icon:<AiIcons.AiOutlineBarChart />,
        cName: 'nav-text'
    },
    {
        title: 'Diabetes',
        path: '/diabetes',
        icon:<AiIcons.AiOutlineBarChart />,
        cName: 'nav-text'
    },
    {
        title: 'Meddelande',
        path: '/message',
        icon:<FaIcons.FaRegEnvelope />,
        cName: 'nav-text'
    },
    {
        title: 'Support',
        path: '/support',
        icon:<BiIcons.BiSupport />,
        cName: 'nav-text'
    },
    
]