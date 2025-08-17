import React from 'react'
import './Feed.css'

import {card} from '../../data'
import {Link} from 'react-router-dom'

const Feed = () => {
  return (
    
    <div className="feed">
      
      
      {card.map((item, index) => {
        return (
          <Link to={`video/20/4521`} className="card" key={index}>
            <img src={item.image} alt="" />
            <h2>{item.title}</h2>
            <h3>{item.name}</h3>
            <p>{item.views }</p>
          </Link>
        )
      })}
      </div>

      
      

  )
}

export default Feed
