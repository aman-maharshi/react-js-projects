import React from 'react';
function Pet(props) {
    return(
        <li>{props.name} is a {props.species} and is {props.age} years old</li>
    );
}

export default Pet;