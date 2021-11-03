import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbars from "./Navbars";
import 'bootstrap/dist/css/bootstrap.css';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';


function DisplayAll() {
  const [studentlist, setStudentList] = useState([]);

  //Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    axios.get('https://backendcdcgmit.herokuapp.com/student')
      .then(response => {
        // console.log(response.data)
        setStudentList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  function viewStudentList() {
    return studentlist.map((currentrow, index) => {
      return (
        <tr key={index}>
          <td >{currentrow.studentname}</td>
          <td >{currentrow.studentemail}</td>
          <td >{currentrow.studentmobile}</td>
          <td >{currentrow.studentdepartment}</td>
          <td >{currentrow.studentrollnumber}</td>
          <td >{currentrow.studentsession}</td>
        </tr>
      );
    });
  }

  return (
    <div>
      <Navbars />
      <br />
      <h3><center>ALL USER DETAILS</center></h3>
      <Container style={{ overflowX: 'auto' }}>
        <Table striped bordered hover variant="white">
          <thead>
            <tr>
              <th >Name</th>
              <th >Email</th>
              <th >Mobile</th>
              <th >Department</th>
              <th >RollNumber</th>
              <th >Session</th>

            </tr>
          </thead>

          <tbody>
            {viewStudentList()}
          </tbody>
        </Table>
      </Container>
    </div>
  )
}


export default DisplayAll