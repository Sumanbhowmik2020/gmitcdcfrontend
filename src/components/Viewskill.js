import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbars from './Navbars';
// import NavigationBar from './NavigationBar';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';

function Viewskill() {
    const [studentskilllist, setStudentskillList] = useState([]);
    // const [newslist, setNewsList] = useState([]);
    const [msg, setMsg] = useState("");

    //Similar to componentDidMount and componentDidUpdate
    useEffect(() => {
        axios.get('https://backendcdcgmit.herokuapp.com/skillinfo/')
            .then(response => {
                console.log(response.data)
                setStudentskillList(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])




    function viewStudentSkillList() {
        return studentskilllist.map((currentrow, index) => {
            if (currentrow.status === "0") {
                return (
                    <tr key={index}>
                        {/* <td>{currentrow.nname}</td> */}

                        <td>{currentrow.studentname}</td>
                        <td>{currentrow.studentemail}</td>
                        <td>{currentrow.studentdepartment}</td>
                        <td>{currentrow.studentsession}</td>
                        <td>{currentrow.studentskillname}</td>
                        <td>{currentrow.studentorganization}</td>
                        <td>{currentrow.stdentprojectname}</td>
                        <td>{currentrow.studentprojecturl}</td>


                        <td><button onClick={() => approveStudents(index)} className="btn btn-success" >Approve</button> </td>
                        <td><button onClick={() => removeRow(index)} className="btn btn-danger" >Delete</button> </td>
                    </tr>
                );
            }
            else if (currentrow.status === "1") {
                return (
                    <tr key={index}>
                        {/* <td>{currentrow.nname}</td> */}
                        <td>{currentrow.studentname}</td>
                        <td>{currentrow.studentemail}</td>
                        <td>{currentrow.studentdepartment}</td>
                        <td>{currentrow.studentsession}</td>
                        <td>{currentrow.studentskillname}</td>
                        <td>{currentrow.studentorganization}</td>
                        <td>{currentrow.stdentprojectname}</td>
                        <td>{currentrow.studentprojecturl}</td>
                        <td><button onClick={() => rejectStudents(index)} className="btn btn-warning" >Deny</button> </td>
                        <td><button onClick={() => removeRow(index)} className="btn btn-danger" >Delete</button> </td>
                    </tr>
                );
            }

            else if (currentrow.status === "-1") {
                return (
                    <tr key={index}>
                        <td>{currentrow.studentname}</td>
                        <td>{currentrow.studentemail}</td>
                        <td>{currentrow.studentdepartment}</td>
                        <td>{currentrow.studentsession}</td>
                        <td>{currentrow.studentskillname}</td>
                        <td>{currentrow.studentorganization}</td>
                        <td>{currentrow.stdentprojectname}</td>
                        <td>{currentrow.studentprojecturl}</td>
                        <td><button onClick={() => approveStudents(index)} className="btn btn-success" >Approve</button> </td>
                        <td><button onClick={() => removeRow(index)} className="btn btn-danger" >Delete</button> </td>
                    </tr>
                );
            }
        });
    }


    function removeRow(index) {
        var templist = [...studentskilllist];
        let re = templist.splice(index, 1);
        // console.log("hello")
        // console.log(templist)
        axios.delete('https://backendcdcgmit.herokuapp.com/skillinfo/remove/' + re[0].studentemail)
            .then(res => {
                console.log(res.data)
                setMsg("Skills Deleted Succesfully.");
                setStudentskillList(templist)
            })
            .catch(err => {
                console.log(err)
                setMsg('INVALID Skills ID');
            })
    }
    function approveStudents(index) {
        var temp = [...studentskilllist];
        axios.put('https://backendcdcgmit.herokuapp.com/skillinfo/approve/' + temp[index].studentemail)
            .then(response => {
                console.log(response)
                temp[index].status = "1"
                setStudentskillList(temp);
            })
            .catch(err => {
                console.log(err);
            })
    }
    function rejectStudents(index) {
        var temp = [...studentskilllist];
        axios.put('https://backendcdcgmit.herokuapp.com/skillinfo/reject/' + temp[index].studentemail)
            .then(response => {
                // console.log(response)
                temp[index].status = "-1"
                setStudentskillList(temp);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            {/* <NavigationBar /> */}
            <Navbars />
            <br />
            <h3 align="center">ALL  STUDENT SKILL DETAILS</h3>
            {/* <table border="1" align="center" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th> */}
            {/* <th>DOB</th>
            <th>Gender</th>
            <th>Country</th>
            <th>Address</th> */}
            {/* </tr>
        </thead> */}
            <Container style={{ overflowX: 'auto' }}>
                <Table striped bordered hover variant="white">
                    <thead>
                        <tr>
                            <th>Name</th>
                            {/* <th>Name</th> */}
                            <th>Email</th>
                            
                            <th>Department</th>
                            <th>Session</th>
                            <th>Skill</th>
                            <th>Organization</th>
                            <th>Project Name</th>
                            <th>Project Url</th>

                            <th>Action</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {viewStudentSkillList()}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}


export default Viewskill