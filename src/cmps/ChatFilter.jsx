import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class ChatFilter extends Component {
  state = {
    term: '',
  };

  handleChange = ({ target }) => {
    const { onFilter } = this.props;
    const field = target.name;
    const value = target.value;
    this.setState({ [field]: value }, () => {
      onFilter(this.state);
      console.log(this.state);
    });
  };

  render() {
    const { term } = this.state;
    return (
      <form className="chat-filter">
        <section className="inputs-container">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />

          <input
            onChange={this.handleChange}
            value={term}
            type="text"
            name="term"
            id="term"
            placeholder="Search or start new chat"
          />
        </section>
      </form>
    );
  }
}
