import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";

import { SampleNextArrow, SamplePrevArrow } from "../../components"
import { veges } from "../../constants/constants";

const Vegetables = () => {
  let settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="container-fluid vesitable py-5">
      <Container className="py-">
        <h1 className="container py-5">Fresh Organic Vegetables</h1>
        <div className="">
          <Slider {...settings}>
          {veges.map((veg, idx)=> (
            <div key={idx} className="border border-primary rounded position-relative vesitable-item">
              <div className="vesitable-img">
                <img
                  src={veg.img}
                  className="img-fluid w-100 rounded-top"
                  alt=""
                />
              </div>
              <div
                className="text-white bg-primary px-3 py-1 rounded position-absolute"
                style={{ top: "10px", right: "10px" }}
              >
                {veg.category}
              </div>
              <div className="p-4 rounded-bottom">
                <h4>{veg.title}</h4>
                <p>
                  {veg.description}
                </p>
                <div className="d-flex justify-content-between flex-lg-wrap">
                  <p className="text-dark fs-5 fw-bold mb-0">{veg.price} / kg</p>
                  <a
                    href="#"
                    className="btn border border-secondary rounded-pill px-3 text-primary"
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary"></i> Add
                    to cart
                  </a>
                </div>
              </div>
            </div>
          ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Vegetables;
