import React from 'react';
import './NotFoundPage.css';
import { Link, useNavigate } from 'react-router-dom';

function NotFoundPage() {
  
  const navigate = useNavigate();
  function handleHistoryBack() {
      navigate(-1);
  }

  return (
    <main className='notfoundpage'>
      <div className='notfoundpage__message'>
        <h1 className='notfoundpage__headline'>404</h1>
        <span className='notfoundpage__descript'>Страница не найдена</span>
      </div>
      <Link className='notfoundpage__link link' onClick={handleHistoryBack}>Назад</Link>
    </main>
  )
}

export default NotFoundPage;