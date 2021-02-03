import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import Header from "../Header/Header";
import Title from "../Title/Title";
import PostsList from "../Posts/PostsList/PostsList";

class App extends React.Component {
  state = {
    autoRefresh: false,
  };

  toggleAutoRefresh = () => {
    this.setState((prevState) => ({
      autoRefresh: !prevState.autoRefresh,
    }));
  };

  render() {
    const { autoRefresh } = this.state;
    const buttonTitle = autoRefresh
      ? "Stop auto-refresh"
      : "Start auto-refresh";
    return (
      <div>
        <Header />
        <Title
          buttonTitle={buttonTitle}
          toggleAutoRefresh={this.toggleAutoRefresh}
          autoRefresh={autoRefresh}
        />
        <PostsList autoRefresh={autoRefresh} />
      </div>
    );
  }
}
export default App;
