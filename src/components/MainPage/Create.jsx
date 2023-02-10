import React from "react";
import styled from "styled-components";

const Create = () => {
  return (
    <Component>
      <section className="create wrapper enjoy-create">
        <div className="create__text enjoy-create-text">
          <h1 style={{ marginBottom: "1rem" }}>Create profiles for kids.</h1>
          <p>
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
        </div>
        <div className="create__image enjoy-create-img">
          <img
            src="https://occ-0-6-7.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f"
            alt="video frame"
          />
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
    .create__text {
      width: 48%;
      height: auto;
    }
    .create__image {
      position: relative;
      width: 48%px;
      height: auto;
      img {
        border: 0;
        height: auto;
        max-width: 100%;
      }

      
    }
  }
`;
export default Create;
