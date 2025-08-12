import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import { Link } from 'react-router-dom';
const TitleCards = ({title,category}) => {

  const[apiData,setApiData]=useState([])
  const cardsRef = useRef();


  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODI5ZGUxMGU1ZWRmNWEyZWZjYzEyNmE4YzJhN2I3YSIsIm5iZiI6MTc1NDY4MDYwMS41OTMsInN1YiI6IjY4OTY0ZDE5MzAwMzMyMDMxYjU2MWUxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NIRcEmqPgwv_jiu6IeFnK6W4SBiEd1g2gznEp_dMQ_I'
  }
};


  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  }
  

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));

    

    cardsRef.current.addEventListener('wheel',handleWheel)
    
  },[])

  return (
    <div className='title-cards'>
      <h2> { title?title :"Popular On Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}`} className='card' key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards
