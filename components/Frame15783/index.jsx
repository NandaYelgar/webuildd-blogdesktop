import React from "react";
import Group86222 from "../Group86222";
import Group324 from "../Group324";
import FacebookAppSymbol3 from "../FacebookAppSymbol3";
import Twitter3 from "../Twitter3";
import "./Frame15783.css";

function Frame15783(props) {
  const { overlapGroup1, vector, vector2, group86222Props, facebookAppSymbol3Props, twitter3Props } = props;

  return (
    <div className="frame-1578">
      <Group86222 group85={group86222Props.group85} whiteProps={group86222Props.whiteProps} />
      <div className="frame-1584">
        <Group324 />
        <div className="frame-1583">
          <FacebookAppSymbol3 src={facebookAppSymbol3Props.src} />
          <div className="instagram">
            <div className="overlap-group1-2" style={{ backgroundImage: `url(${overlapGroup1})` }}>
              <img className="vector-3" src={vector} />
              <img className="vector-4" src={vector2} />
            </div>
          </div>
          <Twitter3 src={twitter3Props.src} />
        </div>
      </div>
    </div>
  );
}

export default Frame15783;
