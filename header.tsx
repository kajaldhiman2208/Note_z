import React from 'react'
import '../style.css';
import { CiCirclePlus } from "react-icons/ci";


function header() {
  return (
    <div className="header-section">
    <ul style={{display:"flex"}}>
      <li style={{marginRight:"25%",marginLeft:"5%",marginTop:"1.5%"}}><b><i>NOTEZ</i></b></li>
      <li style={{marginLeft:"2%",marginTop:"1.5%"}}><b><i>Home</i></b></li>
      <li style={{marginLeft:"5%",marginTop:"1.5%"}}><b><i>About Us</i></b></li>
      <li style={{marginLeft:"5%",marginTop:"1.5%"}}><b><i>Contact Us</i></b></li>
     
        <li style={{marginLeft:"5%",marginTop:"1.5%"}} id="login" >
        <b><i><a href="./login">Login</a></i></b>
      </li>
     
      <li style={{fontSize:"45px",marginLeft:"20%",marginTop:"1%"}}><a href="/note"><CiCirclePlus /></a></li>
      
    </ul>
  </div>
  )
}

export default header
