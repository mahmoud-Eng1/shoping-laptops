import React from 'react';
import { Button, Stack ,Container} from 'react-bootstrap';
import data from "../components/data.json";
import stylePrice from "./curancy";
import {CartContext} from "../context/shoppingcart"
const ContentSlid = ({id, quantity}) => {
  const { removeItem} = CartContext()
    //this condition to handl items 
    const item = data.find((i)=> i.id ===id)

  return (
    <Container>
    <Stack direction='horizontal' 
    className='d-flex align-items-center mb-2'
    style={{borderBottom: "1px solid gray"}} gap={2}>

<img src={item.image} alt='cart-image'
  style= {{width: "120px", height: "70px", objectFit: "cover"}} />
  <div className='me-auto'>
    <div style={{fontSize: "15px"}}>
          {item.title} {""}
        {quantity > 1 && <span className='text-muted' style={{fontSize: "13px"}}> x{quantity} </span>}
    </div>
    <div style={{fontSize: "12px"}} > {stylePrice(item.price)}</div>
  </div>
  <div> {stylePrice(item.price * quantity ) }</div>
  <Button variant='outline-danger'
   style={{fontSize: "18px", fontWeight: "bold"}} 
   onClick={()=> removeItem(id)}> &times; </Button>
    </Stack>
    </Container>
  )
}

export default ContentSlid;