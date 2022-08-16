import React, { useEffect, useState } from "react";

import products from "../assets/fake-data/products";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/Common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";

import "../Styles/Product-detail.css";

import ProductCard from "../components/UI/ProductCard/ProductCard";

const FoodDetails = () => {
  const [tab, setTab] = useState("desc");
  const [enteredName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [reviewMsg, setReviewMsg] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = products.find((item) => item.id === id);

  const [previewImg, setPreviewImg] = useState(product.image01);
  const { title, price, category, desc, image01 } = product;

  const relateProduct = products.filter((item) => category === item.category);

  const addItem = () => {
    alert("đã thêm food");
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // khi ảnh thay đổi thì set lại previewImg
  useEffect(() => {
    setPreviewImg(product.image01);
  }, [product]);

  //khi mik thay đổi sản phẩm web sẽ scroll về đầu
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title="Product-detail">
      <CommonSection title={title} />

      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="product__images">
                <div
                  className="img__item mb-3"
                  onClick={() => setPreviewImg(product.image01)}
                >
                  <img src={product.image01} alt="" className="w-50" />
                </div>
                <div
                  className="img__item mb-3"
                  onClick={() => setPreviewImg(product.image02)}
                >
                  <img src={product.image02} alt="" className="w-50" />
                </div>
                <div
                  className="img__item mb-3"
                  onClick={() => setPreviewImg(product.image03)}
                >
                  <img src={product.image03} alt="" className="w-50" />
                </div>
              </div>
            </Col>
            <Col lg="4" md="4">
              <div className="product__main-img">
                <img src={previewImg} alt="" className="w-100" />
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="single__product-content">
                <h2 className="product__title mb-3">{title}</h2>
                <p className="product__price">
                  Price: <span>${price}</span>{" "}
                </p>
                <p className="category mb-5">
                  Category: <span>{category}</span>
                </p>
                <button onClick={addItem} className="addToCard__btn">
                  Add to cart
                </button>
              </div>
            </Col>
            <Col lg="12">
              <div className="tabs d-flex align-items-center gap-5 py-3">
                <h6
                  className={`${tab === "desc" ? "tab__active" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? "tab__active" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Review
                </h6>
              </div>
              {tab === "desc" ? (
                <div className="tab__content">
                  <p>{desc}</p>
                </div>
              ) : (
                <div className="tab__form">
                  <div className="review pt-5">
                    <p className="user__name mb-3">Văn Phúc</p>
                    <p className="user__email">phuc@gmail.com</p>
                    <p className="feedback__text">great product</p>
                  </div>
                  <div className="review">
                    <p className="user__name mb-3">Văn Phúc</p>
                    <p className="user__email">phuc@gmail.com</p>
                    <p className="feedback__text">great product</p>
                  </div>
                  <div className="review">
                    <p className="user__name mb-3">Văn Phúc</p>
                    <p className="user__email">phuc@gmail.com</p>
                    <p className="feedback__text">great product</p>
                  </div>
                  <form className="form" onSubmit={handleSubmit}>
                    <div className="form__group">
                      <input
                        type="text"
                        placeholder="enter your name"
                        onChange={(e) => setEnterName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form__group">
                      <input
                        type="text"
                        placeholder="enter your name"
                        onChange={(e) => setEnterEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form__group">
                      <textarea
                        type="text"
                        rows={5}
                        placeholder="enter your name"
                        onChange={(e) => setReviewMsg(e.target.value)}
                        required
                      />
                    </div>
                    <button type="submit" className="addToCard__btn">
                      Submit
                    </button>
                  </form>
                </div>
              )}
            </Col>

            <Col lg="12" className="mb-5 mt-4">
              <h2 className="related__Product-title">You Might Also Like</h2>
            </Col>

            {relateProduct.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
