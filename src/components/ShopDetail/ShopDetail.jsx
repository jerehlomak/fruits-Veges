import { Container, Row, Col } from "react-bootstrap"
import FeaturedProduct from "../ProductItem/FeaturedProduct"
import Category from "../Category/Category"
import { categories } from "../../constants/constants"
import { Outlet, Link } from "react-router-dom"

const ShopDetail = () => {
  return (
    <div className='container-fluid py-5'>
        <Container>
            <Row className="py-5">
                <Col lg={8} xl={9}>
                    <Row className='g-4'>
                        <Col lg={6}>
                            <div class="border rounded">
                                <a href="#">
                                    <img src="img/single-item.jpg" className="img-fluid rounded" alt="Image" />
                                </a>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <h4 className="fw-bold mb-3">Brocoli</h4>
                            <p className="mb-3">Category: Vegetables</p>
                            <h5 className="fw-bold mb-3">3.35 $</h5>
                            <div className="d-flex mb-4">
                                <i className="fa fa-star text-secondary"></i>
                                <i className="fa fa-star text-secondary"></i>
                                <i className="fa fa-star text-secondary"></i>
                                <i className="fa fa-star text-secondary"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <p className="mb-4">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
                            <p className="mb-4">Susp endisse ultricies nisi vel quam suscipit. Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish</p>

                            <div className="input-group quantity mb-5" style={{width: "100px"}}>
                                <div className="input-group-btn">
                                    <button className="btn btn-sm btn-minus rounded-circle bg-light border" >
                                        <i className="fa fa-minus"></i>
                                    </button>
                                </div>
                                <input type="text" className="form-control form-control-sm text-center border-0" value="1" />
                                <div className="input-group-btn">
                                    <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                                        <i className="fa fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                            <a href="#" className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                        </Col>
                        <Col lg={12}>
                            <nav>
                                <div class="nav nav-tabs mb-3">
                                    <Link to='/products'>
                                        <button class="nav-link activ border-white border-bottom-0" type="button">Description</button>
                                    </Link>
                                    <Link to='/reviews'>
                                        <button class="nav-link border-white border-bottom-0" type="button">Reviews</button>
                                    </Link>
                                    <Outlet />
                                </div>
                            </nav> 
                        </Col>
                    </Row>
                </Col>
                <Col lg={8} xl={3}>
                    <Col lg={12}>
                        <div class="input-group w-100 mx-auto d-flex pb-5">
                            <input
                            type="search"
                            class="form-control p-3"
                            placeholder="keywords"
                            aria-describedby="search-icon-1"
                            />
                            <span id="search-icon-1" class="input-group-text p-3">
                            <i class="fa fa-search"></i>
                            </span>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="mb-3 pb-2">
                            <h4>Categories</h4>
                            <ul class="list-unstyled fruite-categorie">
                                {categories.map((item, idx)=> (
                                    <li key={idx}>
                                        <div className="d-flex justify-content-between fruite-name pb-2">
                                            <a href="#"><i className="fas fa-apple-alt me-2"></i>{item.fruit}</a>
                                            <span>({item.number})</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Col>
                    <FeaturedProduct />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ShopDetail