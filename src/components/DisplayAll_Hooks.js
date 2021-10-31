import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbars from "./Navbars";
import 'bootstrap/dist/css/bootstrap.css';

function DisplayAll() {
  const [studentlist, setStudentList] = useState([]);

  //Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    axios.get('https://backendcdcgmit.herokuapp.com/student')
      .then(response => {
        console.log(response.data)
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
          <td style={{border:"1px solid black", align:"center"}}>{currentrow.studentname}</td>
          <td style={{border:"1px solid black", align:"center"}}>{currentrow.studentemail}</td>
          <td style={{border:"1px solid black", align:"center"}}>{currentrow.studentmobile}</td>
          <td style={{border:"1px solid black", align:"center"}}>{currentrow.studentdepartment}</td>
          <td style={{border:"1px solid black", align:"center"}}>{currentrow.studentrollnumber}</td>
          <td style={{border:"1px solid black", align:"center"}}>{currentrow.studentsession}</td> 
        </tr>
      );
    });
  }

  return (
    <div>
      <Navbars />
      <br />
      <h3>ALL EMPLOYEE DETAILS</h3>
      <table border="1" align="center">
        <thead>
          <tr>
            <th style={{border:"1px solid black", align:"center"}}>Name</th>
            <th style={{border:"1px solid black", align:"center"}}>Email</th>
            <th style={{border:"1px solid black", align:"center"}}>Mobile</th>
            <th style={{border:"1px solid black", align:"center"}}>Department</th>
            <th style={{border:"1px solid black", align:"center"}}>RollNumber</th>
            <th style={{border:"1px solid black", align:"center"}}>Session</th>
            
          </tr>
        </thead>

        <tbody>
          {viewStudentList()}
        </tbody>
      </table>
    </div>
  )
}


export default DisplayAll