import React from "react";

const Action = props => (
  <div>
  {props.hasOptions && <button  className="btn btn-primary btn-block btn-raised btn-ripple" disabled={!props.hasOptions} onClick={props.pick}>
    What should I do?
  </button>}
</div>
)
export default Action;
