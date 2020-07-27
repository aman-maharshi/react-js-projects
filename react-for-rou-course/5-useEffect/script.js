const useState = React.useState
const useEffect = React.useEffect

function FirstApp() {
  const [playerInfo, setPlayerInfo] = useState([])
  
  // only run once the first time this component is rendered
  useEffect(() => {
    if(localStorage.getItem("exampleData")) {
      setPlayerInfo(JSON.parse(localStorage.getItem("exampleData")))
    }
  }, [])
  
  // run everytime the pet state changes
  useEffect(() => {
    localStorage.setItem("exampleData", JSON.stringify(playerInfo))
  }, [playerInfo])
  
  return (
    <>
      <Header />
      <LikeArea />
      <AddPlayerForm setPlayer={setPlayerInfo}/>
      <ul>
        {playerInfo.map(player => <Player id={player.id} setPlayer={setPlayerInfo} name={player.name} gs={player.gs} key={player.id}/> )}
      </ul>
      <TimeArea />
    </>
  );
}

function Header() {
  return <h1 className="title">App Header</h1>  
}

function LikeArea() {
  const [likeCount, setLikeCount] = useState(0);
  
  function incrementLike() {
    setLikeCount(function(previous) {
      return previous + 1;
    });
  }
  
  function decreaseLike() {
    setLikeCount(function(previous) {
      if(previous > 0) {
        return previous - 1; 
      }
      else {
        return 0;
      }
    });
  }
  
  return (
    <>
      <h3 className="like">This page has been liked {likeCount} times</h3>
      <div className="buttons-div">
        <button onClick={incrementLike}>Like</button>
        <button onClick={decreaseLike}>Dislike</button>
      </div>
    </>
  );
}

function TimeArea() {
  // destructuring the array returned by useState
  // variables : time - access the state value, setTime - update the state value
  const [time, setTime] = useState(new Date().toLocaleString()); 
  
  useEffect(() => {
    setInterval(() => {
      const interval = setTime(new Date().toLocaleString())
      return () => clearInterval(interval);
    }, 1000)
  }, [])
  
  return (
    <>
       <p>Current time is {time}</p>
      <small className="footer">More Info</small>
    </>
  )
}

function Player(props) {
  function handleDelete() {
    // determining the id of li item whose button is clicked then go on the state
    // of all the players and find the matching id and removing it from the array
    props.setPlayer(prev => prev.filter(player => player.id != props.id))
    
  }
  return (
    <li>{props.name} won {props.gs} GrandSlam titles 
      <button className="del" onClick={handleDelete}>Delete</button>
    </li>
  )
}

function AddPlayerForm(props) {
  const [name, setName] = useState();
  const [gs, setGs] = useState();
  
  function handleSubmit(e) {
    e.preventDefault();
    if(name != "" && gs != "") {
      props.setPlayer(prev => prev.concat({name: name, gs: gs, id: Date.now()}));
      setName("");
      setGs("");  
    } 
  }
  
  return(
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add New Player</legend>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
        <input value={gs} onChange={e => setGs(e.target.value)} placeholder="Grand Slams" />
        <button>Add</button>
      </fieldset>
    </form>
  );
}


ReactDOM.render(<FirstApp />, document.querySelector('#app'))
 