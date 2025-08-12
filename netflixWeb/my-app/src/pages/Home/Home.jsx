/* eslint-disable no-undef */
import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'

import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'


import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCard from '../../components/TitleCards/TitleCards'
import background2 from '../../assets/background2.avif'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
        <div className='hero'>
          // eslint-disable-next-line no-undef
          <img src={background2} alt="" className='banner-img' />
          <div className="hero-caption">
              <img src={hero_title} alt="" className='caption-img' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Iure commodi fugiat, tempore fuga cupiditate explicabo nesciunt
                  Iure commodi fugiat, tempore
              </p>
              <div className="hero-btn">
                 <button className='btn'><img src={play_icon} alt="" />Play</button>
                <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>

              </div>
                              <TitleCard title='Popular On Netfilx' />

          </div>
    </div>

      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only On Netflix"} category={"popular"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Top Pics For You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
