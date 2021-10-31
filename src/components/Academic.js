import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbars from './Navbars';
import { Button, Row, Form, Col } from 'react-bootstrap';


function Academic(props) {

  let authuser = sessionStorage.getItem('useremail');
  let name = sessionStorage.getItem('username');
  //   let mobile =sessionStorage.getItem("usermobile");
  let department = sessionStorage.getItem("userdepartment");
  let session = sessionStorage.getItem("usersession");
  let uid = sessionStorage.getItem('uid');

  const [esecshoolname, setStudentSecshoolname] = useState("");
  const [esecboardname, setStudentSecboardname] = useState("");
  const [esecpassingyear, setStudentSecpassingyear] = useState("");
  const [esecpercentage, setStudentSecpercentage] = useState("");


  const [ehsshoolname, setStudentHsshoolname] = useState("");
  const [ehsboardname, setStudentHsboardname] = useState("");
  const [ehspassingyear, setStudentHspassingyear] = useState("");
  const [ehspercentage, setStudentHspercentage] = useState("");


  const [ecolshoolname, setStudentColshoolname] = useState("");
  const [ecolboardname, setStudentColboardname] = useState("");
  const [ecolpassingyear, setStudentColpassingyear] = useState("");
  const [ecolpercentage, setStudentColpercentage] = useState("");

  const [msg, setMessage] = useState("");

  const onChangeStudentSecschoolname = (e) => setStudentSecshoolname(e.target.value);
  const onChangeStudentSecboardname = (e) => setStudentSecboardname(e.target.value);
  const onChangeStudentSecpassingyear = (e) => setStudentSecpassingyear(e.target.value);
  const onChangeStudentSecpercentage = (e) => setStudentSecpercentage(e.target.value);


  const onChangeStudentHsschoolname = (e) => setStudentHsshoolname(e.target.value);
  const onChangeStudentHsboardname = (e) => setStudentHsboardname(e.target.value);
  const onChangeStudentHspassingyear = (e) => setStudentHspassingyear(e.target.value);
  const onChangeStudentHspercentage = (e) => setStudentHspercentage(e.target.value);


  const onChangeStudentColschoolname = (e) => setStudentColshoolname(e.target.value);
  const onChangeStudentColboardname = (e) => setStudentColboardname(e.target.value);
  const onChangeStudentColpassingyear = (e) => setStudentColpassingyear(e.target.value);
  const onChangeStudentColpercentage = (e) => setStudentColpercentage(e.target.value);


  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(`Form submitted:`);
    // console.log(`EMAIL: ${eemail}`);

    const studentacademicinfo = {
      studentsecschoolname: esecshoolname,
      studentsecboardname: esecboardname,
      studentsecpassingyear: esecpassingyear,
      studentsecpercentage: esecpercentage,

      studenthsschoolname: ehsshoolname,
      studenthsboardname: ehsboardname,
      studenthspassingyear: ehspassingyear,
      studenthspercentage: ehspercentage,

      studentcolschoolname: ecolshoolname,
      studentcolboardname: ecolboardname,
      studentcolpassingyear: ecolpassingyear,
      studentcolpercentage: ecolpercentage,

      studentname: name,
      studentemail: authuser,
      studentdepartment: department,
      studentsession: session,
    }

    axios.post('http://localhost:4500/academicinfo/update', studentacademicinfo)
      .then(res => {
        // console.log(res.data)
        // sessionStorage.setItem("useremail", res.data[0].empemail)
        // sessionStorage.setItem("userquestion", res.data[0].empquestion)
        setMessage('Academic info upload Successfully')
      });

    setStudentSecshoolname('')
    setStudentSecboardname('')
    setStudentSecpassingyear('')
    setStudentSecpercentage('')


    setStudentHsshoolname('')
    setStudentHsboardname('')
    setStudentHspassingyear('')
    setStudentHspercentage('')


    setStudentColshoolname('')
    setStudentColboardname('')
    setStudentColpassingyear('')
    setStudentColpercentage('')



  }

  return (
    <div style={{ backgroundColor: "#F0EEBA" }}>
      <Navbars />
      <br />
      <div className="container" >
      <div className="card carddesign " style={{ minHeight: "40rem", width: "100%", backgroundColor: "#b2ffe5", borderRadius: "1rem"  }}>
      <div className="p-2">
        <center><h3>Academic Info</h3></center>
        <br />
        <b style={{ color: "red" }}> {msg}</b>
        <form onSubmit={handleSubmit}>
          <Row>
            <Col  md='6'>
              <div className="form-group">
                <label>Name</label>
                <input type="name" className=" form-control form-round" placeholder="Enter Name" value={name}
                  required readOnly />
              </div>
            </Col>
            <Col  md='6'>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className=" form-control form-round" placeholder="Enter Email " value={authuser}
                  required readOnly />
              </div>
            </Col>
            <Col md='6'>
              <div className="form-group">
                <label>Department</label>
                <input type="department" className=" form-control form-round" placeholder="Enter Department " value={department}
                  required readOnly />
              </div>
            </Col>
            <Col md='6'>
              <div className="form-group">
                <label>Session</label>
                <input type="session" className=" form-control form-round" placeholder="Enter Session " value={session}
                  required readOnly />
              </div>
            </Col>

          </Row>
          <Row>
            <Col md='4'>
              <center><h6>10 th Class</h6></center>

              <div className="form-group">
                <label>School Name</label>
                <input type="name" className=" form-control form-round" placeholder="Enter School Name " value={esecshoolname}
                  onChange={onChangeStudentSecschoolname}
                  required />
              </div>
              <div className="form-group">
                <label>Board Name</label>
                <input type="name" className=" form-control form-round" placeholder="Enter Board Name  " value={esecboardname}
                  onChange={onChangeStudentSecboardname}
                  required />
              </div>
              <div className="form-group">
                <label>Passing Year</label>
                <input type="year" className=" form-control form-round" placeholder="Enter Passing Year " value={esecpassingyear}
                  onChange={onChangeStudentSecpassingyear}
                  required />
              </div>
              <div className="form-group">
                <label>Marks</label>
                <input type="marks" className=" form-control form-round" placeholder="marks in percentage " value={esecpercentage}
                  onChange={onChangeStudentSecpercentage}
                  required />
              </div>
            </Col>
            <Col md='4'>
              <center><h6>12 th Class</h6></center>
              <div className="form-group">
                <label>School Name</label>
                <input type="name" className=" form-control form-round" placeholder="Enter School Name " value={ehsshoolname}
                  onChange={onChangeStudentHsschoolname}
                  required />
              </div>
              <div className="form-group">
                <label>Board Name</label>
                <input type="name" className=" form-control form-round" placeholder="Enter Board Name " value={ehsboardname}
                  onChange={onChangeStudentHsboardname}
                  required />
              </div>
              <div className="form-group">
                <label>Passing Year</label>
                <input type="year" className=" form-control form-round" placeholder="Enter Passing Year " value={ehspassingyear}
                  onChange={onChangeStudentHspassingyear}
                  required />
              </div>
              <div className="form-group">
                <label>Marks</label>
                <input type="marks" className=" form-control form-round" placeholder="Enter Marks in Percentage " value={ehspercentage}
                  onChange={onChangeStudentHspercentage}
                  required />
              </div>
            </Col>
            <Col md='4'>
              <center><h6>College</h6></center>
              <div className="form-group">
                <label>College Name</label>
                <input type="name" className=" form-control form-round" placeholder="Enter College Name " value={ecolshoolname}
                  onChange={onChangeStudentColschoolname}
                  required />
              </div>
              <div className="form-group">
                <label>University</label>
                <input type="name" className=" form-control form-round" placeholder="Enter University Name " value={ecolboardname}
                  onChange={onChangeStudentColboardname}
                  required />
              </div>
              <div className="form-group">
                <label>Passing Year</label>
                <input type="year" className=" form-control form-round" placeholder="Enter Passing Year " value={ecolpassingyear}
                  onChange={onChangeStudentColpassingyear}
                  required />
              </div>
              <div className="form-group">
                <label>Marks</label>
                <input type="marks" className=" form-control form-round" placeholder="Enter Marks in Percentage " value={ecolpercentage}
                  onChange={onChangeStudentColpercentage}
                  required />
              </div>
            </Col>
          </Row>
          <Row>
          <div style={{ display: "flex", justifyContent: 'flex-end'}}>
            <input type="submit" className="btn btn-primary btn-block allign-right flex-end " value="Submit" style={{ height: "3rem", width: "6rem" ,allign:"right"}}  />
          </div>
          </Row>

        </form>
        </div>
        </div>
      </div>
     
      

    </div>
  )
}

export default Academic;