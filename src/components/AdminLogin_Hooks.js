import React, { useState } from 'react';
import Navbars from "./Navbars";
import { Button, Row, Form, Col } from 'react-bootstrap';

function AdminLoginHooks(props) {
  const [adminuserid, setAdminUserId] = useState("");
  const [adminpassword, setAdminPassword] = useState("");;
  const [msg, setMessage] = useState("");;

  const onChangeAdminUserId = (e) => setAdminUserId(e.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(`EMAIL: ${adminuserid}`);
    console.log(`PASS: ${adminpassword}`);

    if ((adminuserid === "admin") && (adminpassword === "admin")) {
      sessionStorage.setItem("Key_Veriable", 'ADMIN')
      setMessage('WELCOME ADMIN')
      props.history.push('/adminafterlogin')

    }
    else
      setMessage('INVALID UID OR PASSWORD')

    setAdminUserId('')
    setAdminPassword('')

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
                    <Col md="4"></Col>
                    <Col md="4">
          <div className="card carddesign " style={{ height: "30rem", width: "100%", backgroundColor: "#b2ffe5", borderRadius: "1rem" }}>
            <div className="p-4">
              <h3><center>ADMIN LOGIN</center></h3>
              <b style={{ color: "red" }}><center>{msg}</center></b>
              <br />
              <br />
              <form onSubmit={handleSubmit}>
                <Row>
                <Col md='12'>
                <div>
                  <label><b>User ID</b></label>
                  <input type="text" className=" form-control form-round" value={adminuserid}
                    onChange={onChangeAdminUserId} placeholder="ADMIN USER ID"
                    required />
                </div>
                </Col>
                </Row>
                <br />
                <br />
                <Row>
                <Col md='12'>
                <div>
                  <label><b>Password</b></label>
                  <input type="password" className=" form-control form-round" value={adminpassword}
                    onChange={(e) => setAdminPassword(e.target.value)} placeholder="ADMIN PASSWORD"
                    required />
                </div>
                </Col>
                </Row>
                <br />
                <br />
                <input type="submit" value="ADMIN LOGIN" className="btn btn-danger" />
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
     
    </div>

  );
}
export default AdminLoginHooks