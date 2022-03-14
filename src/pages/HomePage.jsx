import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import chatsService from '../service/chatsService';
import { ChatList } from '../cmps/ChatList';
import { ChatBar } from '../cmps/ChatBar';
import ChatFilter from '../cmps/ChatFilter';
import TopBar from '../cmps/TopBar';
import ChatDetails from '../cmps/ChatDetails';
import MainHeder from '../cmps/MainHeder';

export default class HomePage extends Component {
  state = {
    chats: null,
    filterBy: '',
  };

  async componentDidMount() {
    await this.loadChats();
  }

  async loadChats() {
    const { filterBy } = this.state;
    const chats = await chatsService.getChats(filterBy);

    this.setState({ chats: chats });
  }

  onFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadChats);
  };

  render() {
    const { chats } = this.state;
    if (!chats) return <div>Loading...</div>;

    return (
      <div className="home-page">
        <TopBar chats={chats} onFilter={this.onFilter} />
        <MainHeder />
        <ChatFilter onFilter={this.onFilter} />
        <ChatList chats={chats} />
        <Switch>
          <Route component={ChatDetails} path="/:id?" />
        </Switch>
        <ChatBar />
      </div>
    );
  }
}
