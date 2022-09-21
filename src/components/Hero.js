import React from 'react'
import './Hero.css';
import img from '../assets/dk.jpeg';
import me from '../assets/j.png';
const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img src={img} className="img"></img>
      </div>
      <div className="content">
        <div className="first">
          <p> Hey there! I'm</p>
          <br/>
          <p className="name">Javali Murari.</p>
          <br />
          <br />
          <p>
            I am a full-stack web developer based in India with a passion for
            building and designing websites. I am enthusiastic about user
            experiences and love to know about their journeys. Currently also
            working on Machine Learning projects. I’m a team player with an eye
            for detail. When not on my laptop, I listen to music, sketch and
            binge-watch stuff !
          </p>
        </div>
        <div className='me'>
        <img className="me" src={me}></img>
        </div>
      </div>
    </div>
  );
}

export default Hero