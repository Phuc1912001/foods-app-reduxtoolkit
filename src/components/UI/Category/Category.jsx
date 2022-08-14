import React from "react";
import { Container, Row, Col } from "reactstrap";

//import img
import categoryImg01 from "../../../assets/images/category-01.png";
import categoryImg02 from "../../../assets/images/category-02.png";
import categoryImg03 from "../../../assets/images/category-03.png";
import categoryImg04 from "../../../assets/images/category-04.png";

import "../../../Styles/Category.css";

const categoryData = [
  {
    display: "FastFood",
    imgURL: categoryImg01,
  },
  {
    display: "Pizza",
    imgURL: categoryImg02,
  },
  {
    display: "Asian Food",
    imgURL: categoryImg03,
  },
  {
    display: "Row Meat",
    imgURL: categoryImg04,
  },
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="4">
            <div className="category__item d-flex align-items-center gap-3">
              <div className="category__img">
                <img src={item.imgURL} alt="category__item" />
              </div>
              <h6>{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
