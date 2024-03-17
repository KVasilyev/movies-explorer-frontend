import React from "react";
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import { Route, Routes, useLocation } from 'react-router-dom';
import Login from '../Form/Login/Login';
import Registration from '../Form/Registration/Registration';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import NotFoundPage from '../NotFoundPage/NotFoundPage';


function App() {

  const { pathname } = useLocation();

  return (
    <div className='page'>
      {pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile' ?
        <Header isLogged={true}/> : ''
      }
      <Routes>
        <Route path="/signin" element={<Login />}/>
        <Route path="/signup" element={<Registration />}/>
        <Route path="/" element={<Main />}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/saved-movies"  element={<Movies />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile' ?
        <Footer /> : ''
      }
    </div>
  );
}

export default App;
