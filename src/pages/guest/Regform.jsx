import React from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Signup/Header";
import { useDispatch, useSelector } from "react-redux";
import { setEmailAC } from "../../redux/reducer";
import { useNavigate } from "react-router-dom";
import { schema } from '../../validation/schema';
import { useFormik } from "formik";
import axios from "../../api/axios";

const Regform = () => {
  const email = useSelector((state) => state.user.email);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    console.log('submited');
    await new Promise((res) => setTimeout(res, 1000));
    dispatch(setEmailAC(values.email));
    // dispatch(setPasswordAC(values.password));

    signUp(values);
    navigate("/signup/plan");
    actions.resetForm(); 
  }
  const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      age: "19", // for fake api
      email: email || "",
      name: "J", // for fake api
      password: "",
    },

    //Validation
    validationSchema: schema,
    onSubmit,
  })

  const signUp = async (user) => {

    try {
      const result = await axios.post('/signup', JSON.stringify(user));
      console.log(result);
      console.log(result.data.message);
      return result;
    }
    catch(e) {
        console.log(e.erros)
        console.log(user);
        console.log(JSON.stringify(user));
    }
  }

  return (
    <Component>
      <Header action="Sign In" />
      <section className="main">
        <p>
          STEP <span>1</span> OF <span>3</span>
        </p>
        <p>Create a password to start your membership</p>
        <p>Just a few more steps and you're done!</p>
        <p>We hate paperwork, too.</p>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              name="email"
              type="email"
              placeholder=" "
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={(touched.email && errors.email) ? 'error-input' : ''}
            />
            <label htmlFor="email">Email</label>
          </div>
          {(touched.email && errors.email)? (
            <p
              style={{
                fontSize: "0.81rem",
                color: '#b92d2b'
              }}
            >
              {errors.email}
            </p>
          ) : null}

          <div className="input-container">
            <input
              name="password"
              type="password"
              placeholder=" "
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={(touched.password && errors.password) ? 'error-input' : ''}
            />
            <label htmlFor="password">Add a password</label>
          </div>
          {(touched.password && errors.password) ? (
            <p
              style={{
                fontSize: "0.81rem",
                color: '#b92d2b', 
                fontWeight: '400',
              }}
            >
              {errors.password}
            </p>
          ) : null}
          {/* <Button toWhere="/signup/plan" text="Next" width="100%" /> */}
          <button
            type="submit"
            style={{
              fontSize: "1.5rem",
              padding: "20.5px 2em",
              width: "100%",
              minHeight: "60px",
              minWidth: "110px",
              borderRadius: "4px",
            }}
            disabled={isSubmitting}
          >
            Next
          </button>
        </form>
      </section>
      <Footer bgColor={"#f3f3f3"} bTop={"true"} />
    </Component>
  );
};

const Component = styled.section`
  height: 70vh;
  position: relative;
  min-height: 150vh;
  .main {
    padding: 30px 0;
    height: 55%;
    max-width: 350px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 15px;
    min-width: 350px;
    max-width: 400px;

    p {
      span {
        font-weight: 600;
      }
      text-align: start;
      color: #333;
    }

    & p:nth-of-type(1) {
      font-size: 0.8rem;
    }
    & p:nth-of-type(2) {
      font-size: 2rem;
      font-weight: 700;
    }

    & p:nth-of-type(3) {
      font-size: 1.1rem;
      // font-weight: 700;
    }

    & p:nth-of-type(4) {
      font-size: 1.1rem;
      // font-weight: 700;
    }

    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;
      .input-container {
        position: relative;
        border-radius: 6px;
        width: 100%;
        height: 60px;
        input {
          width: 100%;
          background: white;
          border: 1px solid #8c8c8c;
          border-radius: 2px;
          color: #000;
          display: block;
          font-size: 16px;
          height: 100%;
          padding: 10px 10px 0;
          outline: none;
          appearance: none;
          &.error-input {
            border: 1px solid #b92d2b;
          } 

          &:focus {
            outline: none;
          }

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
        label {
          position: absolute;
          z-index: 2;
          pointer-events: none;
          transform: translateY(50%);
          top: 10px;
          padding: 0 10px;
          color: #8c8c8c;
          font-size: 1rem;
          transition: font 0.1s ease, top 0.1s ease, transform 0.1s ease;
        }
      }
    }
  }
`;

export default Regform;
