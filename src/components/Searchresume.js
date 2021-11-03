import React, { useState } from 'react'
import axios from 'axios'
import Navbars from "./Navbars";
//import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Button, Row, Form, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';

function Searchresume() {
  let history = useHistory();
  const [studentlist, setStudentList] = useState([]);
  //  const [eemail, setStudentEmail] = useState("");
  const [eskill, setStudentSkill] = useState("");
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
        setMessage('Not Found')
      })

    setStudentSkill('')
  }

  function viewStudentskillList() {
    return studentlist.map((currentrow, index) => {
      return (
        <tr key={index}>
          <td style={{ border: "1px solid black", align: "center" }}>{currentrow.studentname}</td>
          <td style={{ border: "1px solid black", align: "center" }}>{currentrow.studentemail}</td>
          <td style={{ border: "1px solid black", align: "center" }}>{currentrow.studentdepartment}</td>
          <td style={{ border: "1px solid black", align: "center" }}>{currentrow.studentsession}</td>
          <td style={{ border: "1px solid black", align: "center" }}>{currentrow.studentskillname}</td>
          <td style={{ border: "1px solid black", align: "center" }}>
            <Button onClick={() => opencv(index)}>
              Open CV
            </Button>
          </td>

        </tr>
      );
    });
  }
  function opencv(index) {
    var temp = [...studentlist]
    history.push("/digitalcv/" + temp[index].studentemail)

  }

  if (status === false) {
    return (
      <div>
        <Navbars />
        <br />
        <div className="container" >
          <Row>
            <Col md="3"></Col>
            <Col md="6">
              <div className="card carddesign form-round" style={{ minHeight: "10rem", width: "100%", backgroundColor: "#b2ffe5" }}>
                <div className="p-4">
                  <Row>
                    <Row className="d-flex justify-content-center py-3">
                      <h3><center>ENTER SKILL FOR RESUME SEARCH</center></h3>
                    </Row>
                    <b style={{ color: "red" }}><center>{msg}</center></b>

                    <form onSubmit={handleSubmit}>
                      <Row className="d-flex justify-content-center py-3">
                        <Col md='12'>
                          <div className="form-group">
                            <input className=" form-control form-round" type="skill" value={eskill}
                              onChange={onChangeStudentSkill}
                              placeholder="Skill"
                              required />
                          </div>
                        </Col>
                      </Row>
                      <center>
                        <input type="submit" value="SEARCH STUDENT" className="btn btn-success" />
                      </center>
                    </form>
                  </Row>
                </div>
              </div>
            </Col>
            <Col md="3"></Col>
          </Row>
        </div>

      </div>
    );
  }
  else {
    return (
      <div>
        <Navbars />
        <br />
        <div className="container" >
          <Row>
            <Col md="3"></Col>
            <Col md="6">
              <div className="card carddesign form-round" style={{ minHeight: "10rem", width: "100%", backgroundColor: "#b2ffe5" }}>
                <div className="p-4">
                  <Row>
                    <Row className="d-flex justify-content-center py-3">
                      <h3><center>ENTER SKILL FOR RESUME SEARCH</center></h3>
                    </Row>
                    <b style={{ color: "red" }}><center>{msg}</center></b>

                    <form onSubmit={handleSubmit}>
                      <Row className="d-flex justify-content-center py-3">
                        <Col md='12'>
                          <div className="form-group">
                            <input className=" form-control form-round" type="skill" value={eskill}
                              onChange={onChangeStudentSkill}
                              placeholder="Skill"
                              required />
                          </div>
                        </Col>
                      </Row>
                      <center>
                        <input type="submit" value="SEARCH STUDENT" className="btn btn-success" />
                      </center>
                    </form>
                  </Row>
                </div>
              </div>
            </Col>
            <Col md="3"></Col>
          </Row>
        </div>
        <br /><br />

        <h3><center>STUDENT DETAILS</center></h3>
        <Container style={{ overflowX: 'auto' }}>
        <Table striped bordered hover variant="white">
        <thead>
            <tr>
              <th style={{ border: "1px solid black", align: "center" }}>Name</th>
              <th style={{ border: "1px solid black", align: "center" }}>Email</th>

              <th style={{ border: "1px solid black", align: "center" }}>Department</th>

              <th style={{ border: "1px solid black", align: "center" }}>Session</th>
              <th style={{ border: "1px solid black", align: "center" }}>Skill</th>
              <th style={{ border: "1px solid black", align: "center" }}>CV LINK</th>
            </tr >
          </thead>

          <tbody>
            {viewStudentskillList()}
          </tbody>
        </Table>
      </Container>
      </div>
    )
  }
}

export default Searchresume
