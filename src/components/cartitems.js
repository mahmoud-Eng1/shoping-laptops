import React from 'react'
import { Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Stack } from 'react-bootstrap';
import {CartContext} from "../context/shoppingcart";
import ContentSlid from "./contentslide"
import stylePrice from './curancy';
import data from "./data.json"
const CartItems = ({controlCart}) => {
    const {dataStore, closeCart} = CartContext()
    
  return (
    <Offcanvas  show={controlCart} onHide={closeCart} placement='end'>
        <OffcanvasHeader closeButton>
            <OffcanvasTitle>Cart</OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody>
          <Stack>
        {dataStore.map((item)=> {
            return <ContentSlid key={item.id} {...item}/>
        })}
        {/* this part for purchases */}
        <div className='ms-auto fs-6'> total : {stylePrice(dataStore.reduce((total, cartitem)=> {
        const item = data.find((i)=> i.id === cartitem.id)
        return total + (item?.price || 0) * cartitem.quantity
        },0)
        )}</div>
        </Stack>
        </OffcanvasBody>
    </Offcanvas>
  )
}

export default CartItems;