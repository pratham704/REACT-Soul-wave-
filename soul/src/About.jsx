import React from 'react'
import './About.css';
import OurTeam from './OurTeam';
import PropagateLoader from "react-spinners/PropagateLoader";

import { useState } from 'react';
import { useEffect } from 'react';







export default function About() {

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
  <OurTeam/>
    </>
    
        
     }
     
    
     </>
  )
}
