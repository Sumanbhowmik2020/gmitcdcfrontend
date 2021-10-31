import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbars from './Navbars';
import { Button, Row, Form, Col } from 'react-bootstrap';


function Skillinfo(props) {

    let authuser = sessionStorage.getItem('useremail');
    let name = sessionStorage.getItem('username');
    //   let mobile =sessionStorage.getItem("usermobile");
    let department = sessionStorage.getItem("userdepartment");
    let session = sessionStorage.getItem("usersession");
    let uid = sessionStorage.getItem('uid');

    const [eskillname, setStudentSkillname] = useState("");
    const [eorganization, setStudentOrganization] = useState("");
    const [eprojectname, setStudentProjectname] = useState("");
    const [eprojecturl, setStudentProjecturl] = useState("");


    const [eprojectnote, setStudentProjectnote] = useState("");


    const [msg, setMessage] = useState("");

    const onChangeStudentSkillname = (e) => setStudentSkillname(e.target.value);
    const onChangeStudentOrganization = (e) => setStudentOrganization(e.target.value);
    const onChangeStudentProjectname = (e) => setStudentProjectname(e.target.value);
    const onChangeStudentProjecturl = (e) => setStudentProjecturl(e.target.value);


    const onChangeStudentProjectnote = (e) => setStudentProjectnote(e.target.value);
    // const onChangeStudentHsboardname = (e) => setStudentHsboardname(e.target.value);
    // const onChangeStudentHspassingyear = (e) => setStudentHspassingyear(e.target.value);
    // const onChangeStudentHspercentage = (e) => setStudentHspercentage(e.target.value);


    // const onChangeStudentColschoolname = (e) => setStudentColshoolname(e.target.value);
    // const onChangeStudentColboardname = (e) => setStudentColboardname(e.target.value);
    // const onChangeStudentColpassingyear = (e) => setStudentColpassingyear(e.target.value);
    // const onChangeStudentColpercentage = (e) => setStudentColpercentage(e.target.value);


    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Form submitted:`);
        // console.log(`EMAIL: ${eemail}`);

        const studentskillinfo = {
            studentskillname: eskillname,
            studentorganization: eorganization,
            studentprojectname: eprojectname,
            studentprojecturl: eprojecturl,

            studentprojectnote: eprojectnote,


            studentname: name,
            studentemail: authuser,
            studentdepartment: department,
            studentsession: session,
        }
        //console.log(eprojectname)
        axios.post('http://localhost:4500/skillinfo/update', studentskillinfo)
            .then(res => {
                // console.log(res.data)
                // sessionStorage.setItem("useremail", res.data[0].empemail)
                // sessionStorage.setItem("userquestion", res.data[0].empquestion)
                setMessage('Skill info upload Successfully')
            });

        setStudentSkillname('')
        setStudentOrganization('')
        setStudentProjectname('')
        setStudentProjecturl('')


        setStudentProjectnote('')
        // setStudentHsboardname('')
        // setStudentHspassingyear('')
        // setStudentHspercentage('')


        // setStudentColshoolname('')
        // setStudentColboardname('')
        // setStudentColpassingyear('')
        // setStudentColpercentage('')



    }

    return (
        <div style={{ backgroundColor: "#F0EEBA" }}>
            <Navbars />
            <br />

            <form onSubmit={handleSubmit}>



                <div className="d-flex justify-content-center align-items-center fontstyle bodycss" >
                    <div className="container"  >
                        <Row>
                            <Col md="3"></Col>
                            <Col md="6">
                                <div className="card carddesign " style={{ minHeight: "37rem", width: "100%", backgroundColor: "#b2ffe5" , borderRadius: "1rem" }}>
                                    <Row>
                                        <center><h3>SKILL INFO</h3></center>
                                        <b style={{ color: "red" }}> <center>{msg}</center></b>
                                    </Row>
                                    <div className="p-4">
                                        <Row>

                                            <Row>
                                                <Col md='6'>
                                                    <div className="form-group">
                                                        <label><b>Name</b></label>
                                                        <input type="name" className=" form-control form-round" placeholder="Enter Name" value={name}
                                                            required readOnly />
                                                    </div>
                                                </Col>
                                                <Col md='6'>

                                                    <div className="form-group">
                                                        <label><b>Department</b></label>
                                                        <input type="department" className=" form-control form-round" placeholder="Enter Department  " value={department}
                                                            required readOnly />

                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md='6'>
                                                    <div className="form-group">
                                                        <label><b>Email</b></label>
                                                        <input type="email" className=" form-control form-round" placeholder="Enter Email " value={authuser}
                                                            required readOnly />
                                                    </div>

                                                </Col>
                                                <Col md='6'>
                                                    <div className="form-group">
                                                        <label><b>Session</b></label>
                                                        <input type="session" className=" form-control form-round" placeholder="Enter Session " value={session}
                                                            required readOnly />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md='6'>
                                                    <div className="form-group">
                                                        <label><b>Skillname</b></label>
                                                        <input type="skillname" className=" form-control form-round" placeholder="Enter Skill Name"
                                                            required value={eskillname}
                                                            onChange={onChangeStudentSkillname} />
                                                    </div>
                                                </Col>
                                                <Col md='6'>
                                                    <div className="form-group">
                                                        <label><b>Organization</b></label>
                                                        <input type="organization" className=" form-control form-round" placeholder="Enter Organization Name "
                                                            required value={eorganization}
                                                            onChange={onChangeStudentOrganization} />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md='6'>
                                                    <div className="form-group">
                                                        <label><b>Project Name</b></label>
                                                        <input type="projectname" className=" form-control form-round" placeholder="Enter Project Name"
                                                            required value={eprojectname}
                                                            onChange={onChangeStudentProjectname} />
                                                    </div>

                                                </Col>
                                                <Col md='6'>
                                                    <div className="form-group">
                                                        <label><b>Project URL</b></label>
                                                        <input type="projecturl" className=" form-control form-round" placeholder="Enter Project URL"
                                                            required value={eprojecturl}
                                                            onChange={onChangeStudentProjecturl} />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md='12'>
                                                    <div className="form-group">
                                                        <label><b>Note</b></label>
                                                        <textarea type="note" className=" form-control form-round" placeholder="Write About Your Project " required rows="3"
                                                            value={eprojectnote}
                                                            onChange={onChangeStudentProjectnote}
                                                        >
                                                        </textarea>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <div className="">
                                                    <input type="submit" className="btn btn-primary btn-block  form-round" value="Submit" />
                                                </div>
                                            </Row>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                            <Col md="3"></Col>
                        </Row>
                    </div>

                </div>










            </form>
            <br />
           

        </div>
    )
}

export default Skillinfo;