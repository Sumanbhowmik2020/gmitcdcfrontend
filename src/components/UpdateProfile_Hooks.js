import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Row, Form, Col } from 'react-bootstrap';

import Navbars from './Navbars';

function UpdateProfile(props) {
    const [ename, setStudentName] = useState("");
    const [eemail, setStudentEmail] = useState("");
    const [emobile, setStudentMobile] = useState("");
    const [edepartment, setStudentDepartment] = useState("");
    const [erollnumber, setStudentRollnumber] = useState("");
    const [esession, setStudentSession] = useState("");
    const [epassword, setStudentPassword] = useState("");
    const [msg, setMessage] = useState("");

    const onChangeStudentName = (e) => setStudentName(e.target.value);
    const onChangeStudentEmail = (e) => setStudentEmail(e.target.value);
    const onChangeStudentMobile = (e) => setStudentMobile(e.target.value);
    const onChangeStudentDepartment = (e) => setStudentDepartment(e.target.value);
    const onChangeStudentRollnumber = (e) => setStudentRollnumber(e.target.value);
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
            studentsession: esession,
            studentpassword: epassword,

        }

        axios.put('http://localhost:4500/student/update', studentinfo)
            .then(res => {
                console.log(res.data)
                setMessage('PROFILE UPDATED')
            })
            .catch(err => console.log(err))


        setStudentName('')
        setStudentEmail('')
        setStudentMobile('')
        setStudentDepartment('')
        setStudentRollnumber('')
        setStudentSession('')
        setStudentPassword('')

    }

    //Similar to componentDidMount and componentDidUpdate
    useEffect(() => {
        let studentemailid = sessionStorage.getItem('useremail')
        if (studentemailid == null)
            studentemailid = props.email
        axios.get('http://localhost:4500/student/search/' + studentemailid)
            .then(response => {
                console.log(response.data)
                const { studentname, studentemail, studentmobile, studentdepartment, studentrollnumber, studentsession, studentpassword } = response.data[0]
                setStudentName(studentname)
                setStudentEmail(studentemail)
                setStudentMobile(studentmobile)
                setStudentDepartment(studentdepartment)
                setStudentRollnumber(studentrollnumber)
                setStudentSession(studentsession)
                setStudentPassword(studentpassword)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div style={{ backgroundColor: "#F0EEBA" }}>
            <Navbars />
            <br />
            <br/>

            <div className="d-flex justify-content-center align-items-center fontstyle bodycss" >
                <div className="container"  >
                    <Row>
                    <Col md="3"></Col>
                    <Col md="6">
                    <div className="card carddesign form-round" style={{ minHeight: "30rem", width: "100%", backgroundColor: "#b2ffe5", borderRadius: "1rem" }}>
                        <div className="p-4">
                            <form onSubmit={handleSubmit} >
                                <Row>
                                
                                
                                    <Row>
                                        <h3><center>PROFILE UPDATE</center></h3>
                                        <b style={{ color: "red" }}><center> {msg}</center></b>
                                    </Row>
                                    <Row>
                                        <Col md='6'>
                                            <div className="form-group">
                                                <label>Name</label>
                                                <input type="name" className=" form-control form-round" placeholder="Enter Name" name="name" value={ename}
                                                    onChange={onChangeStudentName} required readOnly />
                                            </div>
                                        </Col>
                                        <Col md='6'>
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input type="email" className=" form-control form-round" placeholder="Enter Email " name="email" value={eemail}
                                                    onChange={onChangeStudentEmail} required readOnly />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md='6'>
                                            <div className="form-group">
                                                <label>Mobile Number</label>
                                                <input type="mobile" className=" form-control form-round" placeholder="Enter mobile " name="mobile" value={emobile}
                                                    onChange={onChangeStudentMobile} required />
                                            </div>
                                        </Col>
                                        <Col md='6'>
                                            <div className="form-group">
                                                <label>Department</label>
                                                <select className=" form-control form-round" placeholder="Select Your Depeartment" value={edepartment}
                                                    onChange={onChangeStudentDepartment} required readOnly>
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
                                                <label>Roll Number</label>
                                                <input type="rollnumber" className=" form-control form-round" placeholder="Enter University Roll " name="rollnumber" value={erollnumber}
                                                    onChange={onChangeStudentRollnumber} required />
                                            </div>
                                        </Col>
                                        <Col md='6'>
                                            <div className="form-group">
                                                <label>Session</label>
                                                <select className=" form-control form-round" placeholder="Select Your Depeartment" value={esession}
                                                    onChange={onChangeStudentSession} required readOnly>
                                                    <option value="">Select Your Session</option>
                                                    <option value="2016-2020">2016-2020</option>
                                                    <option value="2017-2021">2017-2021</option>
                                                    <option value="2018-2022">2018-2022</option>
                                                    <option value="2019-2023">2019-2023</option>
                                                    <option value="2020-2024">2020-2024</option>
                                                    <option value="2021-2025">2021-2025</option>
                                                    <option value="2022-2026">2021-2026</option>
                                                    <option value="2023-2027">2021-2027</option>


                                                </select>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                    <Col md='12'>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="password" className=" form-control form-round" placeholder="Enter password" name="password" value={epassword}
                                                onChange={onChangeStudentPassword} required />
                                        </div>
                                        </Col>
                                    </Row>
                                    <br/>
                                    <br/>
                                    <Row>
                                    
                                        <input type="submit" className="btn btn-primary btn-block  form-round" value="Submit" />
                                    </Row>
                                   
                                    
                                </Row>
                            </form>
                        </div>
                    </div>
                    </Col>
                    <Col md="3"></Col>
                    </Row>
                </div>
            </div>
            <br />
            <br/>
            <br />
            <br/>
            <br/>
            <br/>
            
        </div>
    )
}

export default UpdateProfile