import React, { useState , useEffect} from 'react'
import axios from 'axios'
import Navbars from "./Navbars";
//import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Button, Row, Form, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Container, Modal } from 'react-bootstrap';

const suman =()=>{
    return(
        <div>
            hi
        </div>
    )
}


function Hrsearchresume() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let history = useHistory();
    const [studentlist, setStudentList] = useState([]);
    //  const [eemail, setStudentEmail] = useState("");
    const [eskill, setStudentSkill] = useState("");
    const [status, setStatus] = useState(false);
    const [msg, setMessage] = useState("");
    const [msgCheck, setmsgCheck] = useState("");
    const [eprofilepic, setStudentProfilepic] = useState("");
    const [selectDate, setselectDate] = useState("")
    let studentcompany = sessionStorage.getItem('hrcompany')
    const onChangeSelectDate = (e) => {
        setselectDate(e.target.value);
         //REMOVE ERROE MSG
    }
  
    const onChangeHandler=()=>{}

   const [particularStudent, setParticularStudent] = useState({
       studentname :"",
       studentemail:"",
       studentskillname:"",
       studentdepartment:"",
       studentsession:"",

   })

useEffect(
    ()=>{

 if(particularStudent.studentemail !="")
{
    axios.get('https://backendcdcgmit.herokuapp.com/basicinfo/search/' +particularStudent.studentemail)
    .then(response => {
        console.log(response.data)
        const { studentprofilepic  } = response.data[0]
        
        setStudentProfilepic(studentprofilepic)

    })
    .catch((error) => {
        console.log(error);
    }) 
}    },[particularStudent]
)

const handleJobupdate= (evt) =>{
    evt.preventDefault();
    console.log(`Form submitted:`);
    // console.log(`EMAIL: ${eemail}`);

    const studentjobinfo = {

        studentcompany:studentcompany,

         studentskillname: particularStudent.studentskillname,
        // studentorganization: eorganization,
        // studentprojectname: eprojectname,
        // studentprojecturl: eprojecturl,

        // studentprojectnote: eprojectnote,


         studentname: particularStudent.studentname,
         studentemail: particularStudent.studentemail,
         studentdept: particularStudent.studentdepartment,
         studentsession: particularStudent.studentsession,
         studentdate:selectDate,
         studentprofilepic:eprofilepic,
    }

    axios.post('https://backendcdcgmit.herokuapp.com/jobinfo/register',studentjobinfo )
    .then(res => {
       
        setmsgCheck(res.data.message)
        window.alert(res.data.message);
    });
    setselectDate('')
    handleClose();
}
    

const onChangeStudentSkill = (e) => {
        setStudentSkill(e.target.value);
        setMessage(''); //REMOVE ERROE MSG
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        axios.get('https://backendcdcgmit.herokuapp.com/skillinfo/skillsearch/' + eskill)
            .then(res => {
                console.log(res.data)
                setStudentList(res.data)
                setStatus(true)
            })
            .catch(err => {
                console.log(err)
                setMessage('Not Found')
            })

        setStudentSkill('')
    }

    function viewStudentskillList() {
        return studentlist.map((currentrow, index) => {
            return (
                <tr key={index}>
                    <td style={{ border: "1px solid black", align: "center" }}>{currentrow.studentname}</td>
                    <td style={{ border: "1px solid black", align: "center" }}>{currentrow.studentemail}</td>
                    <td style={{ border: "1px solid black", align: "center" }}>{currentrow.studentdepartment}</td>
                    <td style={{ border: "1px solid black", align: "center" }}>{currentrow.studentsession}</td>
                    <td style={{ border: "1px solid black", align: "center" }}>{currentrow.studentskillname}</td>
                    <td style={{ border: "1px solid black", align: "center" }}>
                        <Button onClick={() => opencv(index)}>
                            Open CV
                        </Button>
                    </td>
                    <td style={{ border: "1px solid black", align: "center" }}>
                        <Button onClick={() => select(currentrow)}>
                            Select
                        </Button>
                    </td>

                </tr>
            );
        });
    }
    function opencv(index) {
        var temp = [...studentlist]
        history.push("/digitalcv/" + temp[index].studentemail)

    }
    function select(student) {
        console.log(typeof(student));
        setParticularStudent(student);
        handleShow();
        

    }

    if (status === false) {
        return (
            <div>
                <Navbars />
                <br />
                <div className="container" >
                    <Row>
                        <Col md="3"></Col>
                        <Col md="6">
                            <div className="card carddesign form-round" style={{ minHeight: "10rem", width: "100%", backgroundColor: "#b2ffe5" }}>
                                <div className="p-4">
                                    <Row>
                                        <Row className="d-flex justify-content-center py-3">
                                            <h3><center>ENTER SKILL FOR RESUME SEARCH</center></h3>
                                        </Row>
                                        <b style={{ color: "red" }}><center>{msg}</center></b>

                                        <form onSubmit={handleSubmit}>
                                            <Row className="d-flex justify-content-center py-3">
                                                <Col md='12'>
                                                    <div className="form-group">
                                                        <input className=" form-control form-round" type="skill" value={eskill}
                                                            onChange={onChangeStudentSkill}
                                                            placeholder="Skill"
                                                            required />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <center>
                                                <input type="submit" value="SEARCH STUDENT" className="btn btn-success" />
                                            </center>
                                        </form>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col md="3"></Col>
                    </Row>
                </div>

            </div>
        );
    }
    else {
        return (

            <div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title className="text-center"><center>SELECTION</center></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div >
                            <form>
                                <Row>
                                    <Row>
                                <Col md='6'>    
                                <div className="form-group">
                                    <label><b>Name</b></label>
                                    <input type="text" className=" form-control form-round" value={particularStudent.studentname} onChange={onChangeHandler} placeholder="Enter Name" readOnly  required />
                                </div>
                                </Col>
                                <Col md='6'>
                                <div className="form-group">
                                    <label><b>Email</b></label>
                                    <input type="email" className=" form-control form-round" value={particularStudent.studentemail} onChange={onChangeHandler} placeholder="Enter Email" readOnly required />
                                </div>
                                </Col>
                                </Row>
                                <Row>
                                <Col md='6'>
                                <div className="form-group">
                                    <label><b>Skill</b></label>
                                    <input type="skill" className=" form-control form-round" value={particularStudent.studentskillname} onChange={onChangeHandler} placeholder="Enter skill" readOnly required />
                                </div>
                                </Col>
                                <Col md='6'>
                                <div className="form-group">
                                    <label><b>Interview Date</b></label>
                                    <input type="date" className=" form-control form-round"  placeholder="Enter interview date"  value={selectDate} onChange={onChangeSelectDate}  required />
                                </div>
                                </Col>
                                </Row>
                               </Row> 
                            </form>


                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleJobupdate} >
                            SELECT
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Navbars />
                <br />
                <div className="container" >
                    <Row>
                        <Col md="3"></Col>
                        <Col md="6">
                            <div className="card carddesign form-round" style={{ minHeight: "10rem", width: "100%", backgroundColor: "#b2ffe5" }}>
                                <div className="p-4">
                                    <Row>
                                        <Row className="d-flex justify-content-center py-3">
                                            <h3><center>ENTER SKILL FOR RESUME SEARCH</center></h3>
                                        </Row>
                                        <b style={{ color: "red" }}><center>{msg}</center></b>

                                        <form onSubmit={handleSubmit}>
                                            <Row className="d-flex justify-content-center py-3">
                                                <Col md='12'>
                                                    <div className="form-group">
                                                        <input className=" form-control form-round" type="skill" value={eskill}
                                                            onChange={onChangeStudentSkill}
                                                            placeholder="Skill"
                                                            required />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <center>
                                                <input type="submit" value="SEARCH STUDENT" className="btn btn-success" />
                                            </center>
                                        </form>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col md="3"></Col>
                    </Row>
                </div>
                <br /><br />

                <h3><center>STUDENT DETAILS</center></h3>
                <div className="container text-center" >
                    <Table responsive striped bordered hover variant="white " size="sm">
                        <thead>
                            <tr>
                                <th style={{ border: "1px solid black", align: "center" }}>Name</th>
                                <th style={{ border: "1px solid black", align: "center" }}>Email</th>

                                <th style={{ border: "1px solid black", align: "center" }}>Department</th>

                                <th style={{ border: "1px solid black", align: "center" }}>Session</th>
                                <th style={{ border: "1px solid black", align: "center" }}>Skill</th>
                                <th style={{ border: "1px solid black", align: "center" }}>CV LINK</th>
                                <th style={{ border: "1px solid black", align: "center" }}>Select</th>
                            </tr >
                        </thead>

                        <tbody>
                            {viewStudentskillList()}
                        </tbody>
                    </Table>
                </div >
            </div>
        )
    }
}

export default Hrsearchresume
