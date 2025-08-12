import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'
const Player = () => {

  const { id } = useParams();

  const navigate = useNavigate();


  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
    
  })

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODI5ZGUxMGU1ZWRmNWEyZWZjYzEyNmE4YzJhN2I3YSIsIm5iZiI6MTc1NDY4MDYwMS41OTMsInN1YiI6IjY4OTY0ZDE5MzAwMzMyMDMxYjU2MWUxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NIRcEmqPgwv_jiu6IeFnK6W4SBiEd1g2gznEp_dMQ_I'
  }
};


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));

  },[])


  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}}/>
      <iframe
        src={`https://www.youtube.com/embed/${apiData.key}`}
        frameborder="0"
        width='90%'
        height='90%'
        title='trailer'
        allowFullScreen   
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
