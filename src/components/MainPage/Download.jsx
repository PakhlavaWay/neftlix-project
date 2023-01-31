import React from "react";
import styled from "styled-components";

const Download = () => {
  return (
    <Component>
      <section className="download wrapper">
        <div className="download__image">  
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt="video frame"
          />
          <div className="download__card-animation">
            <div className="download__movie-container">
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="movie" />
            </div>
            <div className="download__movie-title">
                <p>Stranger Things</p>
                <p style={{ color: 'blue' }}>Downloading...</p>
            </div>
            <div className="download__animation"></div>
          </div>
        </div>
        <div className="download__text">
          <h1 style={{ marginBottom: "1rem" }}>Download your shows to watch offline.</h1>
          <p>
                Available on all plans except Basic with ads.
          </p>
        </div>
      </section>
    </Component>
  );
};

const Component = styled.div`
  background-color: #000;
  border-bottom: 8px solid #222;
  section {
    height: 70vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 25px;

    .download__text {
      width: 48%;
      height: auto;
    }
    .download__image {
      position: relative;
      width: 48%;
      height: auto;
      img {
          max-width: 100%;
          height: auto;
      }
      .download__card-animation {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 2px solid hsla(0,0%,100%,.25);
        border-radius: 0.75em;
        width: 70%;
        height: auto;
        min-width: 15rem;
        box-shadow: 0 0 2em 0 #000;
        position: absolute;
        left: 75px;
        bottom: 30px;
        background-color: black;
        padding: 0.5em 0.75em;
        .download__movie-container {
          width: 15%;
          height: 4em;
          display: flex;
          align-items: center;
          img {
            height: 100%;
          }
          .download__movie-title {
            width: 50%;
            & p:nth-child(1) {
              font-size: 1rem;
            }
    
            & p:nth-child(2) {
              font-size: .9rem;
            }
          .download__animation {
            height: 3.7rem;
            width: 20%;
            background: url('https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif') 50% no-repeat;
            background-size: 50px;
          }
        }
      }
    }
    
  }
`;
export default Download;
