import React, { Component } from "react";

export default class FormComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "",
    };
  }

  changeUserHandle = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  changeCommentHandle = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };
  changeTopicHandle = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };
  submitHandle = (event) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
    event.preventDefault();
  };
  render() {
    const { username, comments, topic } = this.state;
    return (
      <>
        <form onSubmit={this.submitHandle}>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={this.changeUserHandle}
            />
          </div>
          <div>
            <label>Comments</label>
            <textarea value={comments} onChange={this.changeCommentHandle} />
          </div>
          <div>
            <label>Topic</label>
            <select value={topic} onChange={this.changeTopicHandle}>
              <option value="React">React</option>
              <option value="Angular">Angular</option>
              <option value="Vue">Vue</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
