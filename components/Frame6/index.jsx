import React from "react";
import Frame42 from "../Frame42";
import "./Frame6.css";

function Frame6(props) {
  const { text48, frame42Props, frame422Props } = props;

  return (
    <div className="frame-6">
      <div className="text-40 valign-text-middle typographyheadlineh5-extrabold-20">{text48}</div>
      <div className="frame-1577">
        <Frame42
          text49={frame42Props.text49}
          text50={frame42Props.text50}
          place={frame42Props.place}
          text51={frame42Props.text51}
          text52={frame42Props.text52}
        />
        <Frame42
          text49={frame422Props.text49}
          text50={frame422Props.text50}
          place={frame422Props.place}
          text51={frame422Props.text51}
          text52={frame422Props.text52}
          className={frame422Props.className}
        />
      </div>
    </div>
  );
}

export default Frame6;
