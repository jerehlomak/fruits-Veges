
import { Container, Col, Row } from "react-bootstrap";

import { products, categories, featuredProducts } from "../../constants/constants";
import SingleProduct from "../ProductItem/SingleProduct";
import FeaturedProduct from "../ProductItem/FeaturedProduct";
import Category from "../Category/Category";
import { Link } from "react-router-dom";

const Shop = () => {
    
  return (
    <div className='container-fluid fruite py-5'>
        <Container className='py-5'>
            <h1 class="mb-4">Fresh fruits shop</h1>
            <Row className='g-4'>
                <Col lg={12}>
                    <Category />

                    <Row className="g-4">
                        <Col lg={3}>
                            <Row className="g-4">
                                <Col lg={12}>
                                    <div className="mb-3">
                                        <h4>Categories</h4>
                                        <ul class="list-unstyled fruite-categorie">
                                            {categories.map((item, idx)=> (
                                                <li key={idx}>
                                                    <div className="d-flex justify-content-between fruite-name">
                                                        <a href="#"><i className="fas fa-apple-alt me-2"></i>{item.fruit}</a>
                                                        <span>({item.number})</span>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div className="mb-3">
                                        <h4 className="mb-2">Price</h4>
                                        <input type="range" className="form-range w-100" id="rangeInput" name="rangeInput" min="0" max="500" value="0" oninput="amount.value=rangeInput.value" />
                                        <output id="amount" name="amount" min-velue="0" max-value="500" for="rangeInput">0</output>
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div class="mb-3">
                                        <h4>Additional</h4>
                                        <div class="mb-2">
                                            <input type="radio" class="me-2" id="Categories-1" name="Categories-1" value="Beverages" />
                                            <label for="Categories-1"> Organic</label>
                                        </div>
                                        <div class="mb-2">
                                            <input type="radio" class="me-2" id="Categories-2" name="Categories-1" value="Beverages" />
                                            <label for="Categories-2"> Fresh</label>
                                        </div>
                                        <div class="mb-2">
                                            <input type="radio" class="me-2" id="Categories-3" name="Categories-1" value="Beverages" />
                                            <label for="Categories-3"> Sales</label>
                                        </div>
                                        <div class="mb-2">
                                            <input type="radio" class="me-2" id="Categories-4" name="Categories-1" value="Beverages" />
                                            <label for="Categories-4"> Discount</label>
                                        </div>
                                        <div class="mb-2">
                                            <input type="radio" class="me-2" id="Categories-5" name="Categories-1" value="Beverages" />
                                            <label for="Categories-5"> Expired</label>
                                        </div>
                                    </div>
                                </Col>

                                <FeaturedProduct />
                                
                            </Row>
                        </Col>
                        <Col lg={9}>
                            <Row className="g-4 justify-content-center">
                                {products.map((product, index) => (
                                    <Col md={9} lg={6} xl={4} key={index}>
                                        <Link to={`/products/${index}`}>
                                        <SingleProduct
                                            imgSrc={product.imgSrc}
                                            category={product.category}
                                            name={product.name}
                                            description={product.description}
                                            price={product.price}
                                        />
                                        </Link>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>


                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Shop