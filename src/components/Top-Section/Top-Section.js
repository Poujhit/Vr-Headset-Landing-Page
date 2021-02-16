import React from 'react';
import Roll from 'react-reveal/Roll';
import Particles from 'react-tsparticles';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Navbar } from '../../widgets/Navbar';
import Image1 from '../../images/image1.png';
import Image2 from '../../images/image2.png';
import Image3 from '../../images/image3.png';
import Image4 from '../../images/image4.png';
import Image5 from '../../images/image5.png';
import './Top-Section.css';

function TopSection() {
 
  return (
    <div className='Top-Section'id = "Home">
      <Navbar />
      <Particles
        id='Top-Section'
        options={{
          background: {
            color: {
              value: '#0d47a1',
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: 'canvas',
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <img src={Image1} className='Image-1' alt='image1' />
      <div className='Top-section-content-left'>
        <Roll bottom>
          <text className='Intro'>Introducing</text>
          <br />
          <text className='Intro2'>Our latest VR headset</text>
          <br />
          <br />
          <text className='Intro3'>
            UNTETHER YOUR EXPECTATIONS EXPLORE AWE-INSPIRING GAMES AND
            EXPERIENCES WITH UNPARALLELED FREEDOM.
          </text>
        </Roll>
      </div>
      <button
        className='Intro-button'
        onClick={() => {
          toast.error(
            'Product Not Available right now. Try Again Later',
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
        Buy Now
      </button>
      <div className='Top-section-content-right'>
        <Roll right>
          <img src={Image2} className='Image-2' alt='image2' />
        </Roll>
        <Roll bottom>
          <img src={Image3} className='Image-3' alt='image3' />
          <img src={Image4} className='Image-4' alt='image4' />
          <img src={Image5} className='Image-5' alt='image5' />
        </Roll>
      </div>
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
  );
}

export { TopSection };
