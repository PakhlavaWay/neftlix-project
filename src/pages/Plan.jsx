import React from 'react';
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Signup/Header";
import DoneIcon from '@mui/icons-material/Done';
import Button from '../components/Button';

const Plan = () => {
  return (
    <Component>
        <Header action='Sign Out'/>
            <section className="main">
                <div className="main__img-container">
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Checkmark.png" alt="icon" />
                </div>
                <p>STEP <span>2</span> OF <span>3</span></p>
                <p>Choose your plan</p>
                <ul className="main__benefits">
                    <li className="main__benefit">
                        <DoneIcon style={{ color: 'red' }}/>
                        <p>No commitments, cancel anytime.</p>
                    </li>
                    <li className="main__benefit">
                        <DoneIcon style={{ color: 'red' }}/>
                        <p>Endless entertainment for one low price.</p>
                    </li>
                    <li className="main__benefit">
                        <DoneIcon style={{ color: 'red' }}/>
                        <p>Unlimited viewing on all your devices.</p>
                    </li>
                </ul>
                <Button toWhere='/signup/planform' text='Next' width='80%'/>
            </section>
        <Footer bgColor={'#f3f3f3'} bTop={'true'}/>
    </Component>
  )
}

const Component = styled.section`
    height: 70vh;
    position: relative;
    min-height: 150vh;
    .main {
        height: 55%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        row-gap: 20px;
        min-width: 350px;
        max-width: 400px;
        margin: 0 auto;
        padding: 30px 0;

        .main__img-container {
            width: 50px; 
            height: 50px;
            img {
                width: 100%;
                height: 100%;
            }
        }

        & p:nth-of-type(1) {
            font-size: 0.81rem;
            span {
                font-weight: 600;
            }
        }

        & p:nth-of-type(2) {
            font-size: 2rem;
            font-weight: 700;
        }

        .main__benefits {
            display: flex;
            flex-direction: column;
            row-gap: 20px;
            width: 70%;
            .main__benefit {
                display: flex;
                column-gap: 5px;
    
                p {
                    font-size: 1.2rem;
                }
            }
        }

    }
    p {
        color: #333;
    }

`;

export default Plan