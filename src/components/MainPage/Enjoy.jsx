import React from "react";
import styled from "styled-components";

const Enjoy = () => {
  return (
    <Component>
      <section className="enjoy wrapper">
        
        <div className="enjoy__text">
          <h1 style={{ marginBottom: "1rem" }}>Enjoy on your TV.</h1>
          <p>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
            Blu-ray players, and more.
          </p>
        </div>
        <div className="enjoy__image">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt="video frame"
          />
          <div className="enjoy__container">
            <video
              data-uia="our-story-card-video"
              playsInline={true} 
              autoPlay={true}
              loop={true}
              muted={true} 
            >
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                type="video/mp4"
              />
            </video>
          </div>
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
    max-width: 1100px;
    .enjoy__text {
      width: 48%;
    }
    .enjoy__image {
      position: relative;
      z-index: 2;
      box-sizing: border-box;
      display: flex;
      flex: 0 1 auto;
      height: auto;
      width: 48%;
      img {
        height: 100%;
        z-index: 2;
        position: relative;
        width: 100%;
      }

      .enjoy__container {
        height: 100%;
        left: 50%;
        max-height: 54%;
        max-width: 73%;
        position: absolute;
        top: 46%;
        transform: translate(-50%,-50%);
        width: 100%;
        video {
            height: 100%;
            width: 100%;
            object-fit: contain;
            overflow-clip-margin: content-box;
            overflow: clip;
        }
      }
    }
  }
`;
export default Enjoy;
