import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ChatFilter from './ChatFilter';

export default function TopBar(props) {
  return (
    <div className="top-bar">
      <h2 className="logo">WhatsApp</h2>
      <img
        className="profile-picture"
        src="https://res.cloudinary.com/disku3v4j/image/upload/v1646307805/daniiel/13726_10206525158264095_4610679800752306461_n_pg81m4.jpg"
      />
      <ChatFilter onFilter={props.onFilter} />
      <div className="main-bar">
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        <FontAwesomeIcon icon="fa-solid fa-message" />
        <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" />
      </div>
    </div>
  );
}
