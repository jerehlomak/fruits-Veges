import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { Navbar, MainBanner,  Footer } from '../components'


const PageNotFound = () => {
  return (
    <>
        <Navbar />
        <MainBanner title='404 Error' />
        <div class="container-fluid py-5">
            <Container className="py-5 text-center">
                <Row className="row justify-content-center">
                    <Col lg={6}>
                        <i class="bi bi-exclamation-triangle display-1 text-secondary"></i>
                        <h1 class="display-1">404</h1>
                        <h1 class="mb-4">Page Not Found</h1>
                        <p class="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                        <Link class="btn border-secondary rounded-pill py-3 px-5" to='/'>Go Back To Home</Link>
                    </Col>
                </Row>
            </Container>
        </div>
        <Footer />
    </>
  )
}

export default PageNotFound