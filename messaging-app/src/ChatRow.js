import React, {useState} from 'react'

function ChatRow({ item, setSelectedChat, selectedChat }) {
    const {id, imageURL, latestMessageTimestamp, messageList, orderId, title} = item

    const formatDate = (ts) => {
        const d = new Date(ts)
        return d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear()
    }

    const lastMessage = messageList.find(item => item.timestamp === latestMessageTimestamp)
    // console.log(lastMessage, "LM")
    
    return (
        <div className="chat-list__chats__row" onClick={() => setSelectedChat(item)} style={id === selectedChat?.id ? {backgroundColor:"#f1f3f6"} : null}>
            <div className="chats__row__image">
                <img src={imageURL} alt="dp" />
            </div>
            <div className="chats__row__content">
                <p>{title}</p>
                <p>Order {orderId}</p>
                {lastMessage && <p className="text-gray last-line">{lastMessage.message}</p>}
            </div>
            <div className="chats__row__date text-gray">{formatDate(latestMessageTimestamp)}</div>
        </div>
        
    )
}

export default ChatRow