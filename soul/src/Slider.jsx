import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Image.css';
import img from './soulPic.jpg'

import { useNavigate } from 'react-router-dom';

export default function Slider() {
  const Navigate= useNavigate();

  return (
   <>

   
   <Carousel className='Cor'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img}

          alt="First slide"
        />
        <Carousel.Caption>
          <h3>F</h3>
          <p>N</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.socialchangecentral.com/wp-content/uploads/2021/04/3-Steps-to-Engaging-Others-in-Your-Social-Change-Mission.jpg"

          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>S</h3>
          <p>L.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>T</h3>
          <p>
            P
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   <br />
<br />
<br />
<br />

   
    <div className='Para    '   >



<div className='Parasub'  >
    <i >
    
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cumque suscipit quos odio aut fugiorporis dignissimos cupiditate nostrum!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, labore voluptate sequi est qui soluta officiis, officia aspernatur, porro numquam maxime unde id ipsam atque corrupti a ratione! Ut, ipsam.
</i>
</div>



</div>

   <br />
   <br />
   <br />

 <div className='Parents'  data-aos="fade-right"
    data-aos-offset="200"
    data-aos-easing="ease-in-sine"
    data-aos-once="false"    
     
   
     >






    <div className="Child1"  >
<h1><i><u>ABOUT US</u></i></h1>

<br />

<br />


<p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque explicabo consectetur veritatis voluptatem consequuntur pariatur ipsa ipsam accusamus tempora. Eos porro consequatur distinctio labore, dicta nulla fugiat sunt odit ipsam.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, iusto. Assumenda, fuga, hic, vel repellendus minus ipsam distinctio incidunt voluptatibus adipisc
</p>



    </div>
<br />


<div className="btnss" ><button type="button" class="btn btn-primary" onClick={()=>{
                                                              Navigate('/aboutus')
        }}>READ MORE</button></div>
    

    <div className="Child2" >

    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.675699176988!2d74.85619831477456!3d15.821044989034752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf51ef114ab707%3A0xea78a25620fb2a7b!2sBhavana%20Beauty%20Parlour!5e0!3m2!1sen!2sin!4v1677674895089!5m2!1sen!2sin"
        width="90%"
        height="70%"
        style={{ border: "0" }}
        allowfullscreen=""
        title='bkujb'
        loading="lazy"
      ></iframe>
    </div>




 </div>




   </>
  )
}
