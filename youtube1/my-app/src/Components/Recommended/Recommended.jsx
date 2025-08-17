import React from 'react'
import './Recommended.css'
import {card} from '../../data'
const Recommended = () => {

  return (
      <div className='recommended'>
          {card.map((item, index) => {
              return (
                  <div className="side-video-list" key={index}>
                      <img src={item.image} alt="" />
                      <div className="video-info">
                          <h4>{item.title}</h4>
                          <p>{item.name}</p>
                          <p>{item.views}</p>
                      </div>
                      
                  </div>
              )
          })}
      
    </div>
  )
}

export default Recommended
