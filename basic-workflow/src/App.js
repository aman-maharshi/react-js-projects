import React from 'react';
import './App.css'
import Tweet from './Tweet';

function App() {

  return(
    <div className="Tweet-container">
      <Tweet name="Topson" role="Mid"/>
      <Tweet name="Jerax" role="Roaming Support"/>
      <Tweet name="Ceb" role="Offlane"/>
    </div>
  )
}

export default App;