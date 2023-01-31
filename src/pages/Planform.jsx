import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Signup/Header";
import DoneIcon from "@mui/icons-material/Done";
import RemoveIcon from "@mui/icons-material/Remove";
import LockIcon from "@mui/icons-material/Lock";
import Button from "../components/Button";

const Planform = () => {
  const [activePlan, setActivePlan] = useState("standard");
  const handleClick = (plan) => {
    setActivePlan(plan);
  }

  return (
    <Component>
      <Header action='Sign Out'/>
      <section className="main">
        <div className="main__plan-intro">
          <p>
            STEP <span>2</span> OF <span>3</span>
          </p>
          <p>Choose the plan that’s right for you</p>
          <ul className="main__benefits">
            <li className="main__benefit">
              <DoneIcon style={{ color: "red" }} />
              <p>Watch all you want.</p>
            </li>
            <li className="main__benefit">
              <DoneIcon style={{ color: "red" }} />
              <p>Recommendations just for you.</p>
            </li>
            <li className="main__benefit">
              <DoneIcon style={{ color: "red" }} />
              <p>Change or cancel your plan anytime.</p>
            </li>
          </ul>
        </div>
        <div className="main__plans">  
          <div className="plans__names">
            <div className="plans__basic invis"></div>
            <div className={'plans__basic basic name ' + ((activePlan)==='basic' ? 'active' : '')} onClick={(e) => handleClick(e.target.classList[1])}>Basic with ads</div>
            <div className={'plans__standard standard name ' + ((activePlan)==='standard' ? 'active' : '')} onClick={(e) => handleClick(e.target.classList[1])}>Standard</div>
            <div className={'plans__premium premium name ' + ((activePlan)==='premium' ? 'active' : '')} onClick={(e) => handleClick(e.target.classList[1])}>Premium</div>
          </div>
          <div className="plans__info">
            <div className="plans__prices plan">
              <p className="plans__props">Monthly price</p>
              <p className={"plans__price plan-item " + ((activePlan)==='basic' ? "active": "")}>$6.99</p>
              <p className={"plans__price plan-item " + ((activePlan)==='standard' ? "active": "")}>$15.49</p>
              <p className={"plans__price plan-item " + ((activePlan)==='premium' ? "active": "")}>$19.99</p>
            </div>
            <div className="plans__qualities plan">
              <p className="plans__props">Video quality</p>
              <p className={"plans__quality plan-item " + ((activePlan)==='basic' ? "active": "")}>Good</p>
              <p className={"plans__quality plan-item " + ((activePlan)==='standard' ? "active": "")}>Better</p>
              <p className={"plans__quality plan-item " + ((activePlan)==='premium' ? "active": "")}>Best</p>
            </div>
            <div className="plans__resolutions plan">
              <p className="plans__props">Resolution</p>
              <p className={"plans__resolution plan-item " + ((activePlan)==='basic' ? "active": "")}>720p</p>
              <p className={"plans__resolution plan-item " + ((activePlan)==='standard' ? "active": "")}>1080p</p>
              <p className={"plans__resolution plan-item " + ((activePlan)==='premium' ? "active": "")}>4K+HDR</p>
            </div>
            <div className="plans__devices plan">
              <p className="plans__props">
                Watch on your TV, computer, mobile phone and tablet
              </p>
              <DoneIcon className={"plan-item icon " + ((activePlan)==='basic' ? "active": "")}/>
              <DoneIcon className={"plan-item icon " + ((activePlan)==='standard' ? "active": "")}/>
              <DoneIcon className={"plan-item icon " + ((activePlan)==='premium' ? "active": "")}/>
            </div>
            <div className="plans__downloads plan last">
              <p className="plans__props">Downloads</p>
              <RemoveIcon className={"plan-item icon " + ((activePlan)==='basic' ? "active": "")}/>
              <DoneIcon className={"plan-item icon " + ((activePlan)==='standard' ? "active": "")}/>
              <DoneIcon className={"plan-item icon " + ((activePlan)==='premium' ? "active": "")}/>
            </div>
          </div>
        </div>
        <div className="main__descriptions">
          <div className="descriptions__info basic-info">
            <LockIcon />
            <p className="descriptions__info">
              Basic with ads has a limited number of movies and TV shows
              unavailable due to licensing restrictions. Some location and
              device restrictions also apply. Learn more.
            </p>
          </div>
          <div className="descriptions__info">
            Want more options? See all plans.
          </div>
          <div className="descriptions__info">
            If you select Basic with ads, you will be required to provide your
            date of birth for ads personalization and other purposes consistent
            with the Netflix Privacy Statement.
          </div>
          <div className="descriptions__info">
            HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability
            subject to your internet service and device capabilities. Not all
            content is available in all resolutions. See our Terms of Use for
            more details.
          </div>
          <div className="descriptions__info">
            Only people who live with you may use your account. Watch on 4
            different devices at the same time with Premium, 2 with Standard and
            1 with Basic or Basic with ads.
          </div>
        </div>
        <Button toWhere='/signup/payment' text='Next' width='50%' marginTop='30px' />
      </section>
      <Footer bgColor={"#f3f3f3"} bTop={"true"} />
    </Component>
  );
};

const Component = styled.section`
    min-height: 220vh;
    position: relative;
  .main {
    padding-top: 30px;
    width: 70%;
    margin: 0 auto;


    .main__plan-intro {
      display: flex;
      flex-direction: column;
      gap: 10px;
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
        row-gap: 10px;
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

    .main__plans {
        .plans__names {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr;
            padding: 30px 0;
            position: sticky;
            top: 0;
            z-index: 1;
            background-color: #fff;
            .invis {
                visibility: none;
            }
            .name {
                width: 90px;
                height: 90px;
                display: flex;
                align-items: center;
                justify-content: center;
                justify-self: center;

                background: #e50914;
                border-radius: 2px;
                color: #FFC;
                font-size: 1.125rem;
                font-weight: 500;
                margin: 0 auto;
                opacity: .6;
                padding: .6em;
                text-align: center;

                &.active {
                    opacity: 1;
                }

                &:hover {
                    cursor: pointer;
                }
            }

        }
        .plans__info {
            margin-bottom: 30px;
            display: grid;
            grid-template-rows: repeat(5, 1fr);
            // row-gap: 20px;
            .plans__props {
                font-size: 1rem;
            }
            .plan {
                display: grid;
                grid-template-columns: 2fr 1fr 1fr 1fr;
                border-bottom: 1px solid #ccc;
                min-height: 60px;
                align-items: center;
                
                .plan-item {
                    justify-self: center;
                    color: #737373;
                    font-weight: 600;
                    font-size: 1rem;

                    &.active {
                        color: #e50914;
                    }

                    &.icon {
                        font-size: 2rem;
                    }
                }
                
            }
            .last {
                border-bottom: none;
            }
        }
    }
    .main__descriptions {
        display: flex;
        flex-direction: column;
        gap: 10px;
        .basic-info {
            display: flex;
            align-items: center;
            color: #6e6e6e; 
            background: #f3f3f3;
            padding: 8px;
            column-gap: 5px;
            p {
                color: #6e6e6e; 
            }
        }
        .descriptions__info {
            font-size: 0.81rem;
            color: #6e6e6e; 
        }
    }
  }
  p {
    color: #333;
  }
`;

export default Planform;
