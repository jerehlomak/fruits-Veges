import Slider from "react-slick";

const HeroHeader = () => {
  let settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
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
    <div className="container-fluid py-5 mb-5 hero-header">
      <div className="container py-">
        <div className="row g-5 align-items-center">
          <div className="col-md-12 col-lg-6">
            <h4 className="mb-3 text-secondary">100% Organic Foods</h4>
            <h1 className="mb-5 display-3 text-primary">Organic Veggies & Fruits Foods</h1>
            <div className="position-relative mx-auto">
              <input className="form-control border-2 border-secondary w-100 py-3 px-4 rounded-pill" type="search" placeholder="Search" />
              <button type="submit" className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100" style={{ top: 0, right: '0%' }}>Submit Now</button>
            </div>
          </div>
          <div className="col-md-12 col-lg-6">
            <div>
              <div className="carousel-inner" role="listbox">
                <Slider {...settings}>
                  <div className="rounded">
                    <img src="img/hero-img-1.png" className="img-fluid w-100 h-100 bg-secondary rounded" alt="First slide" />
                    <a href="#" className="btn px-4 py-2 text-white rounded">Fruits</a>
                  </div>
                  <div className=" rounded">
                    <img src="img/hero-img-2.jpg" className="img-fluid w-100 h-100 rounded" alt="Second slide" />
                    <a href="#" className="btn px-4 py-2 text-white rounded">Vegetables</a>
                  </div>
                </Slider>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
