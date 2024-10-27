import React, { useRef, useState } from 'react';
import {Button, Card, CardBody, CardTitle, Form} from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'; 
import { CartContext } from '../context/shoppingcart';
import auth from './firebase';


const Login = () => {
  const [error, seterror]= useState("");
  const [loding, setloding]= useState(false);
  const refEmail = useRef();
  const refPassword = useRef();
  
  const navigat = useNavigate();
  const {loginUser} = CartContext()
  const handleLogin = async (e)=> {
    e.preventDefault()

    try{
      seterror("");
      setloding(true);
      await loginUser(auth, refEmail.current.value, refPassword.current.value)
      navigat("/")
    }catch{
      seterror("failed to create an account")
    }
    seterror(false)
  } 

  return (
    <>
    <Card style={{width:"60%", margin: "100px auto 20px auto"}}>
    <CardBody>
      <CardTitle className='text-center'>log-In</CardTitle>
       <Form onSubmit={handleLogin}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control ref={refEmail} type='email' ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Passowrd</Form.Label>
          <Form.Control ref={refPassword} type='password' ></Form.Control>
        </Form.Group>

        <Button variant='primary' type='submit' className='w-100 mt-2' >Login</Button>
       </Form>
       <div className='w-100 text-center mt-2'>
        <Link to="/forgotPassowrd">forgot-Passowrd</Link>
       </div>
    </CardBody>
</Card>
<p className='w-100 text-center mt-2'>if you not have an acount <Link to="/signup">sign-up</Link> </p>
</>
  )
}

export default Login;