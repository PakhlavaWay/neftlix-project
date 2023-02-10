import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as yup from "yup";
import { setEmailAC } from "../../redux/reducer";

const Main = () => {
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef();
  const dispatch = useDispatch();

  //Validation
  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let userEmail = {
      email: email,
    };

    try {
      const validated = await schema.validate(userEmail);
      console.log(validated);
      dispatch(setEmailAC(email));
      navigate("/signup");
    } catch (e) {
      console.error(e);
      inputRef.current.focus();
      setTouched(true);
    }
  };

  return (
    <Component>
      <main className="main__guest-page wrapper">
        <h1>
          Unlimited movies, TV <br /> shows, and more.
        </h1>
        <p>Watch anywhere. Cancel anytime.</p>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="get-started">
            <div className="input-container">
              <input
                ref={inputRef}
                type="email"
                id="email"
                name="email"
                placeholder=" "
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <label htmlFor="email">Email address</label>
            </div>
          </div>
          <button type="submit">Get Started 〉</button>
          {touched ? (
            <p
              style={{
                fontSize: "0.93rem",
                position: "absolute",
                bottom: "-25px",
                left: "0",
                color: "#ffa00a",
              }}
            >
              Email is required!
            </p>
          ) : null}
        </form>
      </main>
    </Component>
  );
};

const Component = styled.div`
  height: clamp(70vh, 55vw, 100vh);
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)),
    url("https://assets.nflxext.com/ffe/siteui/vlv3/e451379a-dd0a-4657-b530-4ca4c0cb2aee/ec9e1d98-e04b-437a-9479-ea531261184f/US-en-20230123-popsignuptwoweeks-perspective_alpha_website_large.jpg");
  background-size: cover;
  border-bottom: 8px solid #222;
  .main__guest-page {
    height: inherit;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1.4rem;

    & p:nth-child(3) {
      font-size: 1.3rem;
    }
    p {
      color: white;
      font-size: 1.6rem;
    }

    form {
      width: 70%;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      .get-started {
        margin: 0 auto;
        height: 100%;
        width: 100%;
        background-color: white;
        position: relative;
        .input-container {
          position: relative;
          height: 80%;
          width: 70%;
          align-self: end;

          & input {
            height: 100%;
            width: 100%;
            padding: 10px 8px;
            border: none;
            outline: none;

            &:focus ~ label {
              top: 0;
              font-size: 0.8rem;
              font-weight: 700;
            }

            &:not(:placeholder-shown) ~ label {
              top: 0;
              font-size: 0.8rem;
              font-weight: 700;
            }
          }

          & label {
            color: #8c8c8c;
            position: absolute;
            top: 35%;
            padding: 0 8px;
            pointer-events: none;
            left: 0;
            transform: translateY(-50%);
            font-size: 0.9rem;
            transition: font 0.1s ease, top 0.1s ease, transform 0.1s ease;
          }
        }
      }
      button {
        width: 30%;
        min-width: 170px;
        box-shadow: 0 1px 0 rgb(0 0 0 / 45%);
        font-size: 1.6rem;
        // position: relative;
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

export default Main;
