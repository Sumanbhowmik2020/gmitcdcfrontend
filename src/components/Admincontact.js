import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbars from './Navbars';
// import NavigationBar from './NavigationBar';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Admincontact() {
  const [contactlist, setContactList] = useState([]);

  //Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    axios.get('https://backendcdcgmit.herokuapp.com/contact')
      .then(response => {
        console.log(response.data)
        setContactList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  function viewContactList() {
    return contactlist.map((currentrow, index) => {
      return (
        <tr key={index}>
          <td>{currentrow.contactname}</td>
          <td>{currentrow.contactemail}</td>
          <td>{currentrow.contactmobile}</td>
          <td>{currentrow.contactsubject}</td>
          <td>{currentrow.contactmessage}</td>

          <a class="mailto" href={`mailto:${currentrow.contactemail}`}>Mail</a>
        </tr>
      );
    });
  }

  return (
    <div>
      {/* <NavigationBar /> */}
      <Navbars/>
      <br />
      <h3 align="center">ALL USER DETAILS</h3>
      {/* <table border="1" align="center" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th> */}
            {/* <th>DOB</th>
            <th>Gender</th>
            <th>Country</th>
            <th>Address</th> */}
          {/* </tr>
        </thead> */}
        <Container style={{overflowX:'auto'}}>
        <Table striped bordered hover variant="white">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Mobile</th>
      <th>Subject</th>
      <th>Message</th>
      <th>Reply</th>
    </tr>
  </thead>

        <tbody>
          {viewContactList()}
        </tbody>
      </Table>
      </Container>
    </div>
  )
}


export default Admincontact;