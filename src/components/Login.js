



import React, { useState } from 'react';
//import 'bootstrap/dist/css/bootstrap.css';
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

let Login = (props) => {
  const [eemail, setStudentEmail] = useState("");
  const [epassword, setStudentPassword] = useState("");;
  const [msg, setMessage] = useState("");;

  const onChangeStudentEmail = (e) => setStudentEmail(e.target.value);
  const onChangeStudentPassword = (e) => setStudentPassword(e.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(`EMAIL: ${eemail}`);
    console.log(`PASSWORD: ${epassword}`);

    const studentlogininfo = {
      studentemail: eemail,
      studentpassword: epassword
    }

    axios.post('https://backendcdcgmit.herokuapp.com/student/logincheck', studentlogininfo)
      .then(res => {
        console.log(res.data)
        sessionStorage.setItem("Key_Veriable", 'USER')
        sessionStorage.setItem("useremail", res.data[0].studentemail)
        sessionStorage.setItem("username", res.data[0].studentname)
        sessionStorage.setItem("usermobile", res.data[0].studentmobile)
        sessionStorage.setItem("userdepartment", res.data[0].studentdepartment)
        sessionStorage.setItem("usersession", res.data[0].studentsession)
        window.alert("Login Sucessful")
        props.history.push('/userafterlogin')
      })
      .catch(err => {
        console.log(err)
        setMessage('INVALID UID OR PASSWORD')
      })

    setStudentEmail('')
    setStudentPassword('')
  }

  // if (sessionStorage.getItem('useremail'))        return <Redirect to="/userafterlogin" />

  // let history = useHistory();
  // const dispatch = useDispatch();
  // let [user, setUser] = useState({
  //     email: "", password: ""
  // });

  // let name, value;

  // let handleInput = (e) => {
  //     console.log(e);
  //     name = e.target.name;
  //     value = e.target.value;

  //     setUser({ ...user, [name]: value });
  // }

  // var userData = async (e) => {
  //     e.preventDefault();
  //     let { email, password } = user;

  //     Axios.post('/axioslogin', {
  //         email: email,
  //         password: password,

  //     }).then((result) => {
  //         console.log(result)
  //         if (result.data.access) {
  //             const token1 = result.data.access;
  //             localStorage.setItem('token', token1)
  //             let user = jwt(token1)
  //             console.log(user);
  //             dispatch(
  //                 login({
  //                     email:user.userEmail,
  //                     mobile:user.userMobile
  //                 })
  //             )
  //             window.alert("Login Sucessful")
  //             history.push('/StudentDashBoard')

  //         } else {
  //             if (result.data.message) {
  //                 window.alert("Login Unsucessful")
  //             }

  //         }
  //     })

  // }
  return (
    <div style={{ backgroundColor: "#F0EEBA" }}>
      <Navbars />

      <br />
      <br />

      <div className="d-flex justify-content-center align-items-center fontstyle bodycss" >
        <div className="container"  >
          <Row>
            <Col md="3"></Col>
            <Col md="6">
              <div className="card carddesign " style={{ minHeight: "25rem", width: "100%", backgroundColor: "#b2ffe5", borderRadius: "1rem" }}>
                <div className="p-4">
                  <form onSubmit={handleSubmit}>
                    <Row className="d-flex justify-content-center py-3">
                      <h3><center>STUDENT LOGIN</center></h3>
                      <b style={{ color: "red" }}> <center>{msg}</center> </b>
                    </Row>
                    <Row>
                      <Row>
                        <Col md='12'>
                          <div className="form-group">
                            <label><b>Email ID</b></label>
                            <input type="email" className=" form-control rounded-pill form-round" placeholder="Enter email" name="email" value={eemail}
                              onChange={onChangeStudentEmail} />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col md='12'>
                          <div className="form-group">
                            <label><b>Password</b></label>
                            <input type="password" className=" form-control rounded-pill form-round" placeholder="Enter password" name="password" value={epassword}
                              onChange={onChangeStudentPassword} />
                          </div>
                        </Col>
                      </Row>



                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <Row>
                        <Col md='12'>

                          <button type="submit" className="btn btn-primary btn-block rounded-pill form-round" >Submit</button>
                        </Col>
                      </Row>
                    </Row>


                    {/* <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
        </p> */}
                  </form>
                </div>
              </div>
              <Col md="3"></Col>
            </Col>
          </Row>
        </div>
      </div>


      <br />
      <br />

      <br />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
    </div>
  )
}

export default Login;



