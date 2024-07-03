import { Col } from "react-bootstrap";

const BestSeller2 = () => {
    const bestSeller2 = [
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
        {
            img: "img/best-product-3.jpg",
            name: "Organic Tomato",
            rating: "",
            price: "3.23",
          },
      ];
  return (
    <>
        {bestSeller2.map((best, idx) => (
            <Col md={6} lg={4} xl={3}>
                <div className="text-center">
                    <img src={best.img} className="img-fluid rounded" alt="" />
                    <div className="py-4">
                        <a href="#" className="h5">{best.name}</a>
                        {/* rating */}
                        <div className="d-flex my-3 justify-content-center">
                            <i class="fas fa-star text-primary"></i>
                            <i class="fas fa-star text-primary"></i>
                            <i class="fas fa-star text-primary"></i>
                            <i class="fas fa-star text-primary"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <h4 className="mb-3">{best.price} $</h4>
                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary">
                            <i className="fa fa-shopping-bag me-2 text-primary"></i>
                            Add to cart
                        </a>
                    </div>
                </div>
            </Col>
          ))}
    </>
  )
}

export default BestSeller2