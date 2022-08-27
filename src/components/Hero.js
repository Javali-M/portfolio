import React from 'react'
import './Hero.css';
import img from '../assets/bg.jpg';
const Hero = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img src={img} className='img' ></img>
        </div>
        <div className='content'>
            <p> Hey there! I'm</p>
            <p className='name'>Javali Murari.</p>
            <br/>
            {/* <h1>A full stack developer.</h1> */}
            <br/>
            <p>I am a full-stack web developer based in India with a passion for building and designing websites. 
I am enthusiastic about user experiences and love to know about their journeys. Currently also working on Machine Learning projects. I’m a team player with an eye for detail. 
When not on my laptop, I listen to music, sketch and binge-watch stuff !</p>
        </div>
    </div>
  );
}

export default Hero