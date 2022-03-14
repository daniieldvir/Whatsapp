import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function UserDetails({ chat }) {
  return (
    <section className="chat-details">
      <div className="user-details">
        <img src={chat.userPic} />
        <h3>{chat.userName}</h3>
      </div>
      <div className="nav-icons">
        <a href="/">
          <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
        </a>
        <FontAwesomeIcon icon="fa-solid fa-paperclip" />
        <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" />
      </div>
    </section>
  );
}

export default UserDetails;
