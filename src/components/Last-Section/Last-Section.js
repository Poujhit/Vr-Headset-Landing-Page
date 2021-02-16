import React from 'react';
import Particles from 'react-tsparticles';
import Slide from 'react-reveal/Slide';

import './Last-Section.css';

function LastSection() {
  return (
    <div className='Last-Section'>
      <div className="Form">
      <br/>
      <br/>
          <text className = "Subscribe">Subscribe to get updates on the product</text>
          <br/>
          <br/>
          <br/>
          <br/>

          <input className = 'Subscribe-form' placeholder = "       Enter Your Email-Id"></input>
          <button className = 'Subscribe-button' >Submit</button>
      </div>

      

      {/* <Particles
        id='Second-Section'
        options={{
          particles: {
            number: {
              value: 0,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: '#1F1E1E',
            },
            shape: {
              type: 'circle',
            },
            opacity: {
              value: 1,
              random: false,
              animation: {
                enable: true,
                speed: 0.5,
                minimumValue: 0,
                sync: false,
              },
            },
            size: {
              value: 8,
              random: { enable: true, minimumValue: 4 },
              animation: {
                enable: false,
                speed: 20,
                minimumValue: 4,
                sync: false,
              },
            },
            move: {
              enable: true,
              gravity: {
                enable: true,
                acceleration: -0.5,
              },
              speed: 5,
              direction: 'top',
              random: false,
              straight: false,
              outModes: {
                default: 'destroy',
                bottom: 'none',
              },
              attract: {
                enable: true,
                distance: 300,
                rotate: {
                  x: 600,
                  y: 1200,
                },
              },
            },
          },
          interactivity: {
            detectsOn: 'canvas',
            events: {
              resize: true,
            },
          },
          fpsLimit: 60,
          emitters: [
            {
              direction: 'top',
              particles: {
                color: '#407FFF',
              },
              rate: {
                quantity: 1,
                delay: 0.1,
              },
              size: {
                width: 100,
                height: 10,
              },
              position: {
                x: 50,
                y: 100,
              },
            },
            {
              direction: 'top',
              particles: {
                color: '#5D538D',
              },
              rate: {
                quantity: 1,
                delay: 0.1,
              },
              size: {
                width: 100,
                height: 10,
              },
              position: {
                x: 50,
                y: 100,
              },
            },
          ],
          detectRetina: true,
        }}
      /> */}
    </div>
  );
}

export { LastSection };
