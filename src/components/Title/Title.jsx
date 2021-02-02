import React from "react";

function Title({ buttonTitle, handleAutoRefresh, autoRefresh }) {
  return (
    <div className="jumbotron text-center">
      <h1 className="display-4">Top Comments</h1>
      <p className="lead">
        This is a simple Single-Page Application that is showing top commented
        posts on Reddit
      </p>

      <hr className="my-4" />

      <button
        type="button"
        className={
          autoRefresh ? "btn btn-danger btn-lg" : "btn btn-dark btn-lg"
        }
        onClick={handleAutoRefresh}
      >
        {buttonTitle}
      </button>
    </div>
  );
}
export default Title;
