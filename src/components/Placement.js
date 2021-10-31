import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbars from './Navbars';
import { Button, Row, Form, Col } from 'react-bootstrap';


function Placement(props) {

    // let authuser = sessionStorage.getItem('useremail');
    // let name = sessionStorage.getItem('username');
    // let mobile =sessionStorage.getItem("usermobile");
    // let uid = sessionStorage.getItem('uid');
    const [ename, setStudentName] = useState("");
    const [eemail, setStudentEmail] = useState("");
    const [ecompany, setStudentCompany] = useState("");
    const [esalary, setStudentSalary] = useState("");
    const [epassout, setStudentPassout] = useState("");
    const [edept, setStudentDept] = useState("");
    const [edate, setStudentDate] = useState("");
    // const [egender, setStudentGender] = useState("");
    // const [edob, setStudentDob] = useState("");
    // const [egithub, setStudentGithub] = useState("");
    // const [elinkedin, setStudentLinkedin] = useState("");
    const [eprofilepic, setStudentProfilepic] = useState("");

    const [msg, setMessage] = useState("");

    const onChangeStudentName = (e) => setStudentName(e.target.value);
    const onChangeStudentEmail = (e) => setStudentEmail(e.target.value);
    const onChangeStudentCompany = (e) => setStudentCompany(e.target.value);
    const onChangeStudentSalary = (e) => setStudentSalary(e.target.value);
    const onChangeStudentPassout = (e) => setStudentPassout(e.target.value);
    const onChangeStudentDept = (e) => setStudentDept(e.target.value);
    const onChangeStudentDate = (e) => setStudentDate(e.target.value);

    // const onChangeStudentGender = (e) => setStudentGender(e.target.value);
    // const onChangeStudentDob = (e) => setStudentDob(e.target.value);
    // const onChangeStudentGithub = (e) => setStudentGithub(e.target.value);

    // const onChangeStudentLinkedin = (e) => setStudentLinkedin(e.target.value);
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

        const studentplacementinfo = {
            // studentgender: egender,
            // studentdob: edob,
            // stdentgithub: egithub,
            // studentlinkedin: elinkedin,
            // studentmobile: mobile,
            studentname: ename,
            studentemail: eemail,
            studentcompany: ecompany,
            studentsalary: esalary,
            studentpassout: epassout,
            studedentdept: edept,
            studentdate: edate,
            // studentemail: authuser,
            studentprofilepic: eprofilepic,
        }

        axios.post('https://backendcdcgmit.herokuapp.com/placementinfo/register', studentplacementinfo)
            .then(res => {
                // console.log(res.data)
                // sessionStorage.setItem("useremail", res.data[0].empemail)
                // sessionStorage.setItem("userquestion", res.data[0].empquestion)
                setMessage('Placement info upload Successfully')
            });

        setStudentName('')
        setStudentEmail('')
        setStudentCompany('')
        setStudentSalary('')
        setStudentPassout('')
        setStudentDate('')
        setStudentDept('')
        setStudentProfilepic('')

    }

    return (
        <div style={{ backgroundColor: "#F0EEBA" }}>
            <Navbars />
            <br />
            <h3><center>PLACEMENT INFO</center></h3>
            <b style={{ color: "red" }}> {msg}</b>
            <div className="d-flex justify-content-center align-items-center fontstyle bodycss" >
                <div className="container"  >
                    <Row>
                        <Col md="2"></Col>
                        <Col md="8">
                            <div className="card carddesign " style={{ minHeight: "30rem", width: "100%", backgroundColor: "#b2ffe5", borderRadius: "1rem" }}>
                                <div className="p-4">
                                    <form onSubmit={handleSubmit} >
                                        <Row>
                                            <Col md='6'>
                                                <div className="form-group">
                                                    <label>Name</label>
                                                    <input type="name" className=" form-control " placeholder="Enter Name" value={ename}
                                                        onChange={onChangeStudentName} required />
                                                </div>
                                                <div className="form-group">
                                                    <label>Email</label>
                                                    <input type="email" className=" form-control " placeholder="Enter Name" value={eemail}
                                                        onChange={onChangeStudentEmail} required />
                                                </div>

                                                <div className="form-group">
                                                    <label>Profile Picture</label>
                                                    <input type="file" className=" form-control " placeholder="Enter Profile pic"
                                                        onChange={onChangeStudentProfilepic} required />
                                                </div>
                                                <div className="form-group">
                                                    <label>Department</label>
                                                    <select className=" form-control " placeholder="Select Your Depeartment" value={edept}
                                                        onChange={onChangeStudentDept} required >
                                                        <option value="">Select  Depeartment</option>
                                                        <option value="CE">CE</option>
                                                        <option value="CSE">CSE</option>
                                                        <option value="EE">EE</option>
                                                        <option value="ECE">ECE</option>
                                                        <option value="ME">ME</option>

                                                    </select>
                                                </div>
                                            </Col>
                                            <Col md='6'>
                                                <div className="form-group">
                                                    <label>Passout Year</label>
                                                    <select className=" form-control " placeholder="Select Your Depeartment" value={epassout}
                                                        onChange={onChangeStudentPassout} required >
                                                        <option value="">Select  Session</option>
                                                        <option value="2016">2016</option>
                                                        <option value="2017">2017</option>
                                                        <option value="2018">2018</option>
                                                        <option value="2019">2019</option>
                                                        <option value="2020">2020</option>
                                                        <option value="2021">2021</option>
                                                        <option value="2022">2022</option>
                                                        <option value="2023">2023</option>
                                                        <option value="2024">2024</option>
                                                        <option value="2025">2025</option>
                                                        <option value="2026">2026</option>
                                                        <option value="2027">2027</option>


                                                    </select>
                                                </div>


                                                <div className="form-group">
                                                    <label>Company Name</label>
                                                    <input type="company" className=" form-control " placeholder="Enter Company Name " value={ecompany}
                                                        onChange={onChangeStudentCompany} required />
                                                </div>
                                                <div className="form-group">
                                                    <label>Date</label>
                                                    <input type="date" className=" form-control " placeholder="Enter Company Name " value={edate}
                                                        onChange={onChangeStudentDate} required />
                                                </div>

                                                <div className="form-group">
                                                    <label>Salary</label>
                                                    <input type="company" className=" form-control " placeholder="Enter Salary  in LPA" value={esalary}
                                                        onChange={onChangeStudentSalary} required />
                                                </div>

                                            </Col>

                                        </Row>
                                        <br />

                                        <input type="submit" className="btn btn-primary btn-block  form-round" value="Submit" />

                                    </form>
                                </div>
                            </div>
                        </Col>
                        <Col md="2"></Col>
                    </Row>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />

        </div>
    )
}

export default Placement;