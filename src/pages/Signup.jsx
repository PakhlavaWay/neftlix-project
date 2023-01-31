import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Header from '../components/Signup/Header';

const Signup = () => {
  return (
    <Component>
        <Header action='Sign In' />
        <section className='main'>
            <div className="main__image-container">
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png" alt="" />
            </div>
            <p>STEP <span>1</span> OF <span>3</span></p>
            <p>Finish setting up your account</p>
            <p>Netflix is personalized for you. <br/> Create a password to watch on any <br /> device at any time.</p>
            <Button toWhere='/signup/regform' text='Next' width='80%'/>
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
        min-width: 350px;
        max-width: 400px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 25px;
        .main__image-container {
            img {
                background: no-repeat 50% 50%;
                height: 90px;
            }
        }
        p {
            span {
                font-weight: 600;
            }
            text-align: center;
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
            font-size: 1.2rem;
            // font-weight: 700;
        }

    }
`

export default Signup