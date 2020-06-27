import React from "react";
import './UserOutput.sass';

const userOutput = props => {
  return (
      <div>
          <p>Hello, my name is {props.name}</p>
      </div>
  )
};

export default userOutput;
