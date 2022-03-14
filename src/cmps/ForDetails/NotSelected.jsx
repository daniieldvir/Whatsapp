import React from 'react';

function NotSelected(chat) {
  return (
    <section className="chat-not-selected">
      {!chat.id && <h2>Please select Chat </h2>}
    </section>
  );
}

export default NotSelected;
