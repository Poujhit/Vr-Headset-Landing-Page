import React from 'react';
import Roll from 'react-reveal/Roll';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Last-Section.css';

function LastSection() {
  return (
    <div className='Last-Section' id ="Subscribe" >
      <Roll right>
        <div className='FormBox'>
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
            placeholder='Enter Your Email-Id'
          ></input>
          <button
            className='Subscribe-button'
            onClick={() => {
              toast.success(
                'Thank You. You are Subscribed Now. Stay tuned for more news from us.',
                {
                  position: 'bottom-center',
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                }
              );
            }}
          >
            Submit
          </button>
          <ToastContainer
            position='bottom-center'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </Roll>

      <text className='CopyRight'>Copyright 2021 MU Poujhit</text>
    </div>
  );
}

export { LastSection };
