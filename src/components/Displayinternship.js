import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbars from './Navbars';
// import NavigationBar from './NavigationBar';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Displayinternship() {
    const [internshiplist, setInternshipList] = useState([]);
    let studentcompany = sessionStorage.getItem('hrcompany')
    //Similar to componentDidMount and componentDidUpdate
    useEffect(() => {
        axios.get('https://backendcdcgmit.herokuapp.com/jobinfo/search/'+studentcompany)
            .then(response => {
               // console.log(response.data)
                setInternshipList(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    function viewInternshipList() {
        return internshiplist.map((currentrow, index) => {
            return (
                <tr key={index}>
                    <td>{currentrow.studentname}</td>
                    <td>{currentrow.studentemail}</td>
                    <td>{currentrow.studentdept}</td>
                    <td>{currentrow.studentsession}</td>
                    <td>{currentrow.studentskillname}</td>
                    <td>{currentrow.studentdate}</td>
                    <td><img src={currentrow.studentprofilepic} width={60} /></td>
                    <td><button onClick={() => removeRow(index)} className="btn btn-danger" >Delete</button> </td>
                    <a class="mailto" href={`mailto:${currentrow.studentemail}`}>Mail</a>


                </tr>
            );
        });
    }
    function removeRow(index) {
        var templist = [...internshiplist];
        let re = templist.splice(index, 1);
        // console.log("hello")
        // console.log(templist)
        axios.delete('https://backendcdcgmit.herokuapp.com/jobinfo/remove/' + re[0]._id)
          .then(res => {
           // console.log(res.data)
            window.alert("Unselected Succesfully.");
            setInternshipList(templist)
          })
          .catch(err => {
            console.log(err)
            window.alert('INVALID EMAIL ID');
          })
      }

    return (
        <div>
            {/* <NavigationBar /> */}
            <Navbars />
            <br />
            <h3 align="center">ALL SELECTED STUDENT DETAILS</h3>
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
                            <th>Email</th>
                            <th>Department</th>
                            <th>Session</th>
                            <th>Skill Name</th>
                            <th>Interview Date<br/>
                                (YYYY-MM-DD)
                            </th>
                            <th>PROFILE PIC</th>
                            <th>Remove</th>
                            <th>Mail</th>
                            

                        </tr>
                    </thead>

                    <tbody>
                        {viewInternshipList()}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}


export default Displayinternship;