import { Container, Row, Col } from "react-bootstrap"

const Banner = () => {
  return (
    <div class="container-fluid banner bg-secondary my-5">
            <Container className="py-5">
                <Row className="g-4 align-items-center">
                    <Col lg={6}>
                        <div className="py-4">
                            <h1 className="display-3 text-white">Fresh Exotic Fruits</h1>
                            <p className="fw-normal display-3 text-dark mb-4">in Our Store</p>
                            <p className="mb-4 text-dark">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
                            <a href="#" className="banner-btn btn border-2 border-white rounded-pill text-dark py-3 px-5">BUY</a>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div class="position-relative">
                            <img src="img/baner-1.png" className="img-fluid w-100 rounded" alt="" />
                            <div className="d-flex align-items-center justify-content-center bg-white rounded-circle position-absolute" style={{width: "140px", height: "140px", top: 0, left: 0}}>
                                <h1 style={{fontSize: "100px"}}>1</h1>
                                <div className="d-flex flex-column">
                                    <span className="h2 mb-0">50$</span>
                                    <span className="h4 text-muted mb-0">kg</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
  )
}

export default Banner