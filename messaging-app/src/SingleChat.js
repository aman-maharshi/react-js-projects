import React , {useState, useEffect} from 'react'

function SingleChat({ selectedChat, chats, setChats }) {
    const {id, imageURL, latestMessageTimestamp, messageList, orderId, title} = selectedChat
    // console.log(messageList)
    const [newMessage, setNewMessage] = useState("")
    const [messageListCopy, setMessageListCopy] = useState(null)

    useEffect(() => {
        setMessageListCopy(selectedChat.messageList)
    }, [selectedChat])
    

    const formatTime = (ts) => {
        const d = new Date(ts)
        return d.toLocaleTimeString("en-US")
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        if (newMessage) {
            const newMessageObject = {
                message: newMessage,
                messageId: "", 
                messageType: "text",
                options: [],
                sender: "USER",
                timestamp: Date.now()   
            }
            const updatedChats = chats.map(item => {
                if(item.id === id) {
                     return {
                         ...item,
                         messageList: [
                             ...item.messageList,
                             newMessageObject
                             
                         ]
                     }
                } else {
                     return item
                }
             })
            // Main chat data update
             setChats(updatedChats)
            // Local messages state update
            setMessageListCopy([...messageListCopy, newMessageObject])

            setNewMessage("")
        }
    }

    return (
        <div className="single-chat">
            <div className="messages-header">
                <div className="chats__row__image">
                    <img src={selectedChat?.imageURL} alt="dp" />
                </div>
                <div>{selectedChat?.title}</div>
            </div>
            <div className="messages-body">
                {
                    messageListCopy?.map((item, index) => {
                        const {message, messageId, messageType, options, sender, timestamp} = item
                        return (
                            <div key={index} className={sender === "BOT" ? "message-row-left" : "message-row-right"}>
                                <div className={sender === "BOT" ? "message-left" : "message-right"}>
                                    <div>{message}</div>
                                    <div className="message-time">{formatTime(timestamp)}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <form onSubmit={handleFormSubmit} className="messages-footer">
                <input value={newMessage} onChange={e => setNewMessage(e.target.value)} type="text" placeholder="Type a message..." />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default SingleChat