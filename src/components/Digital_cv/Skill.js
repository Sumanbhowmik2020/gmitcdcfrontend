import React, { useState, useEffect } from 'react'
import axios from 'axios'
//import Navbars from "./Navbars";
import 'bootstrap/dist/css/bootstrap.css';

function Skill(email) {
  const [studentskilllist, setStudentskillList] = useState([]);
  let authuser = sessionStorage.getItem('useremail');
  if(authuser==null) authuser=email.email

  //Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    axios.get('http://localhost:4500/skillinfo/search/' +authuser)
      .then(response => {
        console.log(response.data)
        setStudentskillList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  function viewStudentskillList() {
    return studentskilllist.map((currentrow, index) => {

      return (
        <tr key={index}>
          {/* <td style={{border:"1px solid black", align:"center"}}>{currentrow.studentname}</td>
          <td style={{border:"1px solid black", align:"center"}}>{currentrow.studentemail}</td>
          <td style={{border:"1px solid black", align:"center"}}>{currentrow.studentmobile}</td> */}
          <td style={{border:"1px solid black", align:"center"}}>{currentrow.studentskillname}</td>
          <td style={{border:"1px solid black", align:"center"}}>{currentrow.studentorganization}</td>
          <td style={{border:"1px solid black", align:"center"}}>{currentrow.stdentprojectname}</td>
          <td style={{border:"1px solid black", align:"center"}}>{currentrow.studentprojecturl}</td> 
          <td style={{border:"1px solid black", align:"center"}}>{currentrow.studentprojectnote}</td> 
          {/* <td style={{border:"1px solid black", align:"center"}}><img src={currentrow.studentprofilepic} style={{width:"70px"}}/> </td>  */}
        </tr>
      );
    });
  }

  return (
    <div>
  {/* //    <Navbars /> */}
      <br />
      <h4>Skill DETAILS</h4>
      <table style={{border:"1px solid black", align:"center", width:"60%"}} >
        <thead >
          <tr  >
            <th style={{border:"1px solid black", align:"center"}}>Skill Name</th>
            <th style={{border:"1px solid black", align:"center"}}>organization</th>
            <th style={{border:"1px solid black", align:"center"}}>Project Name</th>
            <th style={{border:"1px solid black", align:"center"}}>project url</th>
            <th style={{border:"1px solid black", align:"center"}}>Project note</th>
            {/* <th style={{border:"1px solid black", align:"center"}}>Github</th>
            <th style={{border:"1px solid black", align:"center"}}>Linkedin</th>
            <th style={{border:"1px solid black", align:"center"}}>Profilepic</th> */}
            
          </tr>
        </thead>

        <tbody>
          {viewStudentskillList()}
        </tbody>
      </table>
    </div>
  )
}


export default Skill