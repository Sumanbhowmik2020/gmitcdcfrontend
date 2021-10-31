import React, { useState, useEffect } from 'react'
import axios from 'axios'
//import Navbars from "./Navbars";
import 'bootstrap/dist/css/bootstrap.css';

function Education(email) {
    const [studentacademiclist, setStudentacademicList] = useState([]);
    let authuser = sessionStorage.getItem('useremail');
    if(authuser==null) authuser=email.email

    //Similar to componentDidMount and componentDidUpdate
    useEffect(() => {
        axios.get('http://localhost:4500/academicinfo/search/' + authuser)
            .then(response => {
                console.log(response.data)
                setStudentacademicList(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    function viewStudentacademicsecList() {
        return studentacademiclist.map((currentrow, index) => {

            return (
                <tr key={index}>
                    {/* <td style={{border:"1px solid black", align:"center"}}>{currentrow.studentname}</td>
          <td style={{border:"1px solid black", align:"center"}}>{currentrow.studentemail}</td>
          <td style={{border:"1px solid black", align:"center"}}>{currentrow.studentmobile}</td> */}
                    <td style={{ border: "1px solid black", align: "center" }}>{currentrow.studentsecschoolname}</td>
                    <td style={{ border: "1px solid black", align: "center" }}>{currentrow.studentsecboardname}</td>
                    <td style={{ border: "1px solid black", align: "center" }}>{currentrow.studentsecpassingyear}</td>
                    <td style={{ border: "1px solid black", align: "center" }}>{currentrow.studentsecpercentage}</td>
                    {/* <td style={{border:"1px solid black", align:"center"}}>{currentrow.studentprojectnote}</td>  */}
                    {/* <td style={{border:"1px solid black", align:"center"}}><img src={currentrow.studentprofilepic} style={{width:"70px"}}/> </td>  */}
                </tr>
            );
        });
    }
    function viewStudentacademichsList() {
        return studentacademiclist.map((currentrow, index) => {

            return (
                <tr key={index}>
                    {/* <td style={{border:"1px solid black", align:"center"}}>{currentrow.studentname}</td>
          <td style={{border:"1px solid black", align:"center"}}>{currentrow.studentemail}</td>
          <td style={{border:"1px solid black", align:"center"}}>{currentrow.studentmobile}</td> */}
                    <td style={{ border: "1px solid black", align: "center" }}>{currentrow.studenthsschoolname}</td>
                    <td style={{ border: "1px solid black", align: "center" }}>{currentrow.studenthsboardname}</td>
                    <td style={{ border: "1px solid black", align: "center" }}>{currentrow.studenthspassingyear}</td>
                    <td style={{ border: "1px solid black", align: "center" }}>{currentrow.studenthspercentage}</td>
                    {/* <td style={{border:"1px solid black", align:"center"}}>{currentrow.studentprojectnote}</td>  */}
                    {/* <td style={{border:"1px solid black", align:"center"}}><img src={currentrow.studentprofilepic} style={{width:"70px"}}/> </td>  */}
                </tr>
            );
        });
    }

    function viewStudentacademiccolList() {
        return studentacademiclist.map((currentrow, index) => {

            return (
                <tr key={index}>
                    {/* <td style={{border:"1px solid black", align:"center"}}>{currentrow.studentname}</td>
          <td style={{border:"1px solid black", align:"center"}}>{currentrow.studentemail}</td>
          <td style={{border:"1px solid black", align:"center"}}>{currentrow.studentmobile}</td> */}
                    <td style={{ border: "1px solid black", align: "center" }}>{currentrow.studentcolschoolname}</td>
                    <td style={{ border: "1px solid black", align: "center" }}>{currentrow.studentcolboardname}</td>
                    <td style={{ border: "1px solid black", align: "center" }}>{currentrow.studentcolpassingyear}</td>
                    <td style={{ border: "1px solid black", align: "center" }}>{currentrow.studentcolpercentage}</td>
                    {/* <td style={{border:"1px solid black", align:"center"}}>{currentrow.studentprojectnote}</td>  */}
                    {/* <td style={{border:"1px solid black", align:"center"}}><img src={currentrow.studentprofilepic} style={{width:"70px"}}/> </td>  */}
                </tr>
            );
        });
    }

    return (
        <div>
            {/* //    <Navbars /> */}
            <br />
            <h4>Academic Details</h4>
            <table style={{ border: "1px solid black", align: "center" ,width:"60%" }}  >
            <h6><center><b>10 th CLASS DETAILS</b></center></h6>
            <table style={{ border: "1px solid black", align: "center", width:"100%"}} >

                <thead >
                    <tr  >
                        <th style={{ border: "1px solid black", align: "center" }}>School Name</th>
                        <th style={{ border: "1px solid black", align: "center" }}>Board Name</th>
                        <th style={{ border: "1px solid black", align: "center" }}>Passing year</th>
                        <th style={{ border: "1px solid black", align: "center" }}>Marks</th>
                        {/* <th style={{border:"1px solid black", align:"center"}}>Project note</th> */}
                        {/* <th style={{border:"1px solid black", align:"center"}}>Github</th>
            <th style={{border:"1px solid black", align:"center"}}>Linkedin</th>
            <th style={{border:"1px solid black", align:"center"}}>Profilepic</th> */}

                    </tr>
                </thead>

                <tbody>
                    {viewStudentacademicsecList()}
                </tbody>
            </table>
            <h6><center><b>12 th CLASS DETAILS</b></center></h6>
            <table style={{ border: "1px solid black", align: "center" , width:"100%" }} >

                <thead >
                    <tr  >
                        <th style={{ border: "1px solid black", align: "center" }}>School Name</th>
                        <th style={{ border: "1px solid black", align: "center" }}>Board Name</th>
                        <th style={{ border: "1px solid black", align: "center" }}>Passing year</th>
                        <th style={{ border: "1px solid black", align: "center" }}>Marks</th>
                        {/* <th style={{border:"1px solid black", align:"center"}}>Github</th>
            <th style={{border:"1px solid black", align:"center"}}>Linkedin</th>
            <th style={{border:"1px solid black", align:"center"}}>Profilepic</th> */}

                    </tr>
                </thead>

                <tbody>
                    {viewStudentacademichsList()}
                </tbody>
            </table>
            <h6><center><b>College DETAILS</b></center></h6>
            <table style={{ border: "1px solid black", align: "center" , width:"100%" }} >

                <thead >
                    <tr  >
                        <th style={{ border: "1px solid black", align: "center" }}>School Name</th>
                        <th style={{ border: "1px solid black", align: "center" }}>Board Name</th>
                        <th style={{ border: "1px solid black", align: "center" }}>Passing year</th>
                        <th style={{ border: "1px solid black", align: "center" }}>Marks</th>
                        {/* <th style={{border:"1px solid black", align:"center"}}>Github</th>
                        <th style={{border:"1px solid black", align:"center"}}>Linkedin</th>
                        <th style={{border:"1px solid black", align:"center"}}>Profilepic</th> */}

                    </tr>
                </thead>

                <tbody>
                    {viewStudentacademiccolList()}
                </tbody>
            </table>
            </table>
        </div>
    )
}


export default Education