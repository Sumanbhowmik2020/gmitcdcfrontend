import React, { useState } from 'react'
import axios from 'axios'
import Navbars from "./Navbars";

function Searchresume() {
  const [studentlist, setStudentList] = useState([]);
//  const [eemail, setStudentEmail] = useState("");
  const [eskill, setStudentSkill]= useState("");
  const [status, setStatus] = useState(false);
  const [msg, setMessage] = useState("");

  ;

    const onChangeStudentSkill = (e) => {
        setStudentSkill(e.target.value);
    setMessage(''); //REMOVE ERROE MSG
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    axios.get('https://backendcdcgmit.herokuapp.com/skillinfo/skillsearch/' + eskill)
      .then(res => {
        console.log(res.data)
        setStudentList(res.data)
        setStatus(true)
      })
      .catch(err => {
        console.log(err)
        setMessage('INVALID EMAIL ID')
      })

    setStudentSkill('')
  }

  function viewStudentskillList() {
    return studentlist.map((currentrow, index) => {
      return (
        <tr key={index}>
          <td>{currentrow.studentname}</td>
          <td>{currentrow.studentemail}</td>
          <td>{currentrow.studentdepartment}</td>
          <td>{currentrow.studentsession}</td>
          <td>{currentrow.studentskillname}</td>
          
        </tr>
      );
    });
  }

  if (status === false) {
    return (
    <div>
      <Navbars />
      <br />
      <h3>ENTER Skill FOR Resume SEARCH</h3>
      <b style={{ color: "red" }}>{msg}</b>
      <form onSubmit={handleSubmit}>
        <input type="skill" value={eskill}
          onChange={onChangeStudentSkill}
          placeholder="Skill"
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
        <h3>ENTER Skill  FOR Resume SEARCH</h3>
        <b>{msg}</b>
        <form onSubmit={handleSubmit}>
          <input type="skill" value={eskill}
            onChange={onChangeStudentSkill} placeholder="EMAIL ID"
            required />
          <br />
          <br />
          <input type="submit" value="SEARCH STUDENT" />
        </form>
        <br /><br />

        <h3>STUDENT DETAILS</h3>
        <table border="1" align="center">
          <thead>
            <tr>
            <th>Name</th>
            <th>Email</th>
            
            <th>Department</th>
            
            <th>Session</th>
            <th>Skill</th>
            </tr>
          </thead>

          <tbody>
            {viewStudentskillList()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Searchresume
