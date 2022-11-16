import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//import { AddShoppingCart } from '@mui/icons-material';
import accounting from "accounting";
import { useContext } from 'react';
import { CartContext } from '../CartContext';
//import Products from "./Products";
import { Button, Row, Col, Form } from "react-bootstrap";
import '../hojas-de-estilo/navBar.css';
import '../hojas-de-estilo/Store.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

/*
export default function Product( { product : {id, name, productType, image, price, rating, description}}) {

  function ProductCard(props){
  const product = props.product;
  const cart = useContext(cartContext);
  const getProductQuantity = cart.getProductQuantity(product.id);
  console.log(cart.items);

  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        id,
        name,
        productType,
        image,
        price,
        rating,
        description,
      }
    })
  }
    <>
<Button  onClick={handleShow}></Button>
    <Modal show={show} onHide={handleClose}>
    <Modal.Body>

    </Modal.Body>
    </Modal>
    </>
  
}*/

function Product(props) {
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  console.log(cart.items);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [open, setOpen] = useState(false);

  const OpenCard = () => {
    setOpen(true);
  };

  const closeCard = () => {
    setOpen(false);
  };


  return (
    <>
      <Button onClick={handleShow} style={{width: "340px", padding: "0"}} >

        <Card sx={{ maxWidth: 345 }} onClick={OpenCard}>
          <CardHeader
            action={
              <Typography
                variant='h5'
                color='textSecondary'
              >
                {accounting.formatMoney(product.price, "$")}
              </Typography>
            }
            title={product.name}
            subheader="In Stock"
          />
          <CardMedia
            component="img"
            height="194"
            image={product.image}
            alt="hotwheels car "
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {product.productType}
            </Typography>
          </CardContent>
          <div className='Container2'>
            <CardActions disableSpacing>
              {productQuantity > 0 ?
                <>
                  <Form as={Row}>
                    <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label>
                    <Col sm="6">
                      <Button sm="6" onClick={() => cart.addOneToCart(product.id)} className="mx-2">+</Button>
                      <Button sm="6" onClick={() => cart.removeOneFromCart(product.id)} className="mx-2">-</Button>
                    </Col>
                  </Form>
                  <Button variant="danger" onClick={() => cart.deleteFromCart(product.id)} className="my-2">Remove from cart</Button>
                </>
                :
                <Button variant="primary" onClick={() => cart.addOneToCart(product.id)}><ShoppingCartIcon />Add To Cart</Button>
              }
            </CardActions>
          </div>
          <CardActions disableSpacing>
            {Array(product.rating)
              .fill()
              .map((_, i) => (
                <p>&#11088;</p>
              ))}
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>

          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>{product.description}</Typography>
            </CardContent>
          </Collapse>
        </Card>

      </Button>





      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Card sx={{ maxWidth: 345 }} onClick={OpenCard}>
            <CardHeader
              action={
                <Typography
                  variant='h5'
                  color='textSecondary'
                >
                  {accounting.formatMoney(product.price, "$")}
                </Typography>
              }
              title={product.name}
              subheader="In Stock"
            />
            <CardMedia
              component="img"
              height="194"
              image={product.image}
              alt="hotwheels car "
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {product.productType}
              </Typography>
            </CardContent>
            <div className='Container2'>
              <CardActions disableSpacing>
                {productQuantity > 0 ?
                  <>
                    <Form as={Row}>
                      <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label>
                      <Col sm="6">
                        <Button sm="6" onClick={() => cart.addOneToCart(product.id)} className="mx-2">+</Button>
                        <Button sm="6" onClick={() => cart.removeOneFromCart(product.id)} className="mx-2">-</Button>
                      </Col>
                    </Form>
                    <Button variant="danger" onClick={() => cart.deleteFromCart(product.id)} className="my-2">Remove from cart</Button>
                  </>
                  :
                  <Button variant="primary" onClick={() => cart.addOneToCart(product.id)}><ShoppingCartIcon />Add To Cart</Button>
                }
              </CardActions>
            </div>
            <CardActions disableSpacing>
              {Array(product.rating)
                .fill()
                .map((_, i) => (
                  <p>&#11088;</p>
                ))}
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>{product.description}</Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Modal.Body>
      </Modal>
    </>
  );

}

export default Product;

/*



*/