import React from 'react';
import { Redirect } from "react-router-dom";

function Logout() {
  let authuser = sessionStorage.getItem('Key_Veriable')
  console.log(authuser)
  if (authuser === 'ADMIN' || authuser === 'USER') {
    sessionStorage.removeItem('Key_Veriable')
    sessionStorage.removeItem('useremail')
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('usermobile')
    sessionStorage.removeItem('userdepartment')
    sessionStorage.removeItem('usersession')
    sessionStorage.removeItem('hremail')
    sessionStorage.removeItem('hrname')
  }
  return (<Redirect to="/" />)
}


export default Logout
