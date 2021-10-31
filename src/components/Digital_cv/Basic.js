import React, { useState, useEffect } from 'react'
import axios from 'axios'
//import Navbars from "./Navbars";
import 'bootstrap/dist/css/bootstrap.css';

function Basic(email) {
  const [studentbasiclist, setStudentbasicList] = useState([]);
  let authuser = sessionStorage.getItem('useremail');
 // console.log(email.email)
 if(authuser==null) authuser=email.email
  //Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    axios.get('https://backendcdcgmit.herokuapp.com/basicinfo/search/' +authuser)
      .then(response => {
        console.log(response.data)
        setStudentbasicList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  

  return (
    <div>
  {/* //    <Navbars /> */}
      <br />
      <h4>Basic DETAILS</h4>
      <h5 ><img src={studentbasiclist[0]?studentbasiclist[0].studentprofilepic:null} style={{width:"100px"}} className="rounded rounded-circle p-3"/>{studentbasiclist[0]?studentbasiclist[0].studentname:null} </h5> 
          <h5 ></h5>
          <h6 >EMAIL : {studentbasiclist[0]?studentbasiclist[0].studentemail:null}</h6>
          <h6 >MOBILE : {studentbasiclist[0]?studentbasiclist[0].studentmobile:null}</h6>
          <h6 >GENDER : {studentbasiclist[0]?studentbasiclist[0].studentgender:null}</h6>
          <h6 >DATE OF BIRTH :{studentbasiclist[0]?studentbasiclist[0].studentdob:null}</h6>
          <h6 >GITHUB :{studentbasiclist[0]?studentbasiclist[0].studentgithub:null}</h6>
          <h6 >LINKEDIN :{studentbasiclist[0]?studentbasiclist[0].studentlinkedin:null}</h6> 
 
    </div>
  )
}


export default Basic