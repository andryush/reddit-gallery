import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import Header from "../Header/Header";
import Title from "../Title/Title";
import PostsList from "../Posts/PostsList/PostsList";

class App extends React.Component {
  state = {
    autoRefresh: false,
  };

  handleAutoRefresh = () => {
    this.setState((prevState) => ({
      autoRefresh: !prevState.autoRefresh,
    }));
  };

  render() {
    const buttonTitle = this.state.autoRefresh
      ? "Stop auto-refresh"
      : "Start auto-refresh";
    return (
      <div>
        <Header />
        <Title
          buttonTitle={buttonTitle}
          handleAutoRefresh={this.handleAutoRefresh}
          autoRefresh={this.state.autoRefresh}
        />
        <PostsList />
      </div>
    );
  }
}
export default App;
