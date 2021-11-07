
import 'bootstrap/dist/css/bootstrap.min.css';


function myFooter() {
    return (
        <div style={{ backgroundColor: "#b2ffe5" }}>


            <footer class="text-center text-lg-start bg-light text-muted">

                {/* <section
                    class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                >

                    <div class="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <div href="" class="me-4 text-reset">
                            <i class="fab fa-facebook-f"></i>
                        </div>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-google"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>

                </section> */}

                {/* <br/> */}

                <section class="" style={{ backgroundColor: "#222c6b" }}>
                    <br />
                    <div class="container text-center text-md-start mt-5">

                        <div class="row mt-3">

                            <div class="col-md-6 col-lg-6 col-xl-6 mx-auto mb-6">

                                <h6 class="text-uppercase fw-bold mb-4">
                                    <i class="fas fa-gem me-3"></i>GARGI MEMORIAL INSTITUTE OF TECHNOLOGY
                                </h6>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1517.9410647794264!2d88.44110639338699!3d22.378253050747663!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a026d0097533aed%3A0xe18407a46f2e97f6!2sGargi%20Memorial%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1635264941416!5m2!1sen!2sin"
                                    style={{ width: '100%', height: '140px', border: '0', allowfullscreen: '', loading: 'lazy' }}></iframe>
                                <br />
                                {/* <small><a href="https://maps.google.co.in/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Mumbai&amp;aq=&amp;sll=19.056545,72.853394&amp;sspn=0.010121,0.021136&amp;ie=UTF8&amp;hq=&amp;hnear=Mumbai,+Maharashtra&amp;t=m&amp;z=10&amp;ll=19.075984,72.877656"
                                >View Larger Map</a></small> */}
                            </div>



                            {/* <div class ="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                    <h6 class ="text-uppercase fw-bold mb-4">
                    Products
                    </h6>
                    <p>
                    <a href="#!" class ="text-reset">Angular</a>
                    </p>
                    <p>
                    <a href="#!" class ="text-reset">React</a>
                    </p>
                    <p>
                    <a href="#!" class ="text-reset">Vue</a>
                    </p>
                    <p>
                    <a href="#!" class ="text-reset">Laravel</a>
                    </p>
                    </div> */}



                            {/* <div class ="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                    <h6 class ="text-uppercase fw-bold mb-4">
                    Useful links
                    </h6>
                    <p>
                    <a href="#!" class ="text-reset">Pricing</a>
                    </p>
                    <p>
                    <a href="#!" class ="text-reset">Settings</a>
                    </p>
                    <p>
                    <a href="#!" class ="text-reset">Orders</a>
                    </p>
                    <p>
                    <a href="#!" class ="text-reset">Help</a>
                    </p>
                    </div> */}



                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 class="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
                                <p><i class="fa fa-home me-3"></i> Baruipur, Kolkata - 700144</p>
                                <p>
                                    <i class="fas fa-envelope me-3"></i>
                                    gmitkolkakta.info@gmail.com
                                </p>
                                <p><i class="fas fa-phone me-3"></i> +91 33 2433-0113</p>
                                <p><i class="fas fa-print me-3"></i> +91 33 2701-7511</p>
                            </div>

                        </div>
                    </div>
                </section>

            <section class=""  style={{ backgroundcolor: "#66ba9e" }}>
                <div class="text-center p-4">
                    © 2021 Copyright:
                    <a class="text-reset fw-bold" href="https://cdcgmit.herokuapp.com/">cdcgmit.herokuapp.com</a>
                </div>
                </section>
            </footer>


        </div>
    );
}

export default myFooter;