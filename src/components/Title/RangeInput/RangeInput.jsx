import React from "react";

class RangeInput extends React.Component {
  render() {
    const { rangeValue, changeRange } = this.props;
    return (
      <div className="m-3">
        <label htmlFor="customRange1" className="form-label">
          Current filter: {rangeValue}
        </label>
        <br />
        <input
          type="range"
          className="form-range"
          id="customRange1"
          min="0"
          max="100"
          value={rangeValue}
          onChange={changeRange}
        />
      </div>
    );
  }
}
export default RangeInput;
