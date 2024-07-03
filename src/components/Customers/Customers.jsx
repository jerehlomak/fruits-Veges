import { Col, Container, Row } from "react-bootstrap"


const Customers = () => {
    const counters = [
        {
            title: "satisfied customers",
            number: 354,
        },
        {
            title: "quality of service",
            number: "99%",
        },
        {
            title: "quality certificates",
            number: 35,
        },
        {
            title: "Available Products",
            number: 354,
        },
    ]
  return (
    <div className="container-fluid py-5">
        <Container>
            <div className="bg-light p-5 rounded">
                <Row className="g-4 justify-content-center">
                    {counters.map((counter, idx)=> (
                        <Col key={idx} md={6} lg={6} xl={3}>
                            <div className="counter bg-white rounded p-5">
                                <i className="fa fa-users text-secondary"></i>
                                <h4>{counter.title}</h4>
                                <h1>{counter.number}</h1>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
    </div>
  )
}

export default Customers