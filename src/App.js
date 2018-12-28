import React from 'react';
import './App.scss';
import Router from './router.js';
import './styles/style.scss';
import Header from './components/header/Header.js';
import {BrowserRouter} from 'react-router-dom';

const App = () => {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Router />
        </div>
      </BrowserRouter>
    );
}

export default App;
