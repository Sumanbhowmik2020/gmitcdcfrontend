import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbars from './Navbars';
// import NavigationBar from './NavigationBar';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';

function DisplayAll() {
  const [studentlist, setStudentList] = useState([]);

  //Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    axios.get('https://backendcdcgmit.herokuapp.com/student/')
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
      if (currentrow.status === "0") {
        return (
          <tr key={index}>
            {/* <td>{currentrow.nname}</td> */}

    <td >{currentrow.studentname}</td>
          <td >{currentrow.studentemail}</td>
          <td >{currentrow.studentmobile}</td>
          <td >{currentrow.studentdepartment}</td>
          <td >{currentrow.studentrollnumber}</td>
          <td >{currentrow.studentsession}</td>

            <td><button onClick={() => approveStudents(index)} className="btn btn-success" >Approve</button> </td>
            <a class="mailto" href={`mailto:${currentrow.studentemail}`}>Mail</a>
          </tr>
        );
      }
      else if (currentrow.status === "1") {
        return (
          <tr key={index}>
            <td >{currentrow.studentname}</td>
          <td >{currentrow.studentemail}</td>
          <td >{currentrow.studentmobile}</td>
          <td >{currentrow.studentdepartment}</td>
          <td >{currentrow.studentrollnumber}</td>
          <td >{currentrow.studentsession}</td>

            <td><button onClick={() => rejectStudents(index)} className="btn btn-warning" >Deny</button> </td>
            <a class="mailto" href={`mailto:${currentrow.studentemail}`}>Mail</a>
          </tr>
        );
      }

      else if (currentrow.status === "-1") {
        return (
          <tr key={index}>
             <td >{currentrow.studentname}</td>
          <td >{currentrow.studentemail}</td>
          <td >{currentrow.studentmobile}</td>
          <td >{currentrow.studentdepartment}</td>
          <td >{currentrow.studentrollnumber}</td>
          <td >{currentrow.studentsession}</td>

           
            <td><button onClick={() => approveStudents(index)} className="btn btn-success" >Approve</button> </td>
            <a class="mailto" href={`mailto:${currentrow.studentemail}`}>Mail</a>
          </tr>
        );
      }
    });
  }


  // function removeRow(index) {
  //   var templist = [...studentlist;
  //   let re = templist.splice(index, 1);
  //   // console.log("hello")
  //   // console.log(templist)
  //   axios.delete('https://backendcdcgmit.herokuapp.com/placementinfo/remove/' + re[0].studentemail)
  //     .then(res => {
  //       console.log(res.data)
  //       setMsg("News Deleted Succesfully.");
  //       setStudentList(templist)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //       setMsg('INVALID NEWS ID');
  //     })
  // }
  function approveStudents(index) {
    var temp = [...studentlist];
    axios.put('https://backendcdcgmit.herokuapp.com/student/approve/' + temp[index]._id)
      .then(response => {
        console.log(response)
        temp[index].status = "1"
        setStudentList(temp);
      })
      .catch(err => {
        console.log(err);
      })
  }
  function rejectStudents(index) {
    var temp = [...studentlist];
    axios.put('https://backendcdcgmit.herokuapp.com/student/reject/' + temp[index]._id)
      .then(response => {
        // console.log(response)
        temp[index].status = "-1"
        setStudentList(temp);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div>
      {/* <NavigationBar /> */}
      <Navbars />
      <br />
      <h3 align="center">ALL INTERNSHIP STUDENT DETAILS</h3>
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
      <div className="container text-center" >
        <Table striped bordered hover variant="white">
          <thead>
            <tr>
              <th >Name</th>
              <th >Email</th>
              <th >Mobile</th>
              <th >Department</th>
              <th >RollNumber</th>
              <th >Session</th>
              <th>Action</th>
              <th>Mail</th>
            </tr>
          </thead>

          <tbody>
            {viewStudentList()}
          </tbody>
        </Table>
      </div>
    </div>
  )
}


export default DisplayAll