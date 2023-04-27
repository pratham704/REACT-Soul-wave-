import React from 'react';
import {
  MDBFooter,
  MDBContainer,

  MDBBtn
} from 'mdb-react-ui-kit';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';







export default function Footer() {
  return (
    
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/teamhelpinghandsblh/?locale=hi_IN' role='button'>
            <FacebookIcon/>
          </MDBBtn>

        

          <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/helpinghands_blh/' role='button'>
            <InstagramIcon/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.google.co.in/search?q=helping+hands+bailhongal&source=lmns&bih=746&biw=1536&hl=en&sa=X&ved=2ahUKEwjfyqGb0Lr9AhUNA7cAHTqTC6sQ_AUoAHoECAEQAA' role='button'>
            <GoogleIcon/>
          </MDBBtn>
          
          <MDBBtn outline color="light" floating className='m-1' href='https://www.youtube.com/watch?v=SPYlafN2kNk&t=1s&ab_channel=SangameshASavadattimath' role='button'>
            <YouTubeIcon/>
          </MDBBtn>


        </section>

    

        <section className='mb-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
            voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>

        <section className=''>
      
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © ALL RIGHTS RESERVED:
   
      </div>
    </MDBFooter>
  );
}