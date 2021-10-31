import { useState } from 'react';
//import 'bootstrap/dist/css/bootstrap.css';
import { Button, Row, Form, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './../css/basicinfo.css'
import Navbars from "./Navbars";
import axios from 'axios';
// import React, { Component } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
//import { Card } from 'react-bootstrap';
//import img1 from './img/pexels-johannes-plenio-1103970.jpg';
// //import './sura.css'
//import './component.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
} from "react-router-dom";

let Signup = () => {
    let history = useHistory();
    const [ename, setStudentName] = useState("");
    const [eemail, setStudentEmail] = useState("");
    const [emobile, setStudentMobile] = useState("");
    const [edepartment, setStudentDepartment] = useState("");
    const [erollnumber, setStudentRollnumber] = useState("");
    const [eregnumber, setStudentRegnumber] = useState("");
    const [esession, setStudentSession] = useState("");
    const [epassword, setStudentPassword] = useState("");
    const [msg, setMessage] = useState("");




    const onChangeStudentName = (e) => setStudentName(e.target.value);
    const onChangeStudentEmail = (e) => setStudentEmail(e.target.value);
    const onChangeStudentMobile = (e) => setStudentMobile(e.target.value);
    const onChangeStudentDepartment = (e) => setStudentDepartment(e.target.value);
    const onChangeStudentRollnumber = (e) => setStudentRollnumber(e.target.value);
    const onChangeStudentRegnumber = (e) => setStudentRegnumber(e.target.value);
    const onChangeStudentSession = (e) => setStudentSession(e.target.value);
    const onChangeStudentPassword = (e) => setStudentPassword(e.target.value);


    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Form submitted:`);
        console.log(`NAME: ${ename}`);
        console.log(`EMAIL: ${eemail}`);

        const studentinfo = {
            studentname: ename,
            studentemail: eemail,
            studentmobile: emobile,
            studentdepartment: edepartment,
            studentrollnumber: erollnumber,
            studentregnumber: eregnumber,
            studentsession: esession,
            studentpassword: epassword,

        }

        axios.post('http://localhost:4500/student/register', studentinfo)
            .then(res => {
                // console.log(res.data)
                // window.alert("Registration Sucessful");
                setMessage(res.data.message)
                window.alert(res.data.message);
                history.push('/Login')
            });

        setStudentName('')
        setStudentEmail('')
        setStudentMobile('')
        setStudentDepartment('')
        setStudentRollnumber('')
        setStudentRegnumber('')
        setStudentSession('')
        setStudentPassword('')


    }

    return (

        <div style={{ backgroundColor: "#F0EEBA" }}>
            <Navbars />
            <br />
            <br />
            <br />

            <div className="d-flex justify-content-center align-items-center fontstyle bodycss" >
                <div className="container"  >
                    <Row>
                    <Col md="3"></Col>
                    <Col md="6">
                    <div className="card carddesign form-round" style={{ minHeight: "32rem", width: "100%", backgroundColor: "#b2ffe5"}}>
                        <div className="p-4">
                            <form onSubmit={handleSubmit} >
                                
                                <Row>
                                <Row className="d-flex justify-content-center py-3">
                                <h3><center> SIGN UP</center></h3>
                                </Row>
                                    <Row>
                                        <Col md='6'>
                                            <div className="form-group">
                                                <label><b>Name</b></label>
                                                <input type="name" className=" form-control form-round" placeholder="Enter Name" name="name" value={ename}
                                                    onChange={onChangeStudentName} required />
                                            </div>
                                        </Col>
                                        <Col md='6'>
                                            <div className="form-group">
                                                <label><b>Email</b></label>
                                                <input type="email" className=" form-control form-round" placeholder="Enter Email " name="email" value={eemail}
                                                    onChange={onChangeStudentEmail} required />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md='6'>
                                            <div className="form-group">
                                                <label><b>Mobile</b></label>
                                                <input type="mobile" className=" form-control form-round" placeholder="Enter mobile " name="mobile" value={emobile}
                                                    onChange={onChangeStudentMobile} required />
                                            </div>

                                        </Col>
                                        <Col md='6'>
                                            <div className="form-group">
                                                <label><b>Department</b></label>
                                                <select className=" form-control form-round" placeholder="Select Your Depeartment" value={edepartment}
                                                    onChange={onChangeStudentDepartment} required >
                                                    <option value="">Select Your Depeartment</option>
                                                    <option value="Civil Engineering">Civil Engineering</option>
                                                    <option value="Computer Science & Engineering">Computer Science & Engineering</option>
                                                    <option value="Electrical Engineering">Electrical Engineering</option>
                                                    <option value="Electronics & communication Engineering">Electronics & communication Engineering</option>
                                                    <option value="Mechanical Engineering">Mechanical Engineering</option>

                                                </select>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md='6'>
                                            <div className="form-group">
                                                <label><b>Roll Number</b></label>
                                                <input type="rollnumber" className=" form-control form-round" placeholder="Enter University Roll " name="rollnumber" value={erollnumber}
                                                    onChange={onChangeStudentRollnumber} required />
                                            </div>
                                        </Col>
                                        <Col md='6'>
                                            <div className="form-group">
                                                <label><b>Reg. Number</b></label>
                                                <input type="Regnumber" className=" form-control form-round" placeholder="Enter Registation Number " name="regnumber" value={eregnumber}
                                                    onChange={onChangeStudentRegnumber} required />
                                            </div>
                                        </Col >
                                    </Row>
                                    <Row>
                                        <Col md='6'>
                                            <div className="form-group">
                                                <label><b>Session</b></label>
                                                <select className=" form-control form-round" placeholder="Select Your Depeartment" value={esession}
                                                    onChange={onChangeStudentSession} required >
                                                    <option value="">Select Your Session</option>
                                                    <option value="2016-2020">2016-2020</option>
                                                    <option value="2017-2021">2017-2021</option>
                                                    <option value="2018-2022">2018-2022</option>
                                                    <option value="2019-2023">2019-2023</option>
                                                    <option value="2020-2024">2020-2024</option>
                                                    <option value="2021-2025">2021-2025</option>
                                                    <option value="2022-2026">2022-2026</option>
                                                    <option value="2023-2027">2023-2027</option>


                                                </select>
                                            </div>
                                        </Col>

                                        <Col md='6'>
                                            <div className="form-group">
                                                <label><b>Password</b></label>
                                                <input type="password" className=" form-control form-round" placeholder="Enter password" name="password" value={epassword}
                                                    onChange={onChangeStudentPassword} required />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <input type="submit" className="btn btn-primary btn-block  form-round" value="Submit" />
                                    </Row>
                                </Row>

                                <p className="forgot-password text-right">
                                    Already registered <Link as={Link} to="Login">sign in?</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                    </Col>
                    <Col md="3"></Col>
                    </Row>
                </div>
            </div>
            <br />
            <br />
            
        </div>

    )
}


export default Signup;