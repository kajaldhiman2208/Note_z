'use client'
import React, { useState } from 'react';
import './style.css'; 
import Header from './Header/header';

export default function Home() {


 
  return (
    <main>
      
      <div className="Main">
      <Header></Header>
        <h1 className="main-heading"><b><i>Idea's a jumbled mess? <br />Let Notez <br /> untangle the knots</i></b></h1>
        <div className="main-image">
          <div className="image-div1" style={{backgroundColor:"#FFFFFF", borderRadius:"0px 40px 40px 0px"}}>
          <img src={'Screenshot (92).png'} className="div1-img"></img>

          </div>
          <div className="image-div2">
          <img src={'/Screenshot (90).png'} className="div2-img"></img>
          </div>
          <div className="image-div3">
          <img src={'Screenshot (93).png'} className="div3-img"></img>
          </div>
        </div>
      </div>
     
    </main>  
  );
}
