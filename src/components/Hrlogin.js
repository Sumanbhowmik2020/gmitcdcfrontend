



import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbars from "./Navbars";
import { Button, Row, Form, Col } from 'react-bootstrap';

import { Redirect } from 'react-router-dom';

//import './component.css';

import axios from 'axios';
//import jwt from 'jwt-decode';
//import { useHistory } from 'react-router';
//import { useDispatch } from 'react-redux';
//import { login } from './redux/userSlice';
//import { useHistory } from 'react-router';

let Hrlogin = (props) => {
  const [eemail, setHrEmail] = useState("");
  const [epassword, setHrPassword] = useState("");;
  const [msg, setMessage] = useState("");;

  const onChangeHrEmail = (e) => setHrEmail(e.target.value);
  const onChangeHrPassword = (e) => setHrPassword(e.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(`EMAIL: ${eemail}`);
    console.log(`PASSWORD: ${epassword}`);

    const hrlogininfo = {
      hremail: eemail,
      hrpassword: epassword
    }

    axios.post('https://backendcdcgmit.herokuapp.com/hr/logincheck', hrlogininfo)
      .then(res => {
        console.log(res.data)
        sessionStorage.setItem("Key_Veriable", 'HR')
        sessionStorage.setItem("hremail", res.data[0].hremail)
        sessionStorage.setItem("hrname", res.data[0].hrname)
       
        window.alert("Login Sucessful")
        props.history.push('/hrafterlogin')
      })
      .catch(err => {
        console.log(err)
        setMessage('INVALID UID OR PASSWORD')
      })

    setHrEmail('')
    setHrPassword('')
  }

  // if (sessionStorage.getItem('useremail'))        return <Redirect to="/userafterlogin" />

 
  return (
    <div style={{backgroundColor:"#F0EEBA"}}>
      <Navbars />

      <br />
      <br />

      <div className="d-flex justify-content-center align-items-center fontstyle bodycss" >
        <div className="container"  >
        <Row>
                    <Col md="4"></Col>
                    <Col md="4">
          <div className="card carddesign " style={{ height: "30rem", width: "100%", backgroundColor: "#b2ffe5", borderRadius: "1rem"  }}>
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                <Row className="d-flex justify-content-center py-3">
                <h3><center>HR LOGIN</center></h3>
                </Row>
                <Row>
                <Col md='12'>
                <div className="form-group">
                  <label><b>Email ID</b></label>
                  <input type="email" className=" form-control form-round" placeholder="Enter email" name="email" value={eemail}
                    onChange={onChangeHrEmail} />
                </div>
                </Col>
                </Row>
                <br/>
                <Row>
                <Col md='12'>
                <div className="form-group">
                  <label><b>Password</b></label>
                  <input type="password" className=" form-control form-round" placeholder="Enter password" name="password" value={epassword}
                    onChange={onChangeHrPassword} />
                </div>
                </Col>
                </Row>
                <br />
                <Row>
                <Col md='12'>
                <button type="submit" className="btn btn-primary btn-block rounded-pill form-round" >Submit</button>
                </Col>
               </Row>
              </form>
            </div>
          </div>
          </Col>
                    <Col md="4"></Col>
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

export default Hrlogin;



