import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Signup/Header";
import Button from "../components/Button";

const Regform = () => {
  return (
    <Component>
      <Header action='Sign In'/>
      <section className="main">
        <p>
          STEP <span>1</span> OF <span>3</span>
        </p>
        <p>Create a password to start your membership</p>
        <p>
            Just a few more steps and you're done!
        </p>
        <p>
            We hate paperwork, too.
        </p>
        <form>
            <div className="input-container">
                <input type="text" placeholder=" "/>
                <label htmlFor="">Email</label>
            </div>

            <div className="input-container">
                <input type="password" placeholder=" "/>
                <label htmlFor="">Add a password</label>
            </div>
            <Button toWhere='/signup/plan' text='Next' width='100%'/>
        </form>

      </section>
      <Footer bgColor={'#f3f3f3'} bTop={'true'}/>
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

                &:focus {
                    outline: none;
                }
                
                &:focus~label {
                    top: 0;
                    font-size: 0.8rem;
                    font-weight: 700;
                }    
    
                &:not(:placeholder-shown)~label {
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
                transition: font .1s ease,top .1s ease,transform .1s ease;
            }
        }  
    }
    
  }
`;

export default Regform;
