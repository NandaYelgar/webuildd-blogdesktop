import React from "react";
import Frame15783 from "../Frame15783";
import Frame53 from "../Frame53";
import Frame6 from "../Frame6";
import Frame7 from "../Frame7";
import "./Footer32.css";

function Footer32(props) {
  const { group32Props, frame5Props, frame6Props, frame7Props } = props;

  return (
    <div className="footer">
      <div className="frame-1585">
        <Frame15783
          overlapGroup1={group32Props.overlapGroup1}
          vector={group32Props.vector}
          vector2={group32Props.vector2}
          group86222Props={group32Props.group86222Props}
          facebookAppSymbol3Props={group32Props.facebookAppSymbol3Props}
          twitter3Props={group32Props.twitter3Props}
        />
        <Frame53 text40={frame5Props.text40} frame4Props={frame5Props.frame4Props} />
        <Frame6
          text48={frame6Props.text48}
          frame42Props={frame6Props.frame42Props}
          frame422Props={frame6Props.frame422Props}
        />
      </div>
      <Frame7 text56={frame7Props.text56} frame4Props={frame7Props.frame4Props} />
    </div>
  );
}

export default Footer32;
