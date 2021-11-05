import React from 'react';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
import img1 from '../img/gmit.png';

function Navbars() {
  let authuser = sessionStorage.getItem('Key_Veriable')
  let name = sessionStorage.getItem('username')
  let hrcompany = sessionStorage.getItem('hrcompany')
  //console.log(authuser)
  if (authuser === 'ADMIN') {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" style={{ minHeight: '7%' }}>

        <Navbar.Brand href="#home"><div>
          <img src={img1} style={{ width: "50px", height: "50px" }} />
        </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <Nav.Link className='unav' as={Link} to="/adminafterlogin">ADMIN HOME</Nav.Link>
            <Nav.Link className='unav' as={Link} to="/displayall">DISPLAY ALL</Nav.Link>
            <Nav.Link className='unav' as={Link} to="/search">SEARCH</Nav.Link>
            <Nav.Link className='unav' as={Link} to="/delete" >DELETE</Nav.Link>
            <Nav.Link className='unav' as={Link} to="/Searchresume">SEARCH RESUME</Nav.Link>
            <Nav.Link className='unav' as={Link} to="/Placementinfo">UPLOAD Placement</Nav.Link>
            <Nav.Link className='unav' as={Link} to="/Viewplacement">VIEW Placement</Nav.Link>
            <Nav.Link className='unav' as={Link} to="/Admincontact">Message</Nav.Link>
            <Nav.Link className='unav' as={Link} to="/allhr">ALL HR</Nav.Link>
            <Nav.Link className='unav' as={Link} to="/viewallskill">STUDENT SKILL</Nav.Link>
            <Nav.Link className='unav' as={Link} to="/Viewadmininternship">INTERNSHIP LIST</Nav.Link>

          </Nav>
        </Navbar.Collapse>

        <Nav.Link className='unav' as={Link} to="/Addhr" style={{ color: 'green' }}>ADD HR</Nav.Link>
        <Nav.Link className='unav' as={Link} to="/logout" style={{ color: 'red' }}>LOGOUT</Nav.Link>

      </Navbar>
    )

  }
  else if (authuser === 'USER') {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ minHeight: '7%' }}>

        <Navbar.Brand href="#home"><div>
          <img src={img1} style={{ width: "50px", height: "50px" }} />
        </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <Nav.Link className='unav' as={Link} to="/userafterlogin">USER HOME</Nav.Link>
            <Nav.Link className='unav' as={Link} to="#">VIEW PROFILE </Nav.Link>
            <Nav.Link className='unav' as={Link} to="/updateprofile">UPDATE PROFILE</Nav.Link>
            <Nav.Link className='unav' as={Link} to="/basicinfo">BASIC INFO</Nav.Link>
            <Nav.Link className='unav' as={Link} to="/academic">ACADEMIC INFO</Nav.Link>
            <Nav.Link className='unav' as={Link} to="/skillinfo">SKILL INFO</Nav.Link>
            <Nav.Link className='unav' as={Link} to="/digitalcv">Digital CV</Nav.Link>


          </Nav>
        </Navbar.Collapse>
        <Nav.Link className='unav' as={Link} to="/userafterlogin">{name}</Nav.Link>
        <Nav.Link className='unav' as={Link} to="/logout" style={{ color: 'red' }}>LOGOUT</Nav.Link>

      </Navbar>
    )

  }

  else if (authuser === 'HR') {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ minHeight: '7%' }}>

        <Navbar.Brand href="#home"><div>
          <img src={img1} style={{ width: "50px", height: "50px" }} />
        </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <Nav.Link className='unav' as={Link} to="/hrafterlogin">HR HOME</Nav.Link>
            <Nav.Link className='unav' as={Link} to="/Hrsearchresume">SEARCH RESUME</Nav.Link>
            <Nav.Link className='unav' as={Link} to="/Displayinternship">SELECTED STUDENT</Nav.Link>

          </Nav>
        </Navbar.Collapse>
        <Nav.Link className='unav' as={Link} to="/hrafterlogin">{hrcompany}</Nav.Link>
        <Nav.Link className='unav' as={Link} to="/logout" style={{ color: 'red' }}>LOGOUT</Nav.Link>

      </Navbar>
    )

  }
  else {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ minHeight: '7%' }}>
        <Navbar.Brand href="#home"><div>
          <img src={img1} style={{ width: "50px", height: "50px" }} />
        </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <Nav.Link className='unav' as={Link} to="/" style={{}}>Home</Nav.Link>
            <Nav.Link className='unav' as={Link} to="/Login">Login</Nav.Link>
            <Nav.Link className='unav' as={Link} to="/Signup">Signup</Nav.Link>
            <Nav.Link className='unav' as={Link} to="/Internshipstudent">Internship</Nav.Link>
            <Nav.Link className='unav' as={Link} to="/ContactUS">Contactus</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form inline>
        <Nav.Link className='unav' as={Link} to="/hrlogin">HR LOGIN</Nav.Link>
          <Nav.Link className='unav' as={Link} to="/adminlogin">ADMIN LOGIN</Nav.Link>
        </Form>
      </Navbar>
    )
  }
}

export default Navbars;
