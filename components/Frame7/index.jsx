import React from "react";
import Frame4 from "../Frame4";
import "./Frame7.css";

function Frame7(props) {
  const { text56, frame4Props } = props;

  return (
    <div className="frame-7">
      <div className="text-48 valign-text-middle typographyheadlineh5-extrabold-20">{text56}</div>
      <Frame4
        text41={frame4Props.text41}
        text42={frame4Props.text42}
        text43={frame4Props.text43}
        text44={frame4Props.text44}
        text45={frame4Props.text45}
        text46={frame4Props.text46}
        text47={frame4Props.text47}
      />
    </div>
  );
}

export default Frame7;
