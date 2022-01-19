import React from "react";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";

const Banner = () => {
  return (
    <section className='main'>
      <div className='container'>
        <div className='row'>
          <h2>
            <div className='line'>
              <span>A Full stack developer based</span>
            </div>
            <div className='line'>
              <span>in South Shields</span>
            </div>
          </h2>
          <div className='btn-row'>
            <a href='/'>
              Projects <RightArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
