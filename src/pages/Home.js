import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Row, Col} from 'react-bootstrap';
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
        <div>
          <p> Los Mejor Valorados!</p>
          <Row xs={1} md={4} className="g-4">
                {productsArray.map((product, idx) => (
                    <Col align="center" key={idx}>
                        <Product product={product}/>
                    </Col>
                ))}
          </Row>
        </div>
      </>
    );

  }
//<h1>Home</h1>