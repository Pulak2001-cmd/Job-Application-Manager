import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import HomePage from './components/HomePage';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token) {
      setLoggedIn(true);
    }
  }, []);
  return (
    <BrowserRouter>
      {loggedIn ? (
        <Routes>
          <Route path="/" element={<HomePage setLoggedIn={setLoggedIn} />}/>
        </Routes>
      ): (
        <Routes>
          <Route path='/' element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path='/signup' element={<Signup setLoggedIn={setLoggedIn} />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
