import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

const handleLoginRender=(isLoggedIn)=>{
    
    const blue={backgroundColor:"#007BFF"}
    if (isLoggedIn){
        return(
            <div style={blue}>
            <Nav.Link href="/logout">Logout</Nav.Link><br></br>
            <Nav.Link href="/instructors">My Courses</Nav.Link>
            <Nav.Link href="/mystudents">My Students</Nav.Link>
            </div>
        )
    }else{
        return(
            <div style={blue}>
            <Nav.Link href="/login">Login</Nav.Link>
            </div>
        )
    }
}

const handleStudentLognRender=(studentisLoggedIn)=>{
   
    const blue={backgroundColor:"#007BFF"}
    if (studentisLoggedIn){
        return(
            <div style={blue}>
            <Nav.Link href="/studentlogout" >Logout</Nav.Link><br></br>
            <Nav.Link href="/students" >My Courses</Nav.Link>
            <Nav.Link href="/studentprofile" >My Notes</Nav.Link>
            
            </div>
        )
    }else{
        return(
            <div style={blue}>
            <Nav.Link href="/studentlogin">Login</Nav.Link>
            </div>
        )
    }

}
const Header=(props)=>{
    
    return(
       
            <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
               
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            </Navbar.Collapse>
            
            <Nav className="mr-auto">
            <Nav.Link  href="/" > Home </Nav.Link> 
                <NavDropdown title="Instructor " id="basic-nav-dropdown" >
                    {handleLoginRender(props.isLoggedIn)} 
                    
                </NavDropdown >
                <NavDropdown title="Student " id="basic-nav-dropdown" > 
                    {handleStudentLognRender(props.studentisLoggedIn)}
                    
                </NavDropdown> 
            </Nav>
            </Navbar>
   
    )
}

export default Header