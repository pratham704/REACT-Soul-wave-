import React from 'react'
import Qr from './QuickReferal.jpg'
import './DonationSection.css'
import { useState } from 'react';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { useEffect } from 'react';

import PropagateLoader from "react-spinners/PropagateLoader";

export default function Donation() {

  const handleCopyClick = () => {
    navigator.clipboard.writeText("8073970293@ibl")
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Error copying text: ", err);
      });

      alert("8073970293@ibl copied to clipboard ")
  };




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









   <div class="header"  >
      <u><h2 >Contribute </h2></u>  
        </div>
   
<br />
<br />


        <div id='Dpara' >

<p>
<strong>

  <b>
Your donation is a vital contribution to our efforts to provide continued support and resources to those in need. With your support, we can make a significant difference in the lives of those we serve and work towards a better future for all.
</b></strong>


</p>
  </div>









      <br />
      <br />
{/* class="animate__animated animate__fadeInLeft" */}
<div className="Qrcode"    >  <img  class="animate__animated animate__bounceInLeft"src={Qr} alt="" /></div>
<br />


  <div className='Ibl' data-aos="fade-zoom-in">

<h2><u> UPI ID's</u></h2>
<br />


<div className='Combined'>
<h3 >8073970293@ibl</h3>

<div className='Clipboard'><ContentPasteIcon onClick={handleCopyClick}/></div>
</div>


<div className='Combined2'>
<h3 >8073970293@ibl</h3>

</div>
<div className='Clip2'><ContentPasteIcon    onClick={handleCopyClick}/></div>

  </div>









  {/* para about donation */}


  
  <br />



  <div    id='Dpara'data-aos="fade-zoom-in" >

<p>
<b>
Every dollar you donate goes directly towards our programs and initiatives, allowing us to expand our reach and impact. With your help, we can provide access to healthcare, education, housing, and other essential services that are often out of reach for those who need them the most.
</b>
</p>
  </div>



<br />


<div id='Dpara'      data-aos="fade-zoom-in">

<p>
<b>
Whether you choose to donate a small or large amount, your contribution makes a difference. Even the smallest donation can go a long way towards helping us achieve our goals and make a positive impact.

We are committed to being transparent and accountable for the use of your donation. Our team works tirelessly to ensure that every dollar is used efficiently and effectively to maximize its impact. We are committed to making a difference in the lives of those we serve, and we couldn't do it without your support.
</b>
</p>
  </div>

  
  </>
}
   
   </>
  )
}
