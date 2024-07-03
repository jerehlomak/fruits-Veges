import { Container } from "react-bootstrap"

import { SampleNextArrow, SamplePrevArrow } from "../../components"
import Slider from "react-slick";
import { testimonials } from "../../constants/constants";

const Testimonial = () => {
    let settings = {
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
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
    <div className="container-fluid testimonial py-5">
        <Container className="py-5">
            <div className="text-center pb-5">
                <h4 className="text-primary">Our Testimonial</h4>
                <h1 className="display-5 mb-5 text-dark">
                    What Our Clients are Saying
                </h1>
            </div>
           <Slider {...settings}>
           {testimonials.map((item, idx) => (
            <div className="position-relative bg-light p-4 rounded" key={idx}>
            <i class="fa fa-quote-right fa-2x text-secondary position-absolute" style={{bottom: "30px", right: "20px"}}></i>
            <div className="mb-4 pb-4 border-bottom border-secondary">
                <p className="mb-0">
                    {item.description}
                </p>
            </div>
            <div className="d-flex align-items-center flex-nowrap">
                <div className="bg-secondary rounded">
                    <img src={item.image} className="img-fluid rounded" alt="" />
                </div>
                <div className="d-block ms-4">
                    <h4 className="text-dark">{item.name}</h4>
                    <p className="">{item.position}</p>
                    <div class="d-flex">
                        <i class="fas fa-star text-primary"></i>
                        <i class="fas fa-star text-primary"></i>
                        <i class="fas fa-star text-primary"></i>
                        <i class="fas fa-star text-primary"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
            </div>
        </div>
           ))}
           </Slider>
        </Container>
    </div>
  )
}

export default Testimonial