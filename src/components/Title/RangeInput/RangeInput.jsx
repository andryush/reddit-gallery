import React from "react";

function RangeInput({ rangeValue, changeRange }) {
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
        max="200"
        value={rangeValue}
        onChange={changeRange}
      />
    </div>
  );
}
export default RangeInput;
