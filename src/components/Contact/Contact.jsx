import { Container, Row, Col } from "react-bootstrap"

const Contact = () => {
  return (
    <div className="container-fluid py-5">
        <Container>
            <div className="p-5 bg-light rounded">
                <Row className='g-4'>
                    <Col>
                        <div className="text-center mx-auto" style={{maxWidth: "700px"}}>
                            <h1 className="text-primary">Get in touch</h1>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="h-100 rounded">
                            <iframe className="rounded w-100" 
                            style={{height: "400px"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd" 
                            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </Col>
                    <Col lg={7}>
                        <form>
                            <input type="text" className="w-100 form-control border-0 py-3 mb-4" placeholder="Your Name" />
                            <input type="email" className="w-100 form-control border-0 py-3 mb-4" placeholder="Enter Your Email" />
                            <textarea className="w-100 form-control border-0 mb-4" rows="5" cols="10" placeholder="Your Message"></textarea>
                            <button className="w-100 btn form-control border-secondary py-3 bg-white text-primary " type="submit">Submit</button>
                        </form>
                    </Col>
                    <Col lg={5}>
                        <div class="d-flex p-4 rounded mb-4 bg-white">
                            <i class="fas fa-map-marker-alt fa-2x text-primary me-4"></i>
                            <div>
                                <h4>Address</h4>
                                <p class="mb-2">123 Street New York.USA</p>
                            </div>
                        </div>
                        <div class="d-flex p-4 rounded mb-4 bg-white">
                            <i class="fas fa-envelope fa-2x text-primary me-4"></i>
                            <div>
                                <h4>Mail Us</h4>
                                <p class="mb-2">info@example.com</p>
                            </div>
                        </div>
                        <div class="d-flex p-4 rounded bg-white">
                            <i class="fa fa-phone-alt fa-2x text-primary me-4"></i>
                            <div>
                                <h4>Telephone</h4>
                                <p class="mb-2">(+012) 3456 7890</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </div>
  )
}

export default Contact