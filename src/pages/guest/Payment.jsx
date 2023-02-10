import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Signup/Header";
import LockIcon from "@mui/icons-material/Lock";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "../../components/Button";
import { useSelector } from "react-redux";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const handleClick = (method) => {
    setPaymentMethod(method);
    console.log(method);
  };
  const isAuthorized = useSelector((state) => state.isAuthorized);

  return (
    <Component>
      <Header action={isAuthorized ? 'Sign Out': 'Sign In'} />
      <section className="main wrapper">
        <div className="main__img-container">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Lock.png"
            alt="icon"
          />
        </div>
        <div className="main__description">
          <p>
            STEP <span>3</span> OF <span>3</span>
          </p>
          <p>Choose how to pay</p>
          <p>
            Your payment is encrypted and you can change how <br /> you pay
            anytime.
          </p>
          <p>Secure for peace of mind.</p>
          <p> Cancel easily online.</p>
        </div>
        <div className="main__payment-methods">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            <p style={{ fontSize: "0.81rem" }}>End-to-end encrypted</p>
            <LockIcon style={{ color: "rgb(255, 181, 63)", width: "16px" }} />
          </div>
          <div
            className={
              "credit main__payment-method " +
              (paymentMethod === "credit" ? "active" : "")
            }
            onClick={(e) => handleClick(e.target.classList[0])}
          >
            <div>
              <p className="main__payment-name">Credit or Debit Card</p>
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/visa-v3.svg"
                alt=""
              />
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/mastercard-v2.svg"
                alt=""
              />
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/amex-v2.svg"
                alt=""
              />
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/icon_discover_2x.png"
                alt=""
              />
            </div>
            <ArrowForwardIosIcon style={{ width: "20px", color: "#ccc" }} />
          </div>
          <div
            className={
              "paypal main__payment-method " +
              (paymentMethod === "paypal" ? "active" : "")
            }
            onClick={(e) => handleClick(e.target.classList[0])}
          >
            <div>
              <p className="main__payment-name">Paypal</p>
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/paypal.svg"
                alt=""
              />
            </div>
            <ArrowForwardIosIcon style={{ width: "20px", color: "#ccc" }} />
          </div>
          <div
            className={
              "gift main__payment-method " +
              (paymentMethod === "gift" ? "active" : "")
            }
            onClick={(e) => handleClick(e.target.classList[0])}
          >
            <div>
              <p className="main__payment-name">Gift Code</p>
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/netflix-gift-card-v2.svg"
                alt=""
              />
            </div>
            <ArrowForwardIosIcon style={{ width: "20px", color: "#ccc" }} />
          </div>
        </div>
        <Button toWhere="/" text="Finish Registration" width="60%" />
      </section>
      <Footer bgColor={"#f3f3f3"} bTop={"true"} />
    </Component>
  );
};

const Component = styled.section`
  height: 70vh;
  position: relative;
  min-height: 160vh;
  .main {
    height: 60%;
    min-width: 400px;
    max-width: 550px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
    .main__img-container {
      width: 50px;
      height: 50px;
      img {
        background: no-repeat 50% 50%;
        height: 100%;
        width: 100%;
      }
    }
    p {
      span {
        font-weight: 600;
      }
      text-align: center;
      color: #333;
    }

    .main__description {
      & p:nth-of-type(1) {
        font-size: 0.8rem;
      }
      & p:nth-of-type(2) {
        font-size: 2rem;
        font-weight: 700;
      }
      & p:nth-of-type(3) {
        font-size: 1.1rem;
        margin: 10px 0;
      }
      & p:nth-of-type(4),
      & p:nth-of-type(5) {
        font-size: 1.1rem;
        font-weight: 700;
      }
    }

    .main__payment-methods {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 5px;
      .main__payment-method {
        display: flex;
        align-items: center;
        border: 2px solid #ccc;
        padding: 20px 10px;
        border-radius: 5px;
        justify-content: space-between;
        div {
          display: flex;
          gap: 10px;
          .main__payment-name {
            font-size: 1rem;
          }
          img {
            width: 40px;
            height: 25px;
          }
        }
        &:hover {
          cursor: pointer;
          text-decoration: none;
        }

        &.active {
          border: 2px solid #333;
        }
      }
    }
  }
`;

export default Payment;
