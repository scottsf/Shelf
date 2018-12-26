import React from 'react';
import './App.scss';
import Header from './components/header/Header.js';
import Router from './router.js';
import './styles/style.scss';

const App = () => {
    return (
        <div className="App">
          <Header/>
          <Router />
        </div>
    );
}

export default App;
