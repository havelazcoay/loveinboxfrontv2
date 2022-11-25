import React from 'react';
import { useState } from 'react';
import { NavLink } from "react-router-dom"
import '../hojas-de-estilo/Sidebar.css';


import{
    FaBars, 
    FaHome,
    FaUserAlt,
    FaCommentAlt,
    FaShoppingBag,
    FaQuestion,
    FaUserCircle
}from 'react-icons/fa';


export const Sidebar = ({children}) => {

    const[isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);

    const menuItem=[
        {
        path:"/Home",
        name: "Home",
        icon:<FaHome/>
        },
        {
        path:"/Store",
        name:"Store",
        icon:<FaShoppingBag/>
        },
        {
        path:"/About",
        name:"About",
        icon:<FaCommentAlt/>
        },
        {
        path:"/FrequentQuestions",
        name:"Questions",
        icon:<FaQuestion/>
        },
        {
        path:"/Account",
        name:"Account",
        icon:<FaUserAlt/>
        },
        {
        path:"/Profile",
        name:"Profile",
        icon:<FaUserCircle/>
        },
    ]
    return(
        <div className="sidebar-container">
            <div style={{width: isOpen ? "300px" : "50px" }}  className="sidebar-sidebar">
                <div className="sidebar-top-section">
                    <div style={{marginLeft: isOpen ? "0px" : "0px" }}  className="sidebar-bars">
                        <FaBars onClick={toggle} />
                        <label className="sidebar-label">Love in Box</label>
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
            <main className="sidebar-main">{children}</main>
        </div>
    );
};