import React from 'react'
import { Card, Button } from 'react-bootstrap';
import stylePrice from './curancy';
import {CartContext} from "../context/shoppingcart";

import Zoom from 'react-reveal/Zoom';
const Streitem = ({id, image,price, title}) => {
const {getItems, increaseItem, decreaseItem, removeItem, currentUser} = CartContext()
  const quantity = getItems(id);
  return (
    <Zoom>
    <Card key={id}>
    <Card.Img variant="top" src= {image} style={{height: "200px",}} />
    <Card.Body>
      <Card.Text className='d-flex justify-content-between'>
       <span className='fs-5'>{title}</span>
       <span>{stylePrice(price)}</span>
       </Card.Text>
      <Card.Text>
      {quantity === 0  ? <Button onClick={()=> increaseItem(id)} className='w-100' variant="primary">Add to cart</Button> :
      <div className='d-flex flex-column align-items-center' style={{gap: "10px"}}>
       <div style={{gap: "10px"}}>
       <Button onClick={()=> decreaseItem(id)}>-</Button>
       <span className='bg-danger p-2 m-3 b' style={{borderRadius:"7px", color:"#fff"}} >{quantity}</span>
       <Button onClick={()=> increaseItem(id)}>+</Button>
       </div>
         <Button onClick={()=> removeItem(id)}>Remove</Button>
      </div>
      }
      </Card.Text>
  
    </Card.Body>
  </Card>
  </Zoom>
  )
}

export default Streitem;