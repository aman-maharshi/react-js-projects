import React from 'react';
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
    return(
        <div className="Tweet">
            <h3>Player : {name}</h3>
            <p>This is a random Tweet</p>
            <p className="Role">Role : {role}</p>
        </div>
    );
}

export default Tweet;
