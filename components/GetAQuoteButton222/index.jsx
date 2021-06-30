import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./GetAQuoteButton222.css";

function GetAQuoteButton222(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(i2601273864120TimelineData);
  }, []);

  return (
    <div className="i26012738-64120 component component-wrapper not-ready">
      <div className="master-button-Oalteb">
        <div className="button-i2601273864-MdU6bA valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const i2601273864120TimelineData = [
  {
    initial_state_name: "Property-1=Primary",
    root_element: ".i26012738-64120",
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

export default GetAQuoteButton222;
