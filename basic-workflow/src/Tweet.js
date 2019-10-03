import React, {useState} from 'react';
import './App.css'

// function Tweet(props) {
//     return(
//         <div className="Tweet">
//             <h3>Player : {props.name}</h3>
//             <p>This is a random Tweet</p>
//             <p className="Role">Role : {props.role}</p>
//         </div>
//     );
// }


function Tweet({name, role}) {

    const [count, setCount] = useState(0);
    // count - variable, setCount - function that changes the variable, useState(0) - initail value of state

    const increment = () => {
        setCount(count + 1);
    }

    return(
        <div className="Tweet">
            <h3>Player : {name}</h3>
            <p>This is a random Tweet</p>
            <p className="Role">Role : {role}</p>
            <p><button onClick={increment}><i class="fas fa-thumbs-up">Level Up</i></button> : <span>{count}</span></p>
        </div>
    );
}

export default Tweet;
