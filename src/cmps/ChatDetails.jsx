import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import chatsService from '../service/chatsService';

import UserMessage from './ForDetails/UserMessage';
import ContactMessage from './ForDetails/ContactMessage';
import UserDetails from './ForDetails/UserDetails';

export default class ChatDetails extends Component {
  state = {
    chat: null,
  };

  componentDidMount() {
    if (this.state.chat) this.getChat();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getChat();
    }
  }

  getChat = async () => {
    const chat = await chatsService.getChatById(this.props.match.params.id);
    this.setState({ chat });
  };

  onGoBack = () => {
    this.props.history.push('/');
  };

  render() {
    const { chat } = this.state;
    if (!chat)
      return (
        <section className="chat-not-selected">Please select Chat </section>
      );

    return (
      <section className="details-pre">
        <UserDetails chat={chat} />

        <p className="full-date">{chat.fullDate}</p>
        {chat.userMessage.length && chat.time.length && (
          <UserMessage chat={chat} />
        )}
        <ContactMessage chat={chat} />
      </section>
    );
  }
}
