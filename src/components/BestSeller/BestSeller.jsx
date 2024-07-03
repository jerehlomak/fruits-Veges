import { Container, Row, Col } from "react-bootstrap";
import BestSeller2 from "./BestSeller2";

const BestSeller = () => {
  const bestSeller = [
    {
      img: "img/best-product-1.jpg",
      name: "Organic Tomato",
      rating: "",
      price: "3.23",
    },
    {
      img: "img/best-product-2.jpg",
      name: "Organic Tomato",
      rating: "",
      price: "3.23",
    },
    {
      img: "img/best-product-3.jpg",
      name: "Organic Tomato",
      rating: "",
      price: "3.23",
    },
  ];
  return (
    <div className="container-fluid py-5">
      <Container className="py-5">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "700px" }}>
          <h1 className="display-4">Bestselling Products</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, omnis
            ab. Exercitationem iusto voluptas tempora rerum, cum eligendi
            obcaecati dolores.
          </p>
        </div>
        <Row className="g-4">
          {bestSeller.map((best, idx) => (
            <Col key={idx} lg={6} xl={4}>
              <div className="p-4 rounded bg-light">
                <Row>
                  <Col>
                    <img
                      src={best.img}
                      className="img-fluid rounded-circle w-100"
                      alt=""
                    />
                  </Col>
                  <Col>
                    <a href="#" className="h5">
                      {best.name}
                    </a>
                    <div className="d-flex my-3">
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <h4 className="mb-3">{best.price} $</h4>
                    <a
                      href="#"
                      className="btn border border-secondary rounded-pill px-3 text-primary"
                    >
                      <i className="fa fa-shopping-bag me-2 text-primary"></i>
                      Add to cart
                    </a>
                  </Col>
                </Row>
              </div>
            </Col>
          ))}
          <BestSeller2 />
        </Row>
      </Container>
    </div>
  );
};

export default BestSeller;
