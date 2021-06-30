import React from "react";
import Group86 from "../Group86";
import GetAQuoteButton222 from "../GetAQuoteButton222";
import "./HeaderWithBackground22.css";

function HeaderWithBackground22(props) {
  const {
    unselectedI2601273,
    unselectedI26012732,
    unselectedI26012733,
    unselectedI26012734,
    unselectedI26012735,
    text127,
    unselectedI26012736,
    unselectedI26012737,
    group86Props,
    getAQuoteButton22Props,
  } = props;

  return (
    <div className="header-with-background">
      <Group86 group85={group86Props.group85} whiteProps={group86Props.whiteProps} />
      <div className="frame-34">
        <div className="frame-27">
          <div className="unselected-i2601273 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI2601273}
          </div>
          <div className="unselected-i2601273-1 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI26012732}
          </div>
          <div className="unselected-i2601273-2 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI26012733}
          </div>
          <div className="unselected-i2601273-3 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI26012734}
          </div>
          <div className="unselected-i2601273-4 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI26012735}
          </div>
          <div className="selected">
            <div className="overlap-group1-1">
              <div className="rectangle-61"></div>
              <div className="text-56 valign-text-middle overpass-bold-shark-14px">{text127}</div>
            </div>
          </div>
          <div className="unselected-i2601273-5 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI26012736}
          </div>
          <div className="unselected-i2601273-6 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI26012737}
          </div>
        </div>
        <GetAQuoteButton222>{getAQuoteButton22Props.children}</GetAQuoteButton222>
      </div>
    </div>
  );
}

export default HeaderWithBackground22;
