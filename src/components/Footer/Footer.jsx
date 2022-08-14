import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import "../../Styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Tasty Treat</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                neque corrupti id
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Sunday - Thurday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Location: Thai Phù - Mai Đình - Sóc Sơn - Hà Nội</span>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Phone: 0329609726</span>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Email: phucphuc1912001@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">NewLetter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your mail" />
              <span>
                <i className="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="coppyright__text"> 
              14/8/2022 , website made by Nguyễn Văn Phúc , All Right Reserved
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__link d-flex align-item-center gap-4 justify-content-end">
              <p className="m-0">Follow: </p>
              <span>
                <Link to="https://www.facebook.com/">
                  <i className="ri-facebook-fill"></i>
                </Link>
              </span>
              <span>
                <Link to="https://www.facebook.com/">
                <i className="ri-github-fill"></i>
                </Link>
              </span>
              <span>
                <Link to="https://www.facebook.com/">
                <i className="ri-youtube-fill"></i>
                </Link>
              </span>
              <span>
                <Link to="https://www.facebook.com/">
                <i className="ri-instagram-line"></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
