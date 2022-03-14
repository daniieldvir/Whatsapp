import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class ChatBar extends Component {
  render() {
    return (
      <section className="chat-bar">
        <FontAwesomeIcon icon="fa-solid fa-face-smile-beam" />
        <textarea></textarea>
        <FontAwesomeIcon icon="fa-solid fa-microphone" />
      </section>
    );
  }
}
