import React from 'react'
import PropagateLoader from "react-spinners/PropagateLoader";

import { useState } from 'react';
import { useEffect } from 'react';
import './Home.css';
import Slider from './Slider';


export default function Home() {

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
<Slider/>
</>

    
 }
 

 </>
  )
}
