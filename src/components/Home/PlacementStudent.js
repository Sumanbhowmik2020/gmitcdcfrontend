import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
//import { Card } from 'react-bootstrap';
import { Col, Container, Row, Button, Card, Tabs, Tab, CardGroup, Carousel } from 'react-bootstrap';

function PlacementStudent() {

    const [placementlist, setPlacementList] = useState([]);

    useEffect(() => {
        axios.get('https://backendcdcgmit.herokuapp.com/placementinfo/home')
            .then(response => {
                console.log(response.data)
                setPlacementList(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    function viewStudent() {
        return placementlist.map((currentrow, index) => {
            return (
                <Col key={index} style={{ width: "15rem" }} >
                    <Card style={{height:'28rem', width: '15rem' }} className='mx-auto m-1'>

                        <Card.Img variant="top" src={currentrow.studentprofilepic} />
                        <Card.Body>
                        <Card.Title><b>{currentrow.studentname} </b></Card.Title>
                        <Card.Text>
                        <p>
                            <span style={{fontWeight: 'bold'}}>Placed at: </span> {currentrow.studentcompany}<br />
                            <span style={{fontWeight: 'bold'}}>Salary: </span>{currentrow.studentsalary}<br />
                            <span style={{fontWeight: 'bold'}}>Passout Batch: </span>{currentrow.studentpassout} <br />
                            <span style={{fontWeight: 'bold'}}>Dept: </span> {currentrow.studedentdept}  <br />
                            <span style={{fontWeight: 'bold'}}>Selection Date: </span> {currentrow.studentdate}  <br />
                        </p>
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                        
                        {/* <small className="text-muted"> {currentrow.ncat}</small>
                   <Card.Body>
                     <Card.Title style={{ maxHeight: "26px", marginTop: "5px", overflow: "hidden" }}>{currentrow.ntitle}.</Card.Title>
                     <Card.Text style={{ maxHeight: "26px", marginTop: "5px", overflow: "hidden" }}>{currentrow.ndesp}</Card.Text>
                     
                   </Card.Body> */}
                    </Card>
                </Col>
            )
        })
    }

    return (
        <div className='container row mx-auto text-center' >
            <Container style={{ overflowX: 'auto' }}>
                <Row >
                    {viewStudent()}
                </Row>

            </Container>
        </div>
    )

}

export default PlacementStudent;