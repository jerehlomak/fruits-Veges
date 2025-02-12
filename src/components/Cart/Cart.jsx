import { Container, Row, Col, Table } from "react-bootstrap"
import { tableData } from "../../constants/constants"
import { Link } from "react-router-dom"

const Cart = () => {
  return (
    <div className="container-fluid py-5">
      <Container className='py-5'>
        <Table responsive>
          <thead>
            <tr>
              <th scope="col">Products</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
              {tableData.map((item, idx) => (
                <tr key={idx}>
                <th scope="row">
                    <div class="d-flex align-items-center">
                        <img src={item.img} class="img-fluid me-5 rounded-circle" style={{width: "80px", height: "80px"}} alt="" />
                    </div>
                </th>
                <td>
                    <p class="mb-0 mt-4">{item.name}</p>
                </td>
                <td>
                    <p class="mb-0 mt-4">{item.price} $</p>
                </td>
                <td>
                    <div class="input-group quantity mt-4" style={{width: "100px"}}>
                        <div class="input-group-btn">
                            <button class="btn btn-sm btn-minus rounded-circle bg-light border" >
                            <i class="fa fa-minus"></i>
                            </button>
                        </div>
                        <input type="text" class="form-control form-control-sm text-center border-0" value="1" />
                        <div class="input-group-btn">
                            <button class="btn btn-sm btn-plus rounded-circle bg-light border">
                                <i class="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </td>
                <td>
                    <p class="mb-0 mt-4">{item.price * item.quantity} $</p>
                </td>
                <td>
                    <button class="btn btn-md rounded-circle bg-light border mt-4" >
                        <i class="fa fa-times text-danger"></i>
                    </button>
                </td>
            
            </tr>
              ))}
          </tbody>
        </Table>
        <div class="mt-5">
          <input type="text" class="border-0 border-bottom rounded me-5 py-3 mb-4" placeholder="Coupon Code" />
          <button class="btn border-secondary rounded-pill px-4 py-3 text-primary" type="button">Apply Coupon</button>
        </div>
        <Row className="g-4 justify-content-end">
          <Col></Col>
          <Col sm={8} md={7} lg={6} xl={4}>
              <div className="bg-light rounded">
                <div className="p-4">
                  <h1 className="display-6 mb-4">Cart <span className="fw-normal">Total</span></h1>
                  <div className="d-flex justify-content-between mb-4">
                    <h5 className="mb-0 me-4">Subtotal:</h5>
                    <p className="mb-0">$98.00</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <h5 class="mb-0 me-4">Shipping</h5>
                    <div class="">
                        <p class="mb-0">Flat rate: $3.00</p>
                    </div>
                  </div>
                  <div class="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                    <h5 class="mb-0 ps-4 me-4">Total</h5>
                    <p class="mb-0 pe-4">$99.00</p>
                  </div>
                  <Link to='/checkout'>
                  <button class="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4" type="button">Proceed Checkout</button>
                  </Link>
                </div>
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Cart