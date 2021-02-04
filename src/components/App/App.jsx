import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import Header from "../Header/Header";
import Title from "../Title/Title";
import PostsList from "../Posts/PostsList/PostsList";

class App extends React.Component {
  state = {
    autoRefresh: false,
    rangeValue: 0,
  };

  toggleAutoRefresh = () => {
    this.setState((prevState) => ({
      autoRefresh: !prevState.autoRefresh,
    }));
  };

  changeRange = (e) => {
    console.log(typeof e.target.value);
    this.setState({
      rangeValue: e.target.value,
    });
  };

  render() {
    const { autoRefresh, rangeValue } = this.state;
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
          rangeValue={rangeValue}
          changeRange={this.changeRange}
        />
        <PostsList autoRefresh={autoRefresh} rangeValue={rangeValue} />
      </div>
    );
  }
}
export default App;
