import React from "react";
import CommonSection from "../components/UI/Common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";

import "../Styles/CartPage.css";

import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItem);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Cart">
      <CommonSection title="Your Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h5 className="text-center">Your Card Is Empty</h5>
              ) : (
                <table className="table table-bordered text-center">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <Tr key={item.id} item={item} />
                    ))}
                  </tbody>
                </table>
              )}

              <div className="mt-4">
                <h6>
                  Subtotal:<span className="cart__subtotal">${totalAmount}</span>
                </h6>
                <p>Taxes and shipping will calculate at checkout</p>
                <div className="cart__page-btn">
                 
                    <button className="addToCard__btn me-4">
                      <Link to='/allFoods'>Continue Shopping</Link>
                    </button>
                    <button className="addToCard__btn">
                      <Link to='/checkout'>Process to Checkout</Link>
                    </button>
                 
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = (props) => {
  const { id, image01, title, price, quantity } = props.item;
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <tr>
      <td className="text-center  cart__img-box ">
        <img src={image01} alt="" />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">${price}</td>
      <td className="text-center">{quantity}</td>
      <td className="text-center cart__item-del " onClick={deleteItem}>
        <i className="ri-delete-bin-6-line"></i>
      </td>
    </tr>
  );
};

export default Cart;
