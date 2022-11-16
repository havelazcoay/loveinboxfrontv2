import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col } from 'react-bootstrap';
import Example from "../components/Carousel";


import { productsArray } from '../productsStore';
import Product from '../components/Product';
import '../App.css';



export default function Home() {
  return (
    <>
      <div className="contenedor-principal">
        <Example />
      </div>
      <div style={{textAlign:"center"}}>
        <p> Los Mejor Valorados!  </p>   
      </div>
      <div >
      <Row xs={1} md={5} className="g-4">
          {productsArray.filter(product => product.rating > 4).map( filteredrating => (
            
            <div style={{textAlign:"center"}} key={filteredrating.rating}>
              {filteredrating.name}
            <Col align="center" key={filteredrating.rating}>
                <Product product={filteredrating} />
            </Col> 
            </div>
          ))
          }
          </Row>
        </div>
      
    </>
  );

}
//<h1>Home</h1>