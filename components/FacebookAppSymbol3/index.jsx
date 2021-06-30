import React from "react";
import "./FacebookAppSymbol3.css";

function FacebookAppSymbol3(props) {
  const { src } = props;

  return (
    <div className="facebook-app-symbol">
      <img className="f-1" src={src} />
    </div>
  );
}

export default FacebookAppSymbol3;
