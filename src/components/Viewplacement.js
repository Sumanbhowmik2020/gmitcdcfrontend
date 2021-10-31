import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbars from './Navbars';
// import NavigationBar from './NavigationBar';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';

function Viewplacement() {
  const [placementlist, setPlacementList] = useState([]);
  // const [newslist, setNewsList] = useState([]);
  const [msg, setMsg] = useState("");

  //Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    axios.get('https://backendcdcgmit.herokuapp.com/placementinfo/')
      .then(response => {
        console.log(response.data)
        setPlacementList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])




  function viewPlacementList() {
    return placementlist.map((currentrow, index) => {
      if (currentrow.status === "0") {
        return (
          <tr key={index}>
            {/* <td>{currentrow.nname}</td> */}
            
            <td>{currentrow.studentname}</td>
            <td>{currentrow.studentemail}</td>
            <td>{currentrow.studentcompany}</td>
            <td>{currentrow.studentsalary}</td>
            <td>{currentrow.studentpassout}</td>
            <td>{currentrow.studedentdept}</td>
            <td>{currentrow.studentdate}</td>

            <td><img src={currentrow.studentprofilepic} width={50} /></td>
            <td><button onClick={() => approveStudents(index)} className="btn btn-success" >View</button> </td>
            <td><button onClick={() => removeRow(index)} className="btn btn-danger" >Delete</button> </td>
          </tr>
        );
      }
      else if (currentrow.status ==="1") {
        return (
          <tr key={index}>
            {/* <td>{currentrow.nname}</td> */}
            <td>{currentrow.studentname}</td>
            <td>{currentrow.studentemail}</td>
            <td>{currentrow.studentcompany}</td>
            <td>{currentrow.studentsalary}</td>
            <td>{currentrow.studentpassout}</td>
            <td>{currentrow.studedentdept}</td>
            <td>{currentrow.studentdate}</td>

            <td><img src={currentrow.studentprofilepic} width={50} /></td>
            <td><button onClick={() => rejectStudents(index)} className="btn btn-warning" >Hide</button> </td>
            <td><button onClick={() => removeRow(index)} className="btn btn-danger" >Delete</button> </td>
          </tr>
        );
      }

      else if (currentrow.status ==="-1") {
        return (
          <tr key={index}>
            {/* <td>{currentrow.nname}</td> */}
            <td>{currentrow.studentname}</td>
            <td>{currentrow.studentemail}</td>
            <td>{currentrow.studentcompany}</td>
            <td>{currentrow.studentsalary}</td>
            <td>{currentrow.studentpassout}</td>
            <td>{currentrow.studedentdept}</td>
            <td>{currentrow.studentdate}</td>

            <td><img src={currentrow.studentprofilepic} width={50} /></td>
            <td><button onClick={() => approveStudents(index)} className="btn btn-success" >View</button> </td>
            <td><button onClick={() => removeRow(index)} className="btn btn-danger" >Delete</button> </td>
          </tr>
        );
      }
    });
  }


  function removeRow(index) {
    var templist = [...placementlist];
    let re = templist.splice(index, 1);
    // console.log("hello")
    // console.log(templist)
    axios.delete('https://backendcdcgmit.herokuapp.com/placementinfo/remove/' + re[0].studentemail)
      .then(res => {
        console.log(res.data)
        setMsg("News Deleted Succesfully.");
        setPlacementList(templist)
      })
      .catch(err => {
        console.log(err)
        setMsg('INVALID NEWS ID');
      })
  }
  function approveStudents(index) {
    var temp = [...placementlist];
    axios.put('https://backendcdcgmit.herokuapp.com/placementinfo/approve/' + temp[index].studentemail)
      .then(response => {
        console.log(response)
        temp[index].status = "1"
        setPlacementList(temp);
      })
      .catch(err => {
        console.log(err);
      })
  }
  function rejectStudents(index) {
    var temp = [...placementlist];
    axios.put('https://backendcdcgmit.herokuapp.com/placementinfo/reject/' + temp[index].studentemail)
      .then(response => {
        // console.log(response)
        temp[index].status = "-1"
        setPlacementList(temp);
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
      <h3 align="center">ALL PLACED STUDENT DETAILS</h3>
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
      <Container style={{ overflowX: 'auto' }}>
        <Table striped bordered hover variant="white">
          <thead>
            <tr>
              <th>Name</th>
              {/* <th>Name</th> */}
              <th>Email</th>
              <th>Company</th>
              <th>Salary</th>
              <th>Passout</th>
              <th>Department</th>
              <th>Date</th>
              <th>Image</th>
              <th>Action</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {viewPlacementList()}
          </tbody>
        </Table>
      </Container>
    </div>
  )
}


export default Viewplacement