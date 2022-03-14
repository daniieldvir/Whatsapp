import React from 'react';

function ChatPreview({ chat }) {
  return (
    <div className="chat-preview">
      <img src={chat.userPic} />
      <p>{chat.userName}</p>
      <p>{chat.time}</p>
      <p>{chat.contactMessage}</p>
    </div>
  );
}

export default ChatPreview;
