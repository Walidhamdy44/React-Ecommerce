import React from "react";
import { Container } from "react-bootstrap";
import egypt from "../../images/egypt.png";
import logo from "../../images/logo.png";

const FooterEl = () => {
  return (
    <div className="footer">
      <Container className="footer-container">
        <div className="top">
          <div className="box">
            <ul>
              <h3>Get to Know Us</h3>
              <li>About Happy Shop</li>
              <li>Careers Amazon</li>
              <li>Science</li>
            </ul>
          </div>
          <div className="box">
            <ul>
              <h3>Shop With Us</h3>
              <li>Your Account</li>
              <li>Your Addres</li>
              <li>Your Orders</li>
              <li>Your Lists</li>
            </ul>
          </div>
          <div className="box">
            <ul>
              <h3>Make Money with Us</h3>
              <li>Protect and build your brand</li>
              <li>Advertise Your Products</li>
              <li>Sell on Happy Shop </li>
              <li>Fulfillment by Happy shop </li>
            </ul>
          </div>
          <div className="box">
            <ul>
              <h3>Let Us Help You</h3>
              <li>Shipping</li>
              <li>Delivery Returns</li>
              <li> Replacements</li>
              <li>Amazon App Download </li>
            </ul>
          </div>
        </div>
        <div className="middel">
          <img src={logo} alt="logo" className="logo" />
          <div className="egypt-box">
            <img alt="ll" src={egypt} className="egypt" />
            <span>EGYPT</span>
          </div>
        </div>
      </Container>
      <div className="bottom">
        <div className="links">
          <span>Conditions of Use & Sale</span>
          <span>Privacy Notice</span>
          <span>Interest-Based Ads</span>
        </div>
        <p>©1996-2023, HappyShop.com, Inc. or its affiliates</p>
      </div>
    </div>
  );
};

export default FooterEl;
