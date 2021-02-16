import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Roll from 'react-reveal/Roll';
import Particles from 'react-tsparticles';
import Slide from 'react-reveal/Slide';

import Headset from '../../images/headset2.png';
import Vr1 from '../../images/vr1.png';
import Vr2 from '../../images/vr3.png';
import Vr3 from '../../images/vr2.png';

import './Second-Section.css';

function SecondSection() {
  return (
    <div className='Second-Section' id ="Features">
      <Zoom>
        <text className='Intro4'>What Special on this Product</text>
      </Zoom>
      <Roll left>
        <img src={Headset} className='product-image2 ' alt='second' />
      </Roll>

      <div className='Second-section-right'>
        <div className='back-g1'>
          <img src={Vr1} className='Vr1' alt='vr1' />
        </div>

        <Slide bottom>
          <text className='Title-1'>Touch Controller</text>
          <text className='Title-1-content'>
            You can Switch On the touch controller to get a great experince
            while gaming without fatigue on long gaming sessions and a great
            haptic feedback for immersive experience
          </text>
        </Slide>

        <div className='back-g2'>
          <img src={Vr2} className='Vr2' alt='Vr2' />
        </div>
        <Slide bottom>
          <text className='Title-2'>Battery And Power</text>
          <text className='Title-2-content'>
            This Vr Headset has USB-C support with fast charging which can
            charge the headset in just 40 mins and you will get upto 10 hrs of
            battery life
          </text>
        </Slide>

        <div className='back-g3'>
          <img src={Vr3} className='Vr3' alt='Vr3' />
        </div>
        <Slide bottom>
          <text className='Title-3'>Eyeglass Spacer</text>
          <text className='Title-3-content'>
            Eyeglass Spacer for providing comfort while playing using this
            headset for prolong hours.
          </text>
        </Slide>
      </div>

      <Particles
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
      />
    </div>
  );
}

export { SecondSection };
