import { Col, Container, Row } from "react-bootstrap"


const Footer = () => {
  return (
    <footer className="footer container-fluid bg-dark text-white-50 pt-5 mt-5">
        <Container className="py-5">
            <div className="pb-4 mb-4" style={{ borderBottom: "1px solid rgba(226, 175, 25, 0.5)" }}>
                <Row className="g-4">
                    <Col lg={3}>
                        <a href="#">
                            <h1 className="text-primary mb-0">Fruitables</h1>
                            <p className="text-secondary mb-0">Fresh products</p>
                        </a>
                    </Col>
                    <Col lg={6}>
                        <div className="position-relative mx-auto">
                            <input 
                                type="email" 
                                placeholder="Your Email" 
                                className="form-control border-0 w-100 py-3 px-4 rounded-pill"
                            />
                            <button 
                                type="submit" 
                                className="btn btn-primary border-0 border-secondary py-3 px-4 position-absolute rounded-pill text-white"
                                style={{top: 0, right: 0}}
                            >
                                Subscribe Now
                            </button>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="d-flex justify-content-end pt-3">
                            <a href="#" className="btn btn-outline-secondary me-2 btn-md-square rounded-circle">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="btn btn-outline-secondary me-2 btn-md-square rounded-circle">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="btn btn-outline-secondary me-2 btn-md-square rounded-circle">
                                <i className="fab fa-youtube"></i>
                            </a>
                            <a href="#" className="btn btn-outline-secondary me-2 btn-md-square rounded-circle">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </Col>
                </Row>
            </div>
            <Row className="g-5">
                    <Col lg={3} md={6}>
                        <div class="footer-item">
                            <h4 className="text-light mb-3">Why People Like us!</h4>
                            <p className="mb-4">typesetting, remaining essentially unchanged. It was 
                                popularised in the 1960s with the like Aldus PageMaker including of Lorem Ipsum.</p>
                            <a href="" className="btn border-secondary py-2 px-4 rounded-pill text-primary">Read More</a>
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <div className="d-flex flex-column text-start footer-item">
                            <h4 className="text-light mb-3">Shop Info</h4>
                            <a className="btn-link" href="">About Us</a>
                            <a className="btn-link" href="">Contact Us</a>
                            <a className="btn-link" href="">Privacy Policy</a>
                            <a className="btn-link" href="">Terms & Condition</a>
                            <a className="btn-link" href="">Return Policy</a>
                            <a className="btn-link" href="">FAQs & Help</a>
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <div className="d-flex flex-column text-start footer-item">
                            <h4 className="text-light mb-3">Account</h4>
                            <a className="btn-link" href="">My Account</a>
                            <a className="btn-link" href="">Shop details</a>
                            <a className="btn-link" href="">Shopping Cart</a>
                            <a className="btn-link" href="">Wishlist</a>
                            <a className="btn-link" href="">Order History</a>
                            <a className="btn-link" href="">International Orders</a>
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <div className="footer-item">
                            <h4 className="text-light mb-3">Contact</h4>
                            <p>Address: 1429 Netus Rd, NY 48247</p>
                            <p>Email: jerrylomak@gmail.com</p>
                            <p>Phone: +0123 4567 8910</p>
                            <p>Payment Accepted</p>
                            <img src="img/payment.png" className="img-fluid" alt="" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center pt-5">
                        <span class="text-light">
                            <a href="#"><i class="fas fa-copyright text-light me-2"></i>
                            Fruits & Veggies
                            </a>, All right reserved.
                        </span>
                    </Col>
                </Row>
        </Container>
    </footer>
  )
}

export default Footer