import React from 'react';
import './MovieCard.css';
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';

function MoviesCard({ isLiked, movie }) {
  const { pathname } = useLocation();

  const hours = Math.floor(movie.duration / 60);
  const minutes = movie.duration % 60;

  function likeMovie(e) {
    console.log('like')
  }
  
  return (
        <li className='movie'>
          {pathname === '/movies' ? (
            <>
              {movie.isLiked ? 
              <div className='movie__saved-badge' />
              :
              <button type='button' className='button movie__save-button' onClick={likeMovie}>Сохранить</button>
              }
            </>
          ) : (
            <button type='button' className='button movie__delete-button' onClick={likeMovie}></button>
          )}
          <Link to={movie.trailerLink} className='movie__link' target='_blank'>
            <img className='movie__image' src={movie.image} alt={movie.nameRU}/>
            <div className='movie__text'>
              <p className='movie__name'>{movie.nameRU}</p>
              <p className='movie__time'>{hours}ч {minutes}м</p>
            </div>
          </Link>
        </li>
  )
}

export default MoviesCard;
