import React from 'react';

function UserMessage({ chat }) {
  return (
    <section className="chat-message box sb2">
      <p>{chat.userMessage}</p>
      <p>{chat.time}</p>
    </section>
  );
}

export default UserMessage;
