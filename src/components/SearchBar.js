import React, { useState } from "react";
import { productsArray } from "../productsStore";
import Product from "./Product";
import { Row, Col } from 'react-bootstrap';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <>

            <div align="center" >
                <div className="searchInput_Container">
                    <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }} />
                </div>
                <div className="template_Container">
                <Row xs={1} md={4} className="g-4">
                    {
                        productsArray
                            .filter((val) => {
                                if (searchTerm == "") {
                                    return val;
                                } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val;
                                }
                            })
                            .map((product, val) => {
                                return (
                                    <div className="template" key={val.id} >
                                            <Col align="center" key={val.id}>
                                                <Product product={product} />
                                            </Col>
                                    </div>
                                )
                            })
                    }
                    </Row>
                </div>
            </div>
        </>
    )
}

export default SearchBar;