import React from "react";
import { Grommet } from "grommet";

export default props => {
  return (
    <Grommet
      theme={{
        global: {
          colors: {
            brand: "#183446",
            "accent-3": "#38AECC",
            "neutral-3": "#046E8F",
            "neutral-2": "#8100AF",
            "accent-2": "#B63DE2",
            "accent-1": "#3DE292",
            "neutral-1": "#00AF7B",
            "accent-4": "#E2AB3D",
            "neutral-4": "#AF5A00"
          },
        },
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
