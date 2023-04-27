import React from 'react'
import img from './soulPic.jpg'
import FormJoin from './FormJoin'
import PropagateLoader from "react-spinners/PropagateLoader";

import { useState } from 'react';
import { useEffect } from 'react';

import './Join.css'

export default function Join() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
  
setLoading(true);
setTimeout(() => {
  setLoading(false)
}, 1000);

  }, [])

  
  return (
    <>

{


loading?

<>

<div className='Propas'>

  <PropagateLoader    color="#49e2fe"   speedMultiplier={0.7} loading={loading}   size={30} />
  
  
  </div>
  
</> 


:
















<>
    {/* comp;lete body */}

<div className="Headss">    <h1 class="hero-banner__title hero-banner__stroked-title">JOIN US </h1>
</div>

    <div class="hero-banner">
  <div class="hero-banner__title" aria-hidden="true"></div>

  <img class="hero-banner__image" src={img} alt='hrlo'/>
  
</div>

<div class="content">

  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis porro neque doloribus reiciendis fugiat eos aspernatur, ab necessitatibus tempore fuga autem aut omnis dignissimos molestiae debitis obcaecati beatae itaque accusamus.</p>

  </div>


{/* formsss */}
  
    <FormJoin    />
    
    
    </>

}

</>


  )
}

