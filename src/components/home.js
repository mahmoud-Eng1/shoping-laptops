import React from 'react'
import { Button } from 'react-bootstrap';
import {Link} from "react-router-dom"

const Home = () => {
  return (
 <div className='content-home'>
  <div className='imag'>
    <p className='info-hom'>refubihed 14-inch maackBook pro apple max chip with 10-core CPU and 32-GPD</p>
    <Button className='btn-home'><Link to={"/store"} > see more</Link></Button>
  </div>
 </div>
  )
}

export default Home;