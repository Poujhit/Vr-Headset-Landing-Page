import React from 'react';
import Roll from 'react-reveal/Roll';

import './Last-Section.css';

function LastSection() {
  return (
    <div className='Last-Section'>
      <Roll right>
        <div className='Form'>
          <br />
          <br />
          <text className='Subscribe'>
            Subscribe to get updates on the product
          </text>
          <br />
          <br />
          <br />
          <br />

          <input
            className='Subscribe-form'
            placeholder='       Enter Your Email-Id'
          ></input>
          <button className='Subscribe-button'>Submit</button>
        </div>
      </Roll>

      <text className='CopyRight'>Copyright 2021 MU Poujhit</text>
    </div>
  );
}

export { LastSection };
