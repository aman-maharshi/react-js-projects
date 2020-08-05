import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <TimeArea />
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
