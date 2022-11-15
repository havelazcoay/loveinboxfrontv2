import React, { useState } from "react";
import { productsArray } from "../productsStore";
import Product from "./Product";

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <>

            <div className="templateContainer" align="center" >
                <div className="searchInput_Container">
                    <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }} />
                </div>
                <div className="template_Container">
                    {
                        productsArray
                            .filter((val) => {
                                if (searchTerm == "") {
                                    return val;
                                } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val;
                                }
                            })
                            .map((val) => {
                                return (
                                    <div className="template" key={val.id}>
                                        <img src={val.image} alt="" />
                                        <h3>{val.name}</h3>
                                        <p className="price">{val.price}</p>

                                    </div>
                                )
                            })
                    }
                </div>
            </div>
        </>
    )
}

export default SearchBar;