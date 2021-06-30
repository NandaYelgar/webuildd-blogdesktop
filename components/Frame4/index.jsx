import React from "react";
import "./Frame4.css";

function Frame4(props) {
  const { text41, text42, text43, text44, text45, text46, text47 } = props;

  return (
    <div className="frame-4">
      <div className="text-5 valign-text-middle typographybody16-regular">{text41}</div>
      <div className="text-6 valign-text-middle typographybody16-regular">{text42}</div>
      <div className="text-6 valign-text-middle typographybody16-regular">{text43}</div>
      <div className="text-6 valign-text-middle typographybody16-regular">{text44}</div>
      <div className="text-6 valign-text-middle typographybody16-regular">{text45}</div>
      <div className="text-6 valign-text-middle typographybody16-regular">{text46}</div>
      <div className="text-6 valign-text-middle typographybody16-regular">{text47}</div>
    </div>
  );
}

export default Frame4;
