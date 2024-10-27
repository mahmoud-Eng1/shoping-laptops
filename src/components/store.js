import React, {useState} from 'react';
import {Row,Col, Container} from "react-bootstrap";
import Streitem from "../components/storeitems"
import dataJson from "./data.json"
const Store = () => {
  const [datastore, setdatastore] = useState(dataJson);
  return (
    <Container>
 <div className='parent'>
  <Row>
{datastore.map((item)=> {
  return(
    <Col sm={12} md={6} lg={4} className='mb-3 l'> 
      <Streitem {...item}/>
     </Col>
  )
})}
  </Row>

 </div>
 </Container>
  )
}

export default Store;