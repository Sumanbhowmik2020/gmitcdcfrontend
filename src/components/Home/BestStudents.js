import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import std10 from '../../img/std10.jpg';
import std11 from '../../img/std11.jpg';
import std12 from '../../img/std12.jpg';
import std13 from '../../img/std13.jpg';

function HighLights(){
    return(
        <div className='container row mx-auto text-center'>
            <div className='col'>
                <Card style={{height:'28rem', width: '15rem' }} className='mx-auto m-1'>
                    <Card.Img variant="top" src={std10} />
                    <Card.Body>
                        <Card.Title>Rohit Das </Card.Title>
                        <Card.Text>
                        <p>
                            <span style={{fontWeight: 'bold'}}>Placed at: </span> Hydro Technologies <br />
                            <span style={{fontWeight: 'bold'}}>Salary: </span> 4 LPA <br />
                            <span style={{fontWeight: 'bold'}}>Passout Batch: </span> 2021  <br />
                            <span style={{fontWeight: 'bold'}}>Dept: </span> ME  <br />
                        </p>
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </div>
            <div className='col'>
                <Card style={{height:'28rem', width: '15rem' }} className='mx-auto m-1'>
                    <Card.Img variant="top" src={std11} />
                    <Card.Body>
                        <Card.Title>Enakshi Guha Thaurata</Card.Title>
                        <Card.Text>
                        <p>
                            <span style={{fontWeight: 'bold'}}>Placed at: </span> Tata Consultancy Services <br />
                            <span style={{fontWeight: 'bold'}}>Salary: </span> 3.2 LPA <br />
                            <span style={{fontWeight: 'bold'}}>Passout Batch: </span> 2021  <br />
                            <span style={{fontWeight: 'bold'}}>Dept: </span> CSE  <br />
                        </p>
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </div>
            <div className='col'>
                <Card style={{height:'28rem', width: '15rem' }} className='mx-auto m-1'>
                    <Card.Img variant="top" src={std12} />
                    <Card.Body>
                        <Card.Title>Sovan Chandra Sen</Card.Title>
                        <Card.Text>
                        <p>
                            <span style={{fontWeight: 'bold'}}>Placed at: </span> Greenwave Solution <br />
                            <span style={{fontWeight: 'bold'}}>Salary: </span> 3.6 LPA <br />
                            <span style={{fontWeight: 'bold'}}>Passout Batch: </span> 2021 <br />
                            <span style={{fontWeight: 'bold'}}>Dept: </span> CSE  <br />
                        </p>
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </div>
            <div className='col'>
                <Card style={{height:'28rem', width: '15rem' }} className='mx-auto m-1'>
                    <Card.Img variant="top" src={std13} />
                    <Card.Body>
                        <Card.Title>Pritam Gayen</Card.Title>
                        <Card.Text>
                        <p>
                            <span style={{fontWeight: 'bold'}}>Placed at: </span> Ernst & Young <br />
                            <span style={{fontWeight: 'bold'}}>Salary: </span> 3.72 LPA <br />
                            <span style={{fontWeight: 'bold'}}>Passout Batch: </span> 2021  <br />
                            <span style={{fontWeight: 'bold'}}>Dept: </span> CSE  <br />
                        </p>
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </div>

        </div>
    );
}

export default HighLights;