import {useState, useEffect} from "react"
import ChatRow from "./ChatRow"
import SingleChat from "./SingleChat"

function App() {
  const [loadingChats, setLoadingChats] = useState(false)
  const [chats, setChats] = useState([])
  const [chatCopy, setChatCopy] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedChat, setSelectedChat] = useState(null)
  
  useEffect(() => {
    getChats()
  }, [])
  
  const getChats = async () => {
    setLoadingChats(true)
    try {
      const response = await fetch('https://my-json-server.typicode.com/codebuds-fk/chat/chats')
      const data = await response.json()
      // console.log(data)
      setChats(data)
      setChatCopy(data)
      setSelectedChat(data[0])
    } catch(error) {
      console.log(error)
    }
    setLoadingChats(false)
  }

  useEffect(() => {
    if (searchQuery) {
      let query = searchQuery.toLocaleLowerCase()
      setChats(chatCopy.filter(item => {
        if (item.title.toLocaleLowerCase().includes(query) || item.orderId.toLocaleLowerCase().includes(query)) {
          return true
        }
      }))
    } else {
      setChats(chatCopy)
    }
  }, [searchQuery])

  return (
    <div className="wrapper">
      <div className="chat-list">
        <div className="chat-list__filter">
          <p>Filter by Title / Order ID</p>
          <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} type="text" placeholder="Start typing to serach" />
        </div>
        <div className="chat-list__chats">
          {loadingChats ? <p className="loading">Loading...</p> : (
            chats.map(item => {
              return (
                <ChatRow key={item.id} item={item} setSelectedChat={setSelectedChat} selectedChat={selectedChat} />
              )
            })
          )}

          {!loadingChats && chats.length === 0 && searchQuery && <div className="chat-not-found">No chats found</div>}
        </div>
      </div>
      {selectedChat && (
        <SingleChat selectedChat={selectedChat} chats={chats} setChats={setChats} />
      )}
    </div>
  );
}

export default App;
