import React from 'react'
import { Redirect } from "react-router-dom";
import Navbars from "./Navbars";

function AdminAfterLogin() {
  let authuser = sessionStorage.getItem('Key_Veriable')
  console.log(authuser)
  if (authuser == null) {
    return (<Redirect to="/adminlogin" />)
  }
  else {
    return (
      <div >
        <Navbars />

        <br />
        <div className="container" style={{ backgroundColor: "#F0EEBA" }}>
        <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h3> <center>WELCOME ADMIN</center></h3>
          <h3><center>THIS IS ADMIN DASH BOARD</center></h3>
          <br />
          <br />
          <br />
          <br />
          <br />
   
          <br />
          <br />
          <br />
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

      </div>
    )
  }
}

export default AdminAfterLogin
