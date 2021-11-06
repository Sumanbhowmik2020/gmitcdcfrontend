import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbars from './Navbars';
// import NavigationBar from './NavigationBar';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';

function Viewadmininternship() {
  const [internshiplist, setInternshipList] = useState([]);
  // const [newslist, setNewsList] = useState([]);
  const [msg, setMsg] = useState("");

  //Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    axios.get('https://backendcdcgmit.herokuapp.com/jobinfo/')
      .then(response => {
        console.log(response.data)
        setInternshipList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])




  function viewInternshipList() {
    return internshiplist.map((currentrow, index) => {
      if (currentrow.status === "0") {
        return (
          <tr key={index}>
            {/* <td>{currentrow.nname}</td> */}

            <td>{currentrow.studentname}</td>
            <td>{currentrow.studentemail}</td>
            <td>{currentrow.studentdept}</td>
            <td>{currentrow.studentsession}</td>
            <td>{currentrow.studentskillname}</td>
            <td>{currentrow.studentcompany}</td>
            <td>{currentrow.studentdate}</td>
            <td><img src={currentrow.studentprofilepic} width={60} /></td>
            <td><button onClick={() => approveStudents(index)} className="btn btn-success" >View</button> </td>
            <a class="mailto" href={`mailto:${currentrow.studentemail}`}>Mail</a>
          </tr>
        );
      }
      else if (currentrow.status === "1") {
        return (
          <tr key={index}>
            <td>{currentrow.studentname}</td>
            <td>{currentrow.studentemail}</td>
            <td>{currentrow.studentdept}</td>
            <td>{currentrow.studentsession}</td>
            <td>{currentrow.studentskillname}</td>
            <td>{currentrow.studentcompany}</td>
            <td>{currentrow.studentdate}</td>
            <td><img src={currentrow.studentprofilepic} width={60} /></td>
            <td><button onClick={() => rejectStudents(index)} className="btn btn-warning" >Hide</button> </td>
            <a class="mailto" href={`mailto:${currentrow.studentemail}`}>Mail</a>
          </tr>
        );
      }

      else if (currentrow.status === "-1") {
        return (
          <tr key={index}>
            <td>{currentrow.studentname}</td>
            <td>{currentrow.studentemail}</td>
            <td>{currentrow.studentdept}</td>
            <td>{currentrow.studentsession}</td>
            <td>{currentrow.studentskillname}</td>
            <td>{currentrow.studentcompany}</td>
            <td>{currentrow.studentdate}</td>
            <td><img src={currentrow.studentprofilepic} width={60} /></td>
            <td><button onClick={() => approveStudents(index)} className="btn btn-success" >View</button> </td>
            <a class="mailto" href={`mailto:${currentrow.studentemail}`}>Mail</a>
          </tr>
        );
      }
    });
  }


  // function removeRow(index) {
  //   var templist = [...internshiplist];
  //   let re = templist.splice(index, 1);
  //   // console.log("hello")
  //   // console.log(templist)
  //   axios.delete('https://backendcdcgmit.herokuapp.com/placementinfo/remove/' + re[0].studentemail)
  //     .then(res => {
  //       console.log(res.data)
  //       setMsg("News Deleted Succesfully.");
  //       setInternshipList(templist)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //       setMsg('INVALID NEWS ID');
  //     })
  // }
  function approveStudents(index) {
    var temp = [...internshiplist];
    axios.put('https://backendcdcgmit.herokuapp.com/jobinfo/approve/' + temp[index]._id)
      .then(response => {
        console.log(response)
        temp[index].status = "1"
        setInternshipList(temp);
      })
      .catch(err => {
        console.log(err);
      })
  }
  function rejectStudents(index) {
    var temp = [...internshiplist];
    axios.put('https://backendcdcgmit.herokuapp.com/jobinfo/reject/' + temp[index]._id)
      .then(response => {
        // console.log(response)
        temp[index].status = "-1"
        setInternshipList(temp);
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
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Session</th>
              <th>Skill Name</th>
              <th>Company Name</th>
              <th>Interview Date<br />
                (YYYY-MM-DD)
              </th>
              <th>PROFILE PIC</th>
              <th>Action</th>
              <th>Mail</th>
            </tr>
          </thead>

          <tbody>
            {viewInternshipList()}
          </tbody>
        </Table>
      </div>
    </div>
  )
}


export default Viewadmininternship