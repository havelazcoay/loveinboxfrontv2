import React from 'react';
import { useState } from 'react';
import { NavLink } from "react-router-dom"
import '../hojas-de-estilo/Sidebar.css';


import{
    FaHome,
    FaUserAlt,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,
    FaBars,
    FaRegUser,
    FaStar
}from 'react-icons/fa';


export const Sidebar = ({children}) => {

    const[isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);

    const menuItem=[
        {
        path:"/home",
        name:"home",
        icon:<FaHome/>
        },
        {
        path:"/store",
        name:"store",
        icon:<FaShoppingBag/>
        },
        {
        path:"/about",
        name:"about",
        icon:<FaThList/>
        },
        {
        path:"/Account",
        name:"Account",
        icon:<FaStar/>
        },
        {
        path:"/in-progress",
        name:"contact",
        icon:<FaCommentAlt/>
        },
    ]
    return(
        <div className="sidebar-container">
            <div style={{width: isOpen ? "300px" : "50px" }}  className="sidebar-sidebar">
                <div className="sidebar-top-section">
                    <div style={{marginLeft: isOpen ? "0px" : "0px" }}  className="sidebar-bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item,index)=>(
                        <NavLink to={item.path} key={index} className="sidebar-link" activeclassName="sidebar-active">
                            <div className="sidebar-icon"> {item.icon} </div>
                            <div style={{marginLeft: isOpen ? "50px" : "0px" }}  className="sidebar-link_text"> {item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};