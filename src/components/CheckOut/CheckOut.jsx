import { Container, Row, Col, Table } from "react-bootstrap"
import { tableData } from "../../constants/constants"

const CheckOut = () => {
  return (
    <div className='container-fluid py-5'>
      <Container>
        <h1 className="mb-4">Billing Details</h1>
        <form>
          <Row className='g-5'>
            <Col md={12} lg={6} xl={7}>
              <Row>
                <Col md={12} lg={6}>
                  <div class="form-item w-100">
                    <label class="form-label my-3">First Name<sup>*</sup></label>
                    <input type="text" class="form-control" />
                  </div>
                </Col>
                <Col md={12} lg={6}>
                  <div class="form-item w-100">
                    <label class="form-label my-3">Last Name<sup>*</sup></label>
                    <input type="text" class="form-control" />
                  </div>
                </Col>
              </Row>
              <div class="form-item">
                  <label class="form-label my-3">Company Name<sup>*</sup></label>
                  <input type="text" class="form-control" />
              </div>
              <div class="form-item">
                  <label class="form-label my-3">Address <sup>*</sup></label>
                  <input type="text" class="form-control" placeholder="House Number Street Name" />
              </div>
              <div class="form-item">
                  <label class="form-label my-3">Town/City<sup>*</sup></label>
                  <input type="text" class="form-control" />
              </div>
              <div class="form-item">
                  <label class="form-label my-3">Country<sup>*</sup></label>
                  <input type="text" class="form-control" />
              </div>
              <div class="form-item">
                  <label class="form-label my-3">Postcode/Zip<sup>*</sup></label>
                  <input type="text" class="form-control" />
              </div>
              <div class="form-item">
                  <label class="form-label my-3">Mobile<sup>*</sup></label>
                  <input type="tel" class="form-control" />
              </div>
              <div class="form-item">
                  <label class="form-label my-3">Email Address<sup>*</sup></label>
                  <input type="email" class="form-control" />
              </div>
              <div class="form-check my-3">
                  <input type="checkbox" class="form-check-input" />
                  <label class="form-check-label" for="Account-1">Create an account?</label>
              </div>
              <hr />
              <div class="form-check my-3">
                  <input class="form-check-input" type="checkbox" />
                  <label class="form-check-label" for="Address-1">Ship to a different address?</label>
              </div>
              <div class="form-item">
                  <textarea name="text" class="form-control" spellcheck="false" cols="30" rows="11" placeholder="Order Notes (Optional)"></textarea>
              </div>

            </Col>
            <Col md={12} lg={6} xl={5}>
              <Table responsive>
                <thead>
                  <tr>
                    <th scope="col">Products</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((item, idx) => (
                    <tr>
                      <th scope="row">
                          <div class="d-flex align-items-center mt-2">
                              <img src={item.img} class="img-fluid rounded-circle" style={{width: "90px", height: "90px"}} alt="" />
                          </div>
                      </th>
                      <td class="py-5">{item.name}</td>
                      <td class="py-5">${item.price}</td>
                      <td class="py-5">{item.quantity}</td>
                      <td class="py-5">${(item.price * item.quantity).toFixed(2)}</td>
                    </tr>
                  ))}
                  <tr>
                      <th scope="row">
                      </th>
                      <td class="py-5">
                          <p class="mb-0 text-dark text-uppercase py-3">TOTAL</p>
                      </td>
                      <td class="py-5"></td>
                      <td class="py-5"></td>
                      <td class="py-5">
                          <div class="py-3 border-bottom border-top">
                              <p class="mb-0 text-dark">$135.00</p>
                          </div>
                      </td>
                  </tr>
                </tbody>
              </Table>
              <div class="row g-4 text-center align-items-center justify-content-center pt-4">
                <button type="button" class="btn border-secondary py-3 px-4 text-uppercase w-100 text-primary">Place Order</button>
              </div>
            </Col>
            
          </Row>
        </form>
      </Container>
    </div>
  )
}

export default CheckOut