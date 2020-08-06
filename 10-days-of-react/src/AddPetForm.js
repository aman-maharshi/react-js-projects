import React from 'react';
import './App.css';

const useState = React.useState;

function AddPetForm(props) {
    const [name, setName] = useState();
    const [species, setSpecies] = useState();
    const [age, setAge] = useState();
  
    function handleSubmit(e) {
      e.preventDefault();
      props.setPets(prev => prev.concat({name:name, species:species, age:age, id:Date.now()}));
      setName("");
      setSpecies("");
      setAge("");
    }
    return (
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add New Pet</legend>
          <input onChange={ e => {setName(e.target.value)}} placeholder="Name" />
          <input onChange={ e => {setSpecies(e.target.value)}} placeholder="Species" />
          <input onChange={ e => {setAge(e.target.value)}} placeholder="Age" type="number" />
          <button>Add Pet</button>
        </fieldset>
      </form>
    );
  }

  export default AddPetForm;