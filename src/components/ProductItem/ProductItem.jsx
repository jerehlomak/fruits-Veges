import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import SingleProduct from "./SingleProduct";
import { products } from "../../constants/constants";


const OrganicProducts = () => {

    return (
        <div className="container-fluid fruite py-5">
            <Container className="py-5">
                <div className="tab-class text-center">
                    <div className="text-center pb-4">
                        <h1>Our Organic Products</h1>
                    </div>
                    <Row className="g-4">
                        
                        <Col lg={12} className="text-center">
                            <ul className="nav nav-pills d-inline-flex text-center mb-5">
                                {['All products', 'Vegetables', 'Fruits', 'Meat'].map((item, idx) => (
                                    <li className="nav-item" key={idx}>
                                        <a className="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-1">
                                            <span className="text-dark" style={{ width: '130px' }}>{item}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </Col>
                    </Row>
                    <Row className="g-4">
                         
                        {products.map((product, index) => (
                            <div className="col-md-6 col-lg-4 col-xl-3" key={index}>
                                <Link to={`/products/${index}`}>
                                <SingleProduct
                                    imgSrc={product.imgSrc}
                                    category={product.category}
                                    name={product.name}
                                    description={product.description}
                                    price={product.price}
                                />
                                </Link>
                            </div>
                        ))}
                        
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default OrganicProducts;
