import React from 'react';
import logo from './logo.svg';
import './App.css';

import CoctailsList from "./components/CoctailsList/CoctailsList.jsx";
import FiltersList from "./components/FiltersList/FiltersList";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app" id="top">
        <Header />
        <div  className="wrapper">
          <FiltersList />
          <CoctailsList /> 
        </div>
        <a href="#top" id="to-top">Вверх</a>
    </div>
  );
}

export default App;
