import React from "react";
import Plus from "../Plus";
import "./Frame1587.css";

function Frame1587(props) {
  const { text253, plusProps } = props;

  return (
    <div className="frame-1587">
      <div className="text-2 valign-text-middle typographybodycaption-14-semi-bold">{text253}</div>
      <Plus src={plusProps.src} />
    </div>
  );
}

export default Frame1587;
