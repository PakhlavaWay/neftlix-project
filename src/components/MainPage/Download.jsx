import React from "react";
import styled from "styled-components";

const Download = () => {
  return (
    <Component>
      <section className="download wrapper watch-download">
        <div className="download__image watch-download-img">  
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt="video frame"
          />
          <div className="download__card-animation">
            <div className="download__movie-container">
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="movie" />
            </div>
            <div className="download__movie-title">
                <p className="!text-[2vw]">Stranger Things</p>
                <p className="!text-[2vw]" style={{ color: 'blue' }}>Downloading...</p>
            </div>
            <div className="download__animation w-[15%] h-[80%]">
              <img className="h-full w-full" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt="anim" />
            </div>
          </div>
        </div>
        <div className="download__text watch-download-text">
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
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 25px;
    padding: 50px 0;

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
        margin: 0 auto;
      }
      .download__card-animation {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 2px solid hsla(0,0%,100%,.25);
        border-radius: 0.75em;
        width: 70%;
        height: auto;
        min-width: 200px;
        max-width: 450px;
        box-shadow: 0 0 2em 0 #000;
        position: absolute;
        left:0;
        right:0;
        margin-left:auto;
        margin-right:auto;
        bottom: 20px;
        background-color: black;
        padding: 0.3em 0.5em;
        .download__movie-container {
          width: 15%;
          height: 80%;
          display: flex;
          align-items: center;
          img {
            height: 100%;
            width: 100%;
          }
          // .download__movie-title {
          //   width: 50%;
          //   & p:nth-child(1) {
          //     font-size: 1rem;
          //   }
    
          //   & p:nth-child(2) {
          //     font-size: .9rem;
          //   }
        }
      }
    }
    
  }
`;
export default Download;
