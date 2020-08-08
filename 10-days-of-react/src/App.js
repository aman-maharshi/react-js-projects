import React from 'react';
import './App.css';
import LikeArea from './LikeArea';
import AddPetForm from './AddPetForm';

const useState = React.useState;
const useEffect = React.useEffect;

function App() {
  const [pets, setPets] = useState([])

  // only run once - the first time this component is rendered
  useEffect(() => {
    if(localStorage.getItem("petData")) {
      setPets(JSON.parse(localStorage.getItem("petData")))
    }
  }, [])

  // run everytime our pet state changes
  useEffect(() => {
    localStorage.setItem("petData", JSON.stringify(pets))
  }, [pets])

  return (
    <div className="app">
      <Header />
      <LikeArea />
      <TimeArea />
      <AddPetForm setPets={setPets}/>
      <ul>
        {pets.map(function(pet) {
          return (<Pet setPets={setPets} id={pet.id} name={pet.name} species={pet.species} age={pet.age} key={pet.id}/>)
        })}
      </ul>
      <Footer />
    </div>
  );
}

function Pet(props) {
  function handleDelete() {
    props.setPets(prev => prev.filter(pet => pet.id != props.id))
  }
  return(
      <li>{props.name} is a {props.species} and is {props.age} years old <button onClick={handleDelete}>Delete</button></li>
  );
}

function Header() {
  return (
    <h1 className="title">App Header</h1>
  );
}

function TimeArea() {
  const [theTime, setTheTime] = useState(new Date().toLocaleString());
  useEffect(() => {
    const interval = setInterval(() => setTheTime(new Date().toLocaleString()), 1000)
    return () => clearInterval(interval)
  }, [])
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
