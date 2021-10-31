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

let Addhr = () => {
    //    let history = useHistory();

    const [msg, setMessage] = useState("");

    const [ehrname, setHrName] = useState("");
    const [ehremail, setHrEmmail] = useState("");
    const [ehrmobile, setHrMobile] = useState("");
    const [ehrprofilepic, setHrProfilepic] = useState("");
    const [ehrcompany, setHrCompany] = useState("");
    const [ehrpassword, setHrPassword] = useState("");







    const onChangeHrName = (e) => setHrName(e.target.value);
    const onChangeHrEmail = (e) => setHrEmmail(e.target.value);
    const onChangeHrMobile = (e) => setHrMobile(e.target.value);
    const onChangeHrCompany = (e) => setHrCompany(e.target.value);
    const onChangeHrPassword = (e) => setHrPassword(e.target.value);



    const onChangeHrProfilepic = async e => {
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
                setHrProfilepic(data.url)
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
    }


    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Form submitted:`);
        console.log(`NAME: ${ehrname}`);
        console.log(`EMAIL: ${ehremail}`);

        const hrinfo = {


            hrname: ehrname,
            hremail: ehremail,
            hrmobile: ehrmobile,
            hrprofilepic: ehrprofilepic,
            hrcompany: ehrcompany,
            hrpassword: ehrpassword,

        }

        axios.post('https://backendcdcgmit.herokuapp.com/hr/register', hrinfo)
            .then(res => {
                // console.log(res.data)
                // window.alert("Registration Sucessful");
                setMessage(res.data.message)
                window.alert(res.data.message);
                //   history.push('/Login')
            });



        setHrName('')
        setHrMobile('')
        setHrMobile('')
        setHrProfilepic('')
        setHrCompany('')
        setHrPassword('')


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
                        <Col md="2"></Col>
                        <Col md="8">
                            <div className="card carddesign form-round" style={{ minHeight: "28rem", width: "100%", backgroundColor: "#b2ffe5", borderRadius: "1rem" }}>
                                <div className="p-4">
                                    <form onSubmit={handleSubmit} >

                                        <Row>
                                            <Row className="d-flex justify-content-center py-3">
                                                <h3><center> ADD HR</center></h3>
                                            </Row>
                                            <Row>
                                                <Col md='6'>
                                                    <div className="form-group">
                                                        <label><b>Name</b></label>
                                                        <input type="name" className=" form-control form-round" placeholder="Enter Name" name="name" value={ehrname}
                                                            onChange={onChangeHrName} required />
                                                    </div>
                                                </Col>
                                                <Col md='6'>
                                                    <div className="form-group">
                                                        <label><b>Email</b></label>
                                                        <input type="email" className=" form-control form-round" placeholder="Enter Email " name="email" value={ehremail}
                                                            onChange={onChangeHrEmail} required />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md='6'>
                                                    <div className="form-group">
                                                        <label><b>Mobile</b></label>
                                                        <input type="mobile" className=" form-control form-round" placeholder="Enter mobile " name="mobile" value={ehrmobile}
                                                            onChange={onChangeHrMobile} required />
                                                    </div>

                                                </Col>
                                                <Col>
                                                    <div className="form-group">
                                                        <label><b>Profile Picture</b></label>
                                                        <input type="file" className=" form-control form-round" placeholder="Add profile pic"
                                                            onChange={onChangeHrProfilepic} required />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md='6'>
                                                    <div className="form-group">
                                                        <label><b>Company Name</b></label>
                                                        <input type="companyname" className=" form-control form-round" placeholder="Enter Company Name " name="companyname" value={ehrcompany}
                                                            onChange={onChangeHrCompany} required />
                                                    </div>
                                                </Col>
                                                <Col md='6'>
                                                    <div className="form-group">
                                                        <label><b>Password</b></label>
                                                        <input type="password" className=" form-control form-round" placeholder="Enter password" name="password" value={ehrpassword}
                                                            onChange={onChangeHrPassword} required />
                                                    </div>
                                                </Col>
                                            </Row>

                                            <Row>
                                            <Col md='12'>
                                                <input type="submit" className="btn btn-primary btn-block  form-round" value="Submit" />
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
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

        </div>

    )
}


export default Addhr;