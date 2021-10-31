import React from 'react'
import Navbars from "./Navbars";
import { Button,Row, Form, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { useState } from 'react';

function ContactUs() {

    const [ename, setContactName] = useState("");
    const [eemail, setContactEmail] = useState("");
    const [emobile, setContactMobile] = useState("");
    const [esubject, setContactSubject] = useState("");
    const [emessage, setContactMessage] = useState("");

    const onChangeContactName = (e) => setContactName(e.target.value);
    const onChangeContactEmail = (e) => setContactEmail(e.target.value);
    const onChangeContactMobile = (e) => setContactMobile(e.target.value);
    const onChangeContactSubject = (e) => setContactSubject(e.target.value);
    const onChangeContactMessage = (e) => setContactMessage(e.target.value);
    
    

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Form submitted:`);
        console.log(`NAME: ${ename}`);
        console.log(`EMAIL: ${eemail}`);

        const contactinfo = {
          contactname: ename,
          contactemail: eemail,
          contactmobile: emobile,
          contactsubject: esubject,
          contactmessage: emessage,
          
          
      }

      axios.post('http://localhost:4500/contact/register', contactinfo)
          .then(res => {
              console.log(res.data)
              window.alert("Registration Sucessful");
              
          });

      setContactName('')
      setContactEmail('')
      setContactMobile('')
      setContactSubject('')
      setContactMessage('')
     
      

    }



  

  return (
    <div>
      <Navbars />
      <br />
      <div className="container" style={{backgroundColor:"#33FFBD"}} >
                          <Row className="d-flex justify-content-center py-3">
                                <h3 style={{backgroundColor:"",color:"grey"}} className="d-flex justify-content-center w-100 " >Contact Us</h3>
                          </Row>
                <Row>
                  <Col>
                <div className="container"  >
                    <div className="card carddesign " >
                        <div className="p-4">
                          <form onSubmit={handleSubmit}>
                           <div className="form-group">
                             <label><b>Your Name</b></label>
                             <input type="name" className=" form-control form-round" placeholder="Enter Your Name" name="name" value={ename}
                    onChange={onChangeContactName} required  />
                           </div>
                           <div className="form-group">
                             <label><b>Your Email</b></label>
                             <input type="email" className=" form-control form-round" placeholder="Enter Your Email" name="email" value={eemail}
                    onChange={onChangeContactEmail} required  />
                           </div>
                           <div className="form-group">
                             <label><b>Contact Number</b></label>
                             <input type="mobile" className=" form-control form-round" placeholder="Enter Your Contact Number" name="mobile" value={emobile}
                    onChange={onChangeContactMobile} required  />
                           </div>
                           <div className="form-group">
                             <label><b>Subject</b></label>
                             <input type="subject" className=" form-control form-round" placeholder="Enter Your Subject" name="subject" value={esubject}
                    onChange={onChangeContactSubject} required  />
                           </div>
                           <div className="form-group">
                             <label><b>Message</b></label>
                             <textarea type="message" className=" form-control form-round" placeholder="Message" name="message" required rows="3" value={emessage}
                    onChange={onChangeContactMessage}>
                               </textarea>
                           </div>
                           <input type="submit" className="btn btn-primary btn-block  form-round"  value="Submit" />
                          </form>
                        </div>
                    </div>
                    
                 </div>
                 </Col>
                 <br/>
                 <Col>
                 <Row>
                   <div className="container" >
                    <div className="card carddesign " >
                        <div className="p-4">
                         <h4>College Contact:</h4>
                         <h6>* Gargi Memorial Institute of Technology, Balarampur, Mouza Beralia</h6>
                         
                         <h6>* Baruipur, Kolkata - 700144</h6>
                         <h6>* +91 33 2433-0113</h6>
                         <h6>* +91 33 2701-7511</h6>
                        </div>
                    </div>
                   </div>
                   </Row>
                   <br/>
                   <Row>
                   <div className="container" >
                    <div className="card carddesign " >
                        <div className="p-4">
                         <h4>City Office Contact:</h4>
                         <h6>* 3, Suren Tagore Road</h6>
                         <h6>* Kolkata - 700 019</h6>
                         <h6>* +91 33 2440-6245</h6>
                         <h6>* +91 33 2460-5124</h6>
                         
                        </div>
                    </div>
                   </div>
                   </Row>
                   <br/>
                   <Row>
                   <div className="container" >
                    <div className="card carddesign " >
                        <div className="p-4">
                         <h4>24 * 7 Help Line:</h4>
                         <h6>* suman.bhowmik.cse@gmail.com</h6>
                         <h6>* +91 8250297161</h6>
                         
                         
                        </div>
                    </div>
                   </div>
                   </Row>
                  </Col>
                 </Row>
              </div>
    </div>
  )
}

export default ContactUs
