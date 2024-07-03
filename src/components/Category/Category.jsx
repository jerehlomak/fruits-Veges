import { Col, Row } from "react-bootstrap";


const Category = () => {
  return (
    <>
      <Row className="g-4">
        <Col xl={3}>
          <div class="input-group w-100 mx-auto d-flex">
            <input
              type="search"
              class="form-control p-3"
              placeholder="keywords"
              aria-describedby="search-icon-1"
            />
            <span id="search-icon-1" class="input-group-text p-3">
              <i class="fa fa-search"></i>
            </span>
          </div>
        </Col>
        <Col xl={6}></Col>
        <Col xl={3}>
          <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
            <label for="fruits">Default Sorting:</label>
            <select
              id="fruits"
              name="fruitlist"
              className="border-0 form-select-sm bg-light me-3"
              form="fruitform"
            >
              <option value="volvo">Nothing</option>
              <option value="saab">Popularity</option>
              <option value="opel">Organic</option>
              <option value="audi">Fantastic</option>
            </select>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Category;
