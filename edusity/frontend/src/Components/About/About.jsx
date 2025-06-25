import React from 'react'
import './About.css'
import about_img from "../../assets/about.png"
import play_icon from "../../assets/play-icon.png"

const About = () => {
  return (
      <div className='about'>
          <div className="about-left">
              <img src={about_img} className='about-img' alt="" />
              <img src={play_icon} className='play-icon' alt="" />
          </div>

          <div className="about-right">
              <h3>ABOUT UNIVERSITY</h3>
              <h2>Nurturing Tomorrow's Leaders Today</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed sit illo
                  reprehenderit similique maiores nobis sunt ipsum quae quis totam accusantium,
                  ad doloremque sint vel alias ut in minus eos.</p>
              
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed sit illo
                  reprehenderit similique maiores nobis sunt ipsum quae quis totam accusantium,
                  ad doloremque sint vel alias ut in minus eos.</p>
              
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed sit illo
                  reprehenderit similique maiores nobis sunt ipsum quae quis totam accusantium,
                  ad doloremque sint vel alias ut in minus eos.</p>
          </div>
      
    </div>
  )
}

export default About
