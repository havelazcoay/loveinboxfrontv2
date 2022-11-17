import React, { Component } from "react";
import "../hojas-de-estilo/MenuPF.css";


class MenuPF extends Component{
    render(){
        return( 
            <div className = "category">
                <li>
                    <a>{this.props.name}</a>
                </li>
            </div>
        );
    }
}

export default MenuPF ;