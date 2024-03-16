import React from "react";
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import { Route, Routes } from 'react-router-dom';
import Login from '../Form/Login/Login';
import Registration from '../Form/Registration/Registration';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';


function App() {
  return (
    <div className='page'>
      <Routes>
        <Route path="/signin" 
            element={
            <Login />
            }
        />
        <Route path="/signup" 
            element={
              <Registration />
            }
        />
        <Route path="/" 
            element={
              <>
                <Header isLogged={true}/>
                <Main />
                <Footer />
              </>
            }
        />
        <Route path="/movies" 
            element={
              <>
                <Header  isLogged={true}/>
                <Movies />
                <Footer />
              </>
            }
        />
        <Route path="/saved-movies" 
            element={
              <>
                <Header  isLogged={true}/>
                <Movies />
                <Footer />
              </>
            }
        />
        <Route path="/profile" 
            element={
              <>
                <Header  isLogged={true}/>
                <Profile />
                <Footer />
              </>
            }
        />
      </Routes>
    </div>
  );
}

export default App;
