import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./Button22.css";

function Button22(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(x27326489TimelineData);
  }, []);

  return (
    <div className="x27326489 component component-wrapper not-ready">
      <div className="master-button-23Qqkb">
        <div className="button-i2732648951-ZtIG9d valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const x27326489TimelineData = [
  {
    initial_state_name: "Property-1=Tertiary",
    root_element: ".x27326489",
    states_flow: {
      "Property-1=Primary": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Secondary": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Tertiary": {
        listeners: [],
        overrides: {},
      },
    },
  },
];

export default Button22;
