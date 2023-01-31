import React from "react";
import styled from "styled-components";

const Watch = () => {
  return (
    <Component>
      <section className="watch wrapper">
        <div className="watch__image">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
            alt="video frame"
          />
          <div className="watch__container">
            <video
              data-uia="our-story-card-video"
              playsInline={true} 
              autoPlay={true}
              loop={true}
              muted={true} 
            >
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div className="watch__text">
          <h1 style={{ marginBottom: "1rem" }}>Watch everywhere.</h1>
          <p>
            Stream unlimited movies and TV shows on <br /> your phone, tablet,
            laptop, and TV without paying more.
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

    .watch__image {
      position: relative;
      z-index: 2;
      width: 48%;
      height: auto;
      img {
        max-width: 100%;
        z-index: 2;
        position: relative;
      }

      .watch__container {
        height: 100%;
        left: 50%;
        max-height: 47%;
        max-width: 63%;
        position: absolute;
        top: 34%;
        transform: translate(-50%, -50%);
        width: 100%;
        video {
          width: 100%;
          height: 100%;
          object-fit: contain;
          overflow-clip-margin: content-box;
          overflow: clip;
        }
      }
    }
    .watch__text {
      width: 48%;
      height: auto;
    }
  }
`;
export default Watch;
