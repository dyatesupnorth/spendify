import React from "react";

const Option = props => (
  <li className="option">
        <span className="option__text">{props.optionText}</span>
        <div className="option__icon">
          <img onClick={e => {
            props.deleteOption(props.optionText);
          }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACjSURBVEhL7dVBDkAwEIXhnsUpLLmELWuncAYntHcIZlovRNCZae36JxPt6ku0wpVSmmiasDQ30nRh+RwD6/G0xMBCU/ndR1ZIDCAtpAaQFDIDKAYlAwhQ63dn2QDEwBXKDiBAM80vAGJgoxn87ofwinoaya1Tdz+D2K1T93bI2aDYLUqGpNfUDEkBpIa0ALp/sK9ZASSC+I9mBRADdViW1Dm3AyBlMcBLtdBmAAAAAElFTkSuQmCC" />
          
        </div>
        
          
  </li>
);
export default Option;
