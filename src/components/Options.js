import React from "react";
import Option from "./option";

const Options = props => (
  <div className="options card">
    {props.options.length > 1 && <div className="card__header">
    <a onClick={props.deleteOptions}>Remove all</a>
    </div>}
    <div className="card__body">
      {props.options.length === 0 && <p className="error">Please add an option to get started</p>}
      <ul>
        {props.options.map(option => (
          <Option
            key={option}
            optionText={option}
            deleteOption={props.deleteOption}
          />
        ))}
      </ul>
    </div>
  </div>
);
export default Options;
