import React from 'react';

import Photo from '../../assets/images/photo4.png';

const About = () => {
  return (
    <section className='about container' id='about'>
      <h2 className='about-title'>About Us</h2>
      <div className='about-content'>
        <div className='text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu et, consectetur vestibulum ultricies. Accumsan vitae tempor ut velit at mauris suspendisse. Rhoncus, at pellentesque in sagittis. Et congue sed metus faucibus vivamus dui mattis facilisis suspendisse.
        Porttitor neque dui et in consectetur tristique quis lacus, enim. Diam quis at sit et. Condimentum odio amet convallis non. Volutpat nascetur id id nibh ut id quis facilisis. Et odio vitae nullam lobortis convallis diam. Interdum tincidunt lorem varius fames velit, tellus sem dui. Nisl ipsum arcu id mattis orci, aliquet duis nulla. Aenean nisl, leo, et scelerisque diam massa sed ut metus. Libero hendrerit tristique condimentum rhoncus ultrices purus parturient mus. 
        </div>
        <img src={Photo} className='photo' alt='about'/>
      </div>
    </section>
  )
}

export default About
