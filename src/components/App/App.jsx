import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import Header from "../Header/Header";
import Title from "../Title/Title";
import PostsList from "../Posts/PostsList/PostsList";

function App() {
  // state = {
  //   autoRefresh: false,
  //   rangeValue: 0,
  // };

  // toggleAutoRefresh = () => {
  //   this.setState((prevState) => ({
  //     autoRefresh: !prevState.autoRefresh,
  //   }));
  // };

  // changeRange = (e) => {
  //   this.setState({
  //     rangeValue: e.target.value,
  //   });
  // };

  // const { autoRefresh, rangeValue } = this.state;

  const [autoRefresh, setAutoRefresh] = useState(false);
  const [rangeValue, setRangeValue] = useState(0);

  const toggleAutoRefresh = () => {
    setAutoRefresh((prev) => !prev);
  };
  const changeRange = (e) => {
    setRangeValue(e.target.value);
  };

  const buttonTitle = autoRefresh ? "Stop auto-refresh" : "Start auto-refresh";
  return (
    <div>
      <Header />
      <Title
        buttonTitle={buttonTitle}
        toggleAutoRefresh={toggleAutoRefresh}
        autoRefresh={autoRefresh}
        rangeValue={rangeValue}
        changeRange={changeRange}
      />
      <PostsList autoRefresh={autoRefresh} rangeValue={rangeValue} />
    </div>
  );
}
export default App;
