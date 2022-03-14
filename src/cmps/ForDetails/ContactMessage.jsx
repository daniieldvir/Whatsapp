import React from 'react';

function ContactMessage({ chat }) {
  return (
    <section className="chat-message box sb1">
      <p>{chat.contactMessage}</p>
      <p>{chat.time}</p>
    </section>
  );
}

export default ContactMessage;
