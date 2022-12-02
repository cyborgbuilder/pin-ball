import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav } from 'react-bootstrap'
import './Navigation.css'

function Navigation() {
  return (
    <div>
         <Navbar  bg="myTra" variant='dark'  expand='lg' sticky='top'>
             

             <Navbar.Toggle style={{marginLeft: '10px'}} />
             <Navbar.Collapse>
             <Nav style={{}}>
                <div className='links links-one'>
                <Nav.Link style={{  color: 'white',  letterSpacing: '1.2px'}} href="">Home</Nav.Link>
                 <Nav.Link style={{ color: 'white',letterSpacing: '1.2px'}} href="">Video</Nav.Link>
                 <Nav.Link style={{ color: 'white',letterSpacing: '1.2px'}} href="">NFT Items</Nav.Link>
                 <Nav.Link style={{ color: 'white',letterSpacing: '1.2px'}} href="">HTD</Nav.Link>
                
                </div>
                 
             </Nav>
             </Navbar.Collapse >

             <div className='logo_nav links-three'>
                 <img src='/images/ic_logo.png' />
             </div>

             <Navbar.Collapse>
             <Nav style={{}}>
                <div className='links links-two'>
                <Nav.Link style={{  color: 'white',  letterSpacing: '1.2px'}} href="">Home</Nav.Link>
                 <Nav.Link style={{ color: 'white',letterSpacing: '1.2px'}} href="">Video</Nav.Link>
                 <Nav.Link style={{ color: 'white',letterSpacing: '1.2px'}} href="">NFT Items</Nav.Link>
                 <Nav.Link style={{ color: 'white',letterSpacing: '1.2px'}} href="">HTD</Nav.Link>
                
                </div>
                 
             </Nav>
             </Navbar.Collapse >
             
             
             
             </Navbar>
    </div>
  )
}

export default Navigation