const playerInfo = [
    {name: "Roger Federer", gs:20, id:1},
    {name: "Rafael Nadal", gs:19, id:2},
    {name: "Novak Djokovic", gs:17, id:3},
    {name: "Pete Sampras", gs:14, id:4}
  ]
  
  function FirstApp() {
    return (
      <>
        <Header />
        <ul>
          {playerInfo.map(player => <Player name={player.name} gs={player.gs} key={player.id}/> )}
        </ul>
        <TimeArea />
      </>
    );
  }
  
  function Header() {
    return <h1 className="title">App Header</h1>  
  }
  
  function TimeArea() {
    return (
      <>
         <p>Current time is {new Date().toLocaleString()}</p>
         <small className="footer">More Info</small>
      </>
    )
  }
  
  function Player(props) {
    return <li>{props.name} won {props.gs} GrandSlam titles</li>
  }
  
  setInterval(function() {
    ReactDOM.render(<FirstApp />, document.querySelector('#app'))  
  }, 1000)
  
   