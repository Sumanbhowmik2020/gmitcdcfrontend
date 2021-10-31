import React, { useState } from 'react'
import axios from 'axios'
import Navbars from "./Navbars";
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

function Searchresume() {
  let history=useHistory();
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

    axios.get('http://localhost:4500/skillinfo/skillsearch/' + eskill)
      .then(res => {
        console.log(res.data)
        setStudentList(res.data)
        setStatus(true)
      })
      .catch(err => {
        console.log(err)
        setMessage('Not Found')
      })

    setStudentSkill('')
  }

  function viewStudentskillList() {
    return studentlist.map((currentrow, index) => {
      return (
        <tr key={index}>
          <td style={{border:"1px solid black", align:"center"}}>{currentrow.studentname}</td>
          <td style={{border:"1px solid black", align:"center"}}>{currentrow.studentemail}</td>
          <td style={{border:"1px solid black", align:"center"}}>{currentrow.studentdepartment}</td>
          <td style={{border:"1px solid black", align:"center"}}>{currentrow.studentsession}</td>
          <td style={{border:"1px solid black", align:"center"}}>{currentrow.studentskillname}</td>
          <td style={{border:"1px solid black", align:"center"}}>
            <Button onClick={()=>opencv(index)}>
              Open CV
            </Button>
          </td>
          
        </tr>
      );
    });
  }
  function opencv(index){
    var temp=[...studentlist]
    history.push("/digitalcv/"+temp[index].studentemail)

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
            onChange={onChangeStudentSkill} placeholder="Skill"
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
            <th style={{border:"1px solid black", align:"center"}}>Name</th>
            <th style={{border:"1px solid black", align:"center"}}>Email</th>
            
            <th style={{border:"1px solid black", align:"center"}}>Department</th>
            
            <th style={{border:"1px solid black", align:"center"}}>Session</th>
            <th style={{border:"1px solid black", align:"center"}}>Skill</th>
            <th style={{border:"1px solid black", align:"center"}}>CV LINK</th>
            </tr >
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
