import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import heroImg from "../assets/images/hero.png";
import "../Styles/Hero-section.css";
import { Link } from "react-router-dom";
import Category from "../components/UI/Category/Category.jsx";
import "../Styles/Home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/products";

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";

import ProductCard from "../components/UI/ProductCard/ProductCard.jsx";

import whyImg from "../assets/images/location.png";

import networkImg from "../assets/images/network.png";

import TestimonialSlider from "../components/UI/Slider/TestimonialSlider.jsx";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, doloribus?",
  },
  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, doloribus?",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, doloribus?",
  },
];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProduct, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filterPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filterPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );
      setAllProducts(filteredProducts);
    }

    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );
      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title="Home">
      <section>
        {/* Hero-section.css */}
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY?</span> Just wait <br /> food at{" "}
                  <span> your door</span>
                </h1>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores nesciunt odio odit! Optio, suscipit quae.
                </p>
                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Order now <i className="ri-arrow-right-s-line"></i>
                  </button>
                  <button className="all__foods-btn ">
                    <Link to="/allFoods">See All Foods</Link>
                  </button>
                </div>

                <div className="hero__service d-flex align-items-center gap-5 mt-5">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping_icon">
                      <i className="ri-car-line"></i>
                    </span>
                    No shipping charge
                  </p>
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping_icon">
                      <i className="ri-shield-check-line"></i>
                    </span>
                    100% Secure Checkout
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>

      <section>
        {/* Home.css */}
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Just sit back at home </h2>
              <h2 className="feature__title">
                we will <span>take care</span>
              </h2>

              <p className="mb-1 mt-4 feature__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Facilis soluta,
              </p>
              <p className="feature__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
                repudiandae
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm='6' key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>
            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn ${
                    category === "ALL" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BURGER")}
                >
                  {" "}
                  <img src={foodCategoryImg01} alt="" />
                  Bergur
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("PIZZA")}
                >
                  {" "}
                  <img src={foodCategoryImg02} alt="" />
                  Pizza
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BREAD" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BREAD")}
                >
                  {" "}
                  <img src={foodCategoryImg03} alt="" />
                  Bread
                </button>
              </div>
            </Col>

            {allProduct.map((item) => (
              <Col lg="3" md="4" sm='6' xs='6' key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>
            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Why <span>Tasty Treat ?</span>
                </h2>
                <p className="tasty__treat-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi velit nobis nisi eius minus magnam deserunt commodi,
                  blanditiis necessitatibus explicabo nostrum repudiandae
                  maiores eaque soluta dolorum quam, aspernatur ullam quas.
                </p>

                <ListGroup className="mt-5">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>
                      Fresh and foods
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nulla, tempora.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>
                      Quality Suport
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nulla, tempora.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>
                      Order from any location
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nulla, tempora.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2>Hot Pizza</h2>
            </Col>
            {hotPizza.map((item) => (
              <Col lg="3" md="4" sm='6' xs='6' key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial ">
                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial__title mb-4">
                  What out <span>customers</span> are saying
                </h2>
                <p className="testimonial__desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus, quibusdam eligendi tempora nemo earum tenetur
                  deserunt autem ad dolorem magni?
                </p>
                <TestimonialSlider/>
              </div>
            </Col>
            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
