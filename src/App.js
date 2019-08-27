import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header'
import MemeGenerator from './MemeGenerator'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header />
       <MemeGenerator /> 
      </header>
    </div>
  );
}

export default App;
