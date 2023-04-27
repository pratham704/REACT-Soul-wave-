import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import './Nav.css';




export default function Navbars() {

  
  return (
   <>
  
   <Navbar bg="secondary" variant='dark' expand="lg" className='active' >
      <Container fluid>
        <Navbar.Brand    className='Soulwave'><strong>“Soul Wave-The Helping Hands of BLH”</strong></Navbar.Brand>



        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '200px',}}
            navbarScroll
          >           
          
          
            <Nav.Link as={Link} exact="true" to="/">HOME </Nav.Link>
            <Nav.Link as={Link} exact="true" to="/work">OUR WORK </Nav.Link>
            <Nav.Link as={Link} exact="true" to="/aboutus">ABOUT US  </Nav.Link>
            <Nav.Link as={Link} exact="true" to="/donation">DONATION</Nav.Link>
            <Nav.Link as={Link} exact="true" to="/join">JOIN US </Nav.Link>
            
 

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
   </>
  )
}
