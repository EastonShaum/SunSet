import React from "react";
import LeadForm from "../LeadForm";
import "./LargeTablet.css";

function LargeTablet(props) {
  const {
    saveMoneyAndOwnY,
    solarEnergy,
    bookConsultation,
    spanText1,
    spanText2,
    spanText3,
    funnelPerson2Png1,
    duringThisFreePre,
    moneySymbolPaid1,
    iconKey,
    costSavings,
    ownership,
    wellDiscussHowSo,
    taxReceiptIcon1,
    whyHomeownersAreC,
    taxSavings,
    howYouCanApplyYo,
    overlapGroup1,
    businessManSuitPng1,
    spanText4,
    spanText5,
    solarProfessional,
    line1,
    x5YearsExperience,
    spanText6,
    spanText7,
    spanText8,
    solarPanelsWhiteBackground1,
    leadFormProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="large-tablet screen">
        <div className="flex-col-1">
          <div className="overlap-group6-2">
            <div className="first-section-2"></div>
            <div className="save-money-and-own-y-2">{saveMoneyAndOwnY}</div>
            <div className="solar-energy-2 opensans-normal-white-40px">{solarEnergy}</div>
            <div className="overlap-group-5">
              <div className="book-consultation-2 valign-text-middle opensans-normal-navy-blue-24px">
                {bookConsultation}
              </div>
            </div>
            <p className="sign-up-for-a-free-c-2 valign-text-middle opensans-normal-white-16px">
              <span>
                <span className="opensans-normal-white-16px">{spanText1}</span>
                <span className="opensans-bold-white-16px">{spanText2}</span>
                <span className="opensans-normal-white-16px">{spanText3}</span>
              </span>
            </p>
            <img className="funnel-person-2-png-1-2" src={funnelPerson2Png1} />
          </div>
          <div className="during-this-free-pre-2">{duringThisFreePre}</div>
          <div className="flex-row-2">
            <img className="money-symbol-paid-1-2" src={moneySymbolPaid1} />
            <img className="icon-key-3" src={iconKey} />
          </div>
          <div className="flex-row-3 opensans-semi-bold-navy-blue-24px">
            <div className="cost-savings-2">{costSavings}</div>
            <div className="ownership-3">{ownership}</div>
          </div>
        </div>
        <div className="flex-row-4 opensans-normal-black-20px">
          <div className="well-discuss-how-so-2">{wellDiscussHowSo}</div>
          <img className="tax-receipt-icon-1-3" src={taxReceiptIcon1} />
          <div className="why-homeowners-are-c-3">{whyHomeownersAreC}</div>
        </div>
        <div className="tax-savings-3 opensans-semi-bold-navy-blue-24px">{taxSavings}</div>
        <div className="overlap-group7-2">
          <div className="how-you-can-apply-yo-3 opensans-normal-black-24px">{howYouCanApplyYo}</div>
          <div className="overlap-group1-5" style={{ backgroundImage: `url(${overlapGroup1})` }}>
            <img className="business-man-suit-png-1-2" src={businessManSuitPng1} />
          </div>
          <div className="meet-john-section-2">
            <div className="meet-john-1">
              <span className="span0-1">{spanText4}</span>
              <span className="span1-3">{spanText5}</span>
            </div>
            <div className="overlap-group2-4">
              <div className="solar-professional-2">{solarProfessional}</div>
              <img className="line-1-2" src={line1} />
            </div>
            <div className="x5-years-experience-2">{x5YearsExperience}</div>
          </div>
        </div>
        <div className="going-green-has-never-been-this-easy-2 opensans-normal-white-36px-2">
          <span className="opensans-normal-black-36px">{spanText6}</span>
          <span className="opensans-normal-forest-green-36px">{spanText7}</span>
          <span className="opensans-normal-black-36px">{spanText8}</span>
        </div>
        <LeadForm className={leadFormProps.className} />
        <img className="solar-panels-white-background-1-2" src={solarPanelsWhiteBackground1} />
      </div>
    </div>
  );
}

export default LargeTablet;
