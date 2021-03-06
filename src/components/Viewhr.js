import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbars from './Navbars';
// import NavigationBar from './NavigationBar';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Viewhr() {
  const [hrlist, setHrList] = useState([]);

  //Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    axios.get('https://backendcdcgmit.herokuapp.com/hr')
      .then(response => {
        console.log(response.data)
        setHrList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  function viewHrList() {
    return hrlist.map((currentrow, index) => {
      return (
        <tr key={index}>
          <td>{currentrow.hrname}</td>
          <td>{currentrow.hremail}</td>
          <td>{currentrow.hrmobile}</td>
          <td><img src={currentrow.hrprofilepic} width={60} /></td>
          <td>{currentrow.hrcompany}</td>

          
        </tr>
      );
    });
  }

  return (
    <div>
      {/* <NavigationBar /> */}
      <Navbars/>
      <br />
      <h3 align="center">ALL HR DETAILS</h3>
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
      <th>PROFILE PIC</th>
      <th>COMPANY</th>
      
    </tr>
  </thead>

        <tbody>
          {viewHrList()}
        </tbody>
      </Table>
      </Container>
    </div>
  )
}


export default Viewhr;