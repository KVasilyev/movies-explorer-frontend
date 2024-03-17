import React from 'react';
import './MoviesList.css';
import MoviesCard from '../MovieCard/MovieCard';
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { fakeMoviesDb } from '../../../utils/fake-db-movies.js';
import { savedMoviesDb } from '../../../utils/saved-movies.js';

function MoviesList() {

  const { pathname } = useLocation();

  const [moviesCounter, setMoviesCounter] = useState(0);

  function showMovies() {
    const display = window.innerWidth
    if (display > 767) {
        setMoviesCounter(12) 
    } else if (display > 520) {
        setMoviesCounter(8)
    } else {
        setMoviesCounter(5)
    }
  }

  useEffect(() => {
    showMovies()
  }, [])

  const resize = () => {
    setTimeout(() => {
      showMovies();
        }, 500);
    }

  useEffect(() => {
    showMovies();
    window.addEventListener('resize', resize);
    return () => {
      document.removeEventListener('resize', resize);
    };  
  }, []);

  function showMore() {
    const display = window.innerWidth
    if (display > 767) {
      setMoviesCounter(moviesCounter + 3)
    } else if (display > 520) {
        setMoviesCounter(moviesCounter + 2)
    } else {
        setMoviesCounter(moviesCounter + 2)
    }
  }

  return (
    <section className='movies-list'>
        {pathname === '/movies' ? (
          <>
            <ul className='movies-list__frame'>
              {fakeMoviesDb.slice(0, moviesCounter).map(movie => (       
                <MoviesCard movie={movie} key={movie.movieId}/>
              ))}
            </ul>
            {fakeMoviesDb.length > moviesCounter ? (
              <button type='button' className='movies-list__button button' onClick={showMore}>Еще</button>
            ) : ('')}
          </>
        ) : (
          <>
            <ul className='movies-list__frame'>
              {savedMoviesDb.slice(0, moviesCounter).map(movie => (
                <MoviesCard movie={movie} key={movie.movieId}/>
              ))}
            </ul>

            {savedMoviesDb.length > moviesCounter ? (
              <button type='button' className='movies-list__button button' onClick={showMore}>Еще</button>
            ) : ('')}
          </>
        )}
      
    </section>
  )
}

export default MoviesList;
