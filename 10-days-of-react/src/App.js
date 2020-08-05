import React from 'react';
import './App.css';
import Pet from './Components/Pet'

function App() {
  return (
    <div className="app">
      <Header />
      <TimeArea />
      <ul>
        <Pet name="Lina" species="cat" age="3"/>
        <Pet name="Luna" species="cat" age="2"/>
        <Pet name="Medusa" species="cat" age="5"/>
      </ul>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <h1 className="title">App Header</h1>
  );
}

function TimeArea() {
  return (
    <p>Time: <span className="time">{new Date().toLocaleString()}</span></p>
  );
}

function Footer() {
  return (
    <footer>
      <p>Coded by <a href="">Aman Maharshi</a></p>
    </footer>
  );
}


export default App;
