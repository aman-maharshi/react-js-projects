import React from 'react';
import './App.css';
import LikeArea from './LikeArea';

const useState = React.useState;

const pets = [
  { name: "Meowsalot", species: "cat", age: "5", id: 123456789 },
  { name: "Barksalot", species: "dog", age: "3", id: 987654321 },
  { name: "Fluffy", species: "rabbit", age: "2", id: 123123123 },
  { name: "Purrsloud", species: "cat", age: "1", id: 456456456 },
  { name: "Paws", species: "dog", age: "6", id: 789789789 }
]

function App() {
  return (
    <div className="app">
      <Header />
      <LikeArea />
      <TimeArea />
      <ul>
        {pets.map(function(pet) {
          return (<Pet name={pet.name} species={pet.species} age={pet.age} key={pet.id}/>)
        })}
      </ul>
      <Footer />
    </div>
  );
}

function Pet(props) {
  return(
      <li>{props.name} is a {props.species} and is {props.age} years old</li>
  );
}

function Header() {
  return (
    <h1 className="title">App Header</h1>
  );
}

function TimeArea() {
  const [theTime, setTheTime] = useState(new Date().toLocaleString());
  setTimeout(function() {
    setTheTime(new Date().toLocaleString());
  }, 1000);
  return (
    <p>Time: <span className="time">{theTime}</span></p>
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
