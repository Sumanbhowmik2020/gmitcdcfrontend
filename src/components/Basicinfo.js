import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbars from './Navbars';
import { Button, Row, Form, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';


function Basicinfo(props) {
    let history=useHistory();

    let authuser = sessionStorage.getItem('useremail');
    let name = sessionStorage.getItem('username');
    let mobile = sessionStorage.getItem("usermobile");
    let uid = sessionStorage.getItem('uid');

    const [egender, setStudentGender] = useState("");
    const [edob, setStudentDob] = useState("");
    const [egithub, setStudentGithub] = useState("");
    const [elinkedin, setStudentLinkedin] = useState("");
    const [eprofilepic, setStudentProfilepic] = useState("");

    const [msg, setMessage] = useState("");

    const onChangeStudentGender = (e) => setStudentGender(e.target.value);
    const onChangeStudentDob = (e) => setStudentDob(e.target.value);
    const onChangeStudentGithub = (e) => setStudentGithub(e.target.value);

    const onChangeStudentLinkedin = (e) => setStudentLinkedin(e.target.value);
    //   const onChangeStudentProfilepic =(e) => setStudentProfilepic(e.target.value)

    const onChangeStudentProfilepic = async e => {
        e.preventDefault()
        let img = e.target.files[0]
        if (!img) return alert("File not exist.")
        //5242880 == 5 mb
        if (img.size > 1024 * 1024 * 10) return alert("Size too large!")
        if (img.type !== 'image/jpeg' && img.type !== 'image/png') return alert("File format is incorrect.")

        let data = new FormData()
        data.append('file', img)
        data.append('upload_preset', "sumanphoto")
        data.append('cloud_name', "sumanbhowmik123")
        fetch(' https://api.cloudinary.com/v1_1/sumanbhowmik123/image/upload', {
            method: "post",
            body: data
        })
            .then(res => res.json())
            .then(data => {
                setStudentProfilepic(data.url)
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
    }


    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Form submitted:`);
        // console.log(`EMAIL: ${eemail}`);

        const studentbasicinfo = {
            studentgender: egender,
            studentdob: edob,
            stdentgithub: egithub,
            studentlinkedin: elinkedin,
            studentmobile: mobile,
            studentname: name,
            studentemail: authuser,
            studentprofilepic: eprofilepic,
        }

        axios.post('https://backendcdcgmit.herokuapp.com/basicinfo/register', studentbasicinfo)
            .then(res => {
                // console.log(res.data)
                // sessionStorage.setItem("useremail", res.data[0].empemail)
                // sessionStorage.setItem("userquestion", res.data[0].empquestion)
                setMessage(res.data.message)
                window.alert(res.data.message);
            });

        setStudentGender('')
        setStudentDob('')
        setStudentGithub('')
        setStudentLinkedin('')
        setStudentProfilepic('')

    }
    // function update(){
    //     history.push("/updatebasicinfo/"+authuser)

    // }

    return (
        <div style={{ backgroundColor: "#F0EEBA" }}>
            <Navbars />
            <div style={{ minHeight: 675 }} className="py-5">
                {/* <b style={{ color: "red" }}> <center>{msg}</center></b> */}
                <div className="d-flex justify-content-center align-items-center fontstyle bodycss py-5" >
                    <div className="container " >
                        <Row>
                            <Col md="2"></Col>
                            <Col md="8">
                                <div className="card carddesign form-round" style={{ minHeight: "30rem", width: "100%", backgroundColor: "#b2ffe5", borderRadius: "1rem" }}>
                                    <div className="p-4">
                                        <form onSubmit={handleSubmit} >
                                            <Row>
                                                <h3><center>BASIC INFO</center></h3>
                                            </Row>
                                            <Row>
                                                <Row>
                                                    <Col md='6'>
                                                        <div className="form-group">
                                                            <label>Name</label>
                                                            <input type="name" className=" form-control form-round" placeholder="Enter Name" value={name}
                                                                required readOnly />
                                                        </div>
                                                    </Col>
                                                    <Col md='6'>
                                                        <div className="form-group">
                                                            <label>Email</label>
                                                            <input type="email" className=" form-control form-round" placeholder="Enter Email " value={authuser}
                                                                required readOnly />
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md='6'>
                                                        <div className="form-group">
                                                            <label>Mobile Number</label>
                                                            <input type="mobile" className=" form-control form-round" placeholder="Enter mobile " value={mobile}
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
                                                    <Col>
                                                        <div className="form-group">
                                                            <label>Profile Picture</label>
                                                            <input type="file" className=" form-control form-round" placeholder="Enter Linkedin Id"
                                                                onChange={onChangeStudentProfilepic} required />
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md='6'>
                                                        <div className="form-group">
                                                            <label>Github Link</label>
                                                            <input type="rollnumber" className=" form-control form-round" placeholder="Enter Github link" value={egithub}
                                                                onChange={onChangeStudentGithub} required />
                                                        </div>
                                                    </Col>
                                                    <Col md='6'>
                                                        <div className="form-group">
                                                            <label>LinkedIn ID</label>
                                                            <input type="rollnumber" className=" form-control form-round" placeholder="Enter Linkedin Id" value={elinkedin}
                                                                onChange={onChangeStudentLinkedin} required />
                                                        </div>
                                                    </Col>

                                                </Row>

                                                <br />
                                                <Row>
                                                    <Col md='4'>
                                                        {/* <Button   onClick={()=>update()}>
                                                            UPDATE
                                                        </Button> */}
                                                        <Link className="btn " to="/updatebasicinfo" style={{backgroundColor:"green"}} >
                                                       ?  UPDATE
                                                        </Link>
                                                    </Col>
                                                    <Col md='4'>
                                                    </Col>
                                                    <Col md='4'>
                                                        <div style={{ display: "flex", justifyContent: 'flex-end'}}>
                                                            <input type="submit" className="btn    " value="SUBMIT" style={{backgroundColor:"grey"}} />
                                                        </div>
                                                    </Col>
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

export default Basicinfo;