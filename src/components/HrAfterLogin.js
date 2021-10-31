import React from 'react'
import { Redirect } from "react-router-dom";
import Navbars from './Navbars';

function HrAfterLogin() {
  let authuser = sessionStorage.getItem('Key_Veriable')
  console.log(authuser)
  if (authuser == null) {
    return (<Redirect to="/hrlogin" />)
  }
  else {
    let name = sessionStorage.getItem('hrname')
    console.log(name)
    return (
      <div>
        <Navbars/>
        <br />
        <h3>WELCOME {name}</h3>
        <h3>THIS IS HR DASH BOARD</h3>
      </div>
    )
  }
}

export default HrAfterLogin;
