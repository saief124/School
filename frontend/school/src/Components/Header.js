import React from 'react'
import {Navbar, Nav, Button} from 'react-bootstrap'

const Header=()=>{
    return(
       
            <Nav>
            <Nav.Item> <Nav.Link href="/">Home  </Nav.Link> </Nav.Item>
            <Nav.Item> <Nav.Link href="/students">Student  </Nav.Link> </Nav.Item>
            <Nav.Item><Nav.Link href="/instructors">Instructor  </Nav.Link></Nav.Item>
            </Nav>
        
        // <h1>Test</h1>
    )
}

export default Header