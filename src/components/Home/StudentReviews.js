import std11 from '../../img/std11.jpg';
import std12 from '../../img/std12.jpg';
import std13 from '../../img/std13.jpg';
import std14 from '../../img/std14.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';

function Latest(){
    return(
        <div className='container text-center'>
             <br /> <br /> <br />
            <div className='row'>
                <div className='col bg-in' style={{}}>
                    <Card style={{}}>
                        <Card.Img variant="top" src={std11} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                <p>This is my review for Gargi Memorial Institute of Technology</p>
                                <footer class="blockquote-footer float-right">Enakshi Guha Thaurata</footer>
  
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </div>

                <div className='col bg-prima' style={{}}>
                    <Card style={{}}>
                        <Card.Img variant="top" src={std12} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            <p>This is my review for Gargi Memorial Institute of Technology</p>
                                <footer class="blockquote-footer float-right">Sovan Chandra Sen</footer>
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </div>
            {/* </div> */}

            {/* <div className='row'> */}
                <div className='col bg-warni' style={{}}>
                    <Card style={{}}>
                        <Card.Img variant="top" src={std13} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            <p>This is my review for Gargi Memorial Institute of Technology</p>
                                <footer class="blockquote-footer float-right">Pritam Gayen</footer>
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </div>

                <div className='col bg-in' style={{}}>
                    <Card style={{}}>
                        <Card.Img variant="top" src={std14} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            <p>This is my review for Gargi Memorial Institute of Technology</p>
                                <footer class="blockquote-footer float-right">Moinak Ghosh</footer>
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Latest;