import React from "react";
import { Grommet } from "grommet";

export default props => {
  return (
    <Grommet
      theme={{
        textInput: {
          container: {
            extend: {
              width: "unset"
            }
          }
        }
      }}
    >
      {props.children}
    </Grommet>
  );
};
