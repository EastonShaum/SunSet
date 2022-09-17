import React from "react";
import "./Benefit2.css";

function Benefit2(props) {
  const { className } = props;

  return (
    <div className={`benefit-2 ${className || ""}`}>
      <img alt=""  className="icon-key" src="/img/key-icon-1-1@2x.png" />
      <div className="ownership opensans-semi-bold-navy-blue-24px">Ownership</div>
      <div className="why-homeowners-are-c opensans-normal-black-20px">
        Why homeowners are choosing to own thier power vs purchase agreements.
      </div>
    </div>
  );
}

export default Benefit2;
