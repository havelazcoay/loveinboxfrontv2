import {Row, Col} from 'react-bootstrap';
import { productsArray } from '../productsStore';
import Product from '../components/Product';
// [{... }, {... }, {... }]
function Store() {

    return (
        <>
            <h1 align="center" className="p-3">Welcome to the store!!!</h1>
            <Row xs={1} md={4} className="g-4">
                {productsArray.map((product, idx) => (
                    <Col align="center" key={idx}>
                        <Product product={product}/>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Store;

//align-items="stretch" float="center" display="flex" justify-content="space-around" 