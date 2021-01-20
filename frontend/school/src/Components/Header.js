import React from 'react'
import {Navbar, Nav, Button, NavDropdown} from 'react-bootstrap'

const handleLoginRender=(isLoggedIn)=>{
    if (isLoggedIn){
        return(
            <>
            <Nav.Link href="/logout">Logout</Nav.Link><br></br>
            <Nav.Link href="/instructors">Instructor Page</Nav.Link>
            </>
        )
    }else{
        return(
            <>
            <Nav.Link href="/login">Login</Nav.Link>
            </>
        )
    }
}
const Header=(props)=>{
   
    return(
       
            <Navbar bg="light" expand="lg" sticky="top">
               
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            </Navbar.Collapse>
            
            <Nav >
            <Nav.Link  href="/">Home  </Nav.Link> 
                <NavDropdown title="Instructor " id="basic-nav-dropdown">
                    {handleLoginRender(props.isLoggedIn)} 
                    
                </NavDropdown>
                <NavDropdown title="Student " id="basic-nav-dropdown"> 
                    
                    
                    <NavDropdown.Item href="/studentlogin">  Login</NavDropdown.Item>
                </NavDropdown> 

            
            {/* <Nav.Link className="mr-auto" href="/students">Student  </Nav.Link>   */}
            {/* <Nav.Link className="mr-auto" href="/instructors">Instructor  </Nav.Link> */}
            {/* {handleLoginRender(props.isLoggedIn)} */}
            </Nav>
            </Navbar>
        
        // <h1>Test</h1>
    )
}

export default Header