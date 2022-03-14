import React from 'react';
import ChatPreview from './ChatPreview';
import { Link } from 'react-router-dom';

export function ChatList({ chats }) {
  return (
    <section>
      <ul className="contact-list">
        {chats.map((chat) => {
          return (
            <li key={chat.id}>
              <Link to={`/${chat.id}`}>
                <ChatPreview chat={chat} />
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
