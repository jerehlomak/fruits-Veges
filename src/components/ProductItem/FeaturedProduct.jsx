import { Col } from "react-bootstrap";

import { featuredProducts } from "../../constants/constants";

const FeaturedProduct = () => {
  return (
    <>
      <Col lg={12}>
        <h4 class="mb-3">Featured products</h4>
        {featuredProducts.map((item, idx) => (
          <div
            key={idx}
            className="d-flex align-items-center justify-content-start"
          >
            <div
              className="rounded me-4"
              style={{ width: "100px", height: "100px" }}
            >
              <img src={item.img} className="img-fluid rounded" alt="" />
            </div>
            <div>
              <h6 className="mb-2">{item.name}</h6>
              <div className="d-flex mb-2">
                <i className="fa fa-star text-secondary"></i>
                <i className="fa fa-star text-secondary"></i>
                <i className="fa fa-star text-secondary"></i>
                <i className="fa fa-star text-secondary"></i>
                <i className="fa fa-star"></i>
              </div>
              <div className="d-flex mb-2">
                <h5 className="fw-bold me-2">{item.price - item.discount} $</h5>
                <h5 className="text-danger text-decoration-line-through">
                  {item.price} $
                </h5>
              </div>
            </div>
          </div>
        ))}
        <div className="d-flex justify-content-center my-4">
          <a
            href="#"
            className="btn border border-secondary px-4 py-3 rounded-pill text-primary w-100"
          >
            Vew More
          </a>
        </div>
      </Col>
      <Col lg={12}>
            <div className="position-relative">
                <img src="img/banner-fruits.jpg" className="img-fluid w-100 rounded" alt="" />
                <div className="position-absolute" style={{top: "50%", right: '10px', transform: "translateY(-50%)"}}>
                    <h3 className="text-secondary fw-bold">Fresh <br /> Fruits <br /> Banner</h3>
                </div>
            </div>
        </Col>
    </>
  );
};

export default FeaturedProduct;
