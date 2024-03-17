import React from 'react';
import './Search.css';

function Search() {
  return (
    <section className='search'>
      <form className='search__frame'>
        <input className='search__input' placeholder='Фильм'/>
        <button type='submit' className='button search__button'>Найти</button>
        <div className='search__break'></div>
        <label className="search__switch">
          <input type="checkbox" className='search__checkbox'/>
          <span className="search__slider"></span>
          {/* <p className='search__switch-text'>Короткометражки</p> */}
          Короткометражки
        </label>
      </form>
    </section>
  )
}

export default Search;