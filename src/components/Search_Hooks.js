import React, { useState } from 'react'
import axios from 'axios'
import Navbars from "./Navbars";

function Search() {
  const [studentlist, setStudentList] = useState([]);
  const [eemail, setStudentEmail] = useState("");
  const [status, setStatus] = useState(false);
  const [msg, setMessage] = useState("");

  const onChangeStudentEmail = (e) => {
    setStudentEmail(e.target.value);
    setMessage(''); //REMOVE ERROE MSG
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    axios.get('http://localhost:4500/student/search/' + eemail)
      .then(res => {
        console.log(res.data)
        setStudentList(res.data)
        setStatus(true)
      })
      .catch(err => {
        console.log(err)
        setMessage('INVALID EMAIL ID')
      })

    setStudentEmail('')
  }

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

  if (status === false) {
    return (
    <div>
      <Navbars />
      <br />
      <h3>ENTER EMAIL ID FOR SEARCH</h3>
      <b style={{ color: "red" }}>{msg}</b>
      <form onSubmit={handleSubmit}>
        <input type="email" value={eemail}
          onChange={onChangeStudentEmail}
          placeholder="EMAIL ID"
          required />
        <br />
        <br />
        <input type="submit" value="SEARCH STUDENT" className="btn btn-success" />
      </form>
    </div>);
  }
  else {
    return (
      <div>
        <Navbars />
        <br />
        <h3>ENTER EMAIL ID FOR SEARCH</h3>
        <b>{msg}</b>
        <form onSubmit={handleSubmit}>
          <input type="email" value={eemail}
            onChange={onChangeStudentEmail} placeholder="EMAIL ID"
            required />
          <br />
          <br />
          <input type="submit" value="SEARCH STUDENT" />
        </form>
        <br /><br />

        <h3>EMPLOYEE DETAILS</h3>
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
}

export default Search
