import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Row, Form, Col } from 'react-bootstrap';
import { useParams } from 'react-router';

import Navbars from './Navbars';

function UpdateBasicinfo(props) {
    const [ename, setStudentName] = useState("");
    const [eemail, setStudentEmail] = useState("");
    const [emobile, setStudentMobile] = useState("");


    const [egender, setStudentGender] = useState("");
    const [edob, setStudentDob] = useState("");
    const [egithub, setStudentGithub] = useState("");
    const [elinkedin, setStudentLinkedin] = useState("");
   // const [eprofilepic, setStudentProfilepic] = useState("");

    const [msg, setMessage] = useState("");
    const onChangeStudentName = (e) => setStudentName(e.target.value);
    const onChangeStudentEmail = (e) => setStudentEmail(e.target.value);
    const onChangeStudentMobile = (e) => setStudentMobile(e.target.value);
    const onChangeStudentGender = (e) => setStudentGender(e.target.value);
    const onChangeStudentDob = (e) => setStudentDob(e.target.value);
    const onChangeStudentGithub = (e) => setStudentGithub(e.target.value);

    const onChangeStudentLinkedin = (e) => setStudentLinkedin(e.target.value);
    //   const onChangeStudentProfilepic =(e) => setStudentProfilepic(e.target.value)

    // const onChangeStudentProfilepic = async e => {
    //     e.preventDefault()
    //     let img = e.target.files[0]
    //     if (!img) return alert("File not exist.")
    //     //5242880 == 5 mb
    //     if (img.size > 1024 * 1024 * 10) return alert("Size too large!")
    //     if (img.type !== 'image/jpeg' && img.type !== 'image/png') return alert("File format is incorrect.")

    //     let data = new FormData()
    //     data.append('file', img)
    //     data.append('upload_preset', "sumanphoto")
    //     data.append('cloud_name', "sumanbhowmik123")
    //     fetch(' https://api.cloudinary.com/v1_1/sumanbhowmik123/image/upload', {
    //         method: "post",
    //         body: data
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             setStudentProfilepic(data.url)
    //             console.log(data)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }


    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Form submitted:`);
        // console.log(`EMAIL: ${eemail}`);

        const studentbasicinfo = {
            studentgender: egender,
            studentdob: edob,
            stdentgithub: egithub,
            studentlinkedin: elinkedin,
            studentmobile: emobile,
            studentname: ename,
            studentemail: eemail,
           // studentprofilepic: eprofilepic,
        }
        axios.put('http://localhost:4500/basicinfo/update', studentbasicinfo)
            .then(res => {
                console.log(res.data)
                setMessage('BASIC INFO UPDATED')
            })
            .catch(err => console.log(err))


        setStudentName('')
        setStudentEmail('')
        setStudentMobile('')
        setStudentGender('')
        setStudentDob('')
        setStudentGithub('')
        setStudentLinkedin('')
     //   setStudentProfilepic('')
    }
    //Similar to componentDidMount and componentDidUpdate
  //  let {studentemailid}=useParams();
    useEffect(() => {
        
        let studentemailid = sessionStorage.getItem('useremail')
        if (studentemailid == null)
            studentemailid = props.email
        axios.get('http://localhost:4500/basicinfo/search/' + studentemailid)
            .then(response => {
                console.log(response.data)
                const { studentname, studentemail, studentmobile, studentdob, studentgender, studentgithub, studentlinkedin } = response.data[0]
                setStudentName(studentname)
                setStudentEmail(studentemail)
                setStudentMobile(studentmobile)
                setStudentDob(studentdob)
                setStudentGender(studentgender)
                setStudentGithub(studentgithub)
                setStudentLinkedin(studentlinkedin)
             //   setStudentProfilepic(studentprofilepic)

            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div style={{ backgroundColor: "#F0EEBA" }}>
        <Navbars />
        <div style={{minHeight:675}} className="py-5">
        <b style={{ color: "red" }}> <center>{msg}</center></b>
        <div className="d-flex justify-content-center align-items-center fontstyle bodycss py-5" >
            <div className="container " >
                <Row>
                <Col md="2"></Col>
                <Col md="8">
                <div className="card carddesign form-round" style={{minHeight: "30rem", width: "100%", backgroundColor: "#b2ffe5", borderRadius: "1rem" }}>
                    <div className="p-4">
                        <form onSubmit={handleSubmit} >
                            <Row>
                                <h3><center>UPDATE BASIC INFO</center></h3>
                            </Row>
                            <Row>
                                <Row>
                                    <Col md='6'>
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input type="name" className=" form-control form-round" placeholder="Enter Name" value={ename} onChange={onChangeStudentName}
                                                required readOnly />
                                        </div>
                                    </Col>
                                    <Col md='6'>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" className=" form-control form-round" placeholder="Enter Email " value={eemail} onChange={onChangeStudentEmail}
                                                required readOnly />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md='6'>
                                        <div className="form-group">
                                            <label>Mobile Number</label>
                                            <input type="mobile" className=" form-control form-round" placeholder="Enter mobile " value={emobile} onChange={onChangeStudentMobile}
                                                required readOnly />
                                        </div>
                                    </Col >

                                    <Col md='6'>
                                        <div className="form-group">
                                            <label>Date of Birth</label>
                                            <input type="date" className=" form-control form-round" placeholder="Enter Date of Birth" value={edob}
                                                onChange={onChangeStudentDob} required />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md='6'>
                                        <div className="form-group">
                                            <label>Gender</label>
                                            <select className=" form-control form-round" placeholder="Select Your Depeartment" value={egender}
                                                onChange={onChangeStudentGender} required >
                                                <option value="">Select </option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>


                                            </select>
                                        </div>
                                    </Col>
                                    <Col md='6'>
                                        <div className="form-group">
                                            <label>Github Link</label>
                                            <input type="text" className=" form-control form-round" placeholder="Enter Github link" value={egithub}
                                                onChange={onChangeStudentGithub} required />
                                        </div>
                                    </Col>
                                   
                                </Row>
                                <Row>
                                   
                                    <Col md='12'>
                                        <div className="form-group">
                                            <label>LinkedIn ID</label>
                                            <input type="text" className=" form-control form-round" placeholder="Enter Linkedin Id" value={elinkedin}
                                                onChange={onChangeStudentLinkedin} required />
                                        </div>
                                    </Col>

                                </Row>

                                <br />
                                <Row>
                                <div style={{ display: "flex", justifyContent: 'flex-end'}}>
                                <input type="submit" className="btn btn-primary btn-block  form-round allign-right flex-end" value="UPDATE"  style={{ height: "3rem", width: "6rem" ,float:"right"}}/>
                                </div>
                                </Row>
                            </Row>
                        </form>
                    </div>
                </div>
                </Col>
                <Col md="2"></Col>
                </Row>
            </div>
        </div>
        </div>
        
    </div>
    )
}

export default UpdateBasicinfo