import React from 'react';
import './App.css';

const useState = React.useState;

function LikeArea() {
    const [likeCount, setLikeCount] = useState(3)
    function incLike() {
      setLikeCount(function(prev) {
        return prev + 1;
      })
    }
    function decLike() {
      setLikeCount(function(prev) {
        if(prev > 0) {
          return prev - 1;
        }
        else {
          return 0;
        }
      })
    }
    return(
      <>
        <p>This page has been liked {likeCount} times</p>
        <button onClick={incLike}>Like</button> <button onClick={decLike}>Unlike</button>
      </>
    );
  }

  export default LikeArea;