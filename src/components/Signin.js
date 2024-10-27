import React, { useRef, useState } from 'react';
import {Alert, Button, Card, CardBody, CardTitle, Form} from "react-bootstrap";
import { Link } from 'react-router-dom';
import {CartContext} from "../context/shoppingcart";
import { useNavigate } from 'react-router-dom';
const Signin = () => {
  const {signupUser}= CartContext()
  const [error, seterror]= useState("");
  const [loding, setloding]= useState(false);
  const refEmail = useRef();
  const refPassword = useRef();
  const refPasswordConfairm = useRef();
  const navigat = useNavigate();


 

const handelsubmit = async (e)=> {
    e.preventDefault();
    if(refPassword.current.value !== refPasswordConfairm.current.value){
      return seterror("passwods do not matchc")
    }
    try{
      seterror("")
      setloding(true);
      await signupUser( refEmail.current.value, refPassword.current.value)
      navigat("/")
    } catch{
      seterror("failed to create an account")

    }
    setloding(false)
}
    return (
    <>
    <Card style={{width:"60%", margin: "100px auto 20px auto"}}>
        <CardBody>
          <CardTitle className='text-center'>sign-Up</CardTitle>
            {error && <Alert variant='danger'>{error}</Alert>}
            <Form onSubmit={handelsubmit}>

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control ref={refEmail} type='email' ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Passowrd</Form.Label>
              <Form.Control ref={refPassword} type='password' ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Passowrd confairm</Form.Label>
              <Form.Control ref={refPasswordConfairm} type='password' ></Form.Control>
            </Form.Group>
            <Button variant='primary'
            disable={loding}
             type='submit' 
             className='w-100 mt-2' >Signup</Button>
           </Form>
        </CardBody>
    </Card>
    <p className='w-100 text-center '>already have an acount <Link to="/Login">log-in</Link> </p>
    </>
    
  )
}

export default Signin;