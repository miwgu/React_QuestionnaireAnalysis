import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import './Navbar.css';

export const SidebarData =[
    {
        title: 'Home',
        path: '/',
        icon:<AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Psoriasis',
        path: '/psoriasis',
        icon:<IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Cancer',
        path: '/cancer',
        icon:<FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Team',
        path: '/team',
        icon:<IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'Message',
        path: '/message',
        icon:<FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'Support',
        path: '/support',
        icon:<IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },
    
]