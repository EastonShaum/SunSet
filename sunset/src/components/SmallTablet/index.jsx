import React from "react";
import Benefit2 from "../Benefit2";
import Benefit3 from "../Benefit3";
import "./SmallTablet.css";

function SmallTablet(props) {
  const {
    saveMoneyAndOwnY,
    spanText1,
    spanText2,
    bookConsultation,
    spanText3,
    spanText4,
    spanText5,
    funnelPerson2Png1,
    moneySymbolPaid1,
    costSavings,
    wellDiscussHowSo,
    overlapGroup1,
    businessManSuitPng1,
    spanText6,
    spanText7,
    solarProfessional,
    line1,
    x5YearsExperience,
    spanText8,
    spanText9,
    spanText10,
    leaveYourInfoToScheduleACall,
    spanText11,
    spanText12,
    email,
    phone,
    message,
    bookAConsultation,
    solarPanelsWhiteBackground1,
    benefit2Props,
    benefit3Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="small-tablet screen">
        <div className="overlap-group6-3">
          <div className="first-section-3"></div>
          <div className="save-money-and-own-y-3 opensans-normal-white-20px">{saveMoneyAndOwnY}</div>
          <div className="solar-energy-3 opensans-normal-white-32px">
            <span className="opensans-normal-white-32px">{spanText1}</span>
            <span className="opensans-normal-white-40px">{spanText2}</span>
          </div>
          <div className="overlap-group-6">
            <div className="button-box-1"></div>
            <div className="book-consultation-3 valign-text-middle opensans-normal-navy-blue-24px">
              {bookConsultation}
            </div>
          </div>
          <p className="sign-up-for-a-free-c-3 valign-text-middle opensans-normal-white-16px">
            <span>
              <span className="opensans-normal-white-16px">{spanText3}</span>
              <span className="opensans-bold-white-16px">{spanText4}</span>
              <span className="opensans-normal-white-16px">{spanText5}</span>
            </span>
          </p>
          <img className="funnel-person-2-png-1-3" src={funnelPerson2Png1} />
        </div>
        <div className="benefit-container">
          <div className="benefit-1-1">
            <img className="money-symbol-paid-1-3" src={moneySymbolPaid1} />
            <div className="cost-savings-3 opensans-semi-bold-navy-blue-24px">{costSavings}</div>
            <div className="well-discuss-how-so-3 opensans-normal-black-20px">{wellDiscussHowSo}</div>
          </div>
          <Benefit2 className={benefit2Props.className} />
          <Benefit3 className={benefit3Props.className} />
        </div>
        <div className="overlap-group8-1">
          <div className="overlap-group1-6" style={{ backgroundImage: `url(${overlapGroup1})` }}>
            <img className="business-man-suit-png-1-3" src={businessManSuitPng1} />
          </div>
          <div className="meet-john-section-3">
            <div className="meet-john-2">
              <span className="span0-2">{spanText6}</span>
              <span className="span1-4">{spanText7}</span>
            </div>
            <div className="overlap-group2-5">
              <div className="solar-professional-3">{solarProfessional}</div>
              <img className="line-1-3" src={line1} />
            </div>
            <p className="x5-years-experience-3">{x5YearsExperience}</p>
          </div>
        </div>
        <div className="going-green-has-never-been-this-easy-3">
          <span className="opensans-normal-black-32px">{spanText8}</span>
          <span className="span1-5">{spanText9}</span>
          <span className="opensans-normal-black-32px">{spanText10}</span>
        </div>
        <div className="lead-form-3">
          <div className="overlap-group3-3">
            <div className="leave-your-info-to-schedule-a-call-3 opensans-normal-white-36px">
              {leaveYourInfoToScheduleACall}
            </div>
            <div className="overlap-group4-3">
              <div className="place-3 valign-text-middle opensans-normal-granite-gray-24px">
                <span>
                  <span className="opensans-normal-granite-gray-24px">{spanText11}</span>
                  <span className="opensans-semi-bold-granite-gray-20px">{spanText12}</span>
                </span>
              </div>
            </div>
            <div className="overlap-group-container-3">
              <div className="overlap-group1-7">
                <div className="email-3 valign-text-middle opensans-normal-granite-gray-24px">{email}</div>
              </div>
              <div className="overlap-group5-3">
                <div className="rectangle-4-3"></div>
                <div className="phone-4 valign-text-middle opensans-normal-granite-gray-24px">{phone}</div>
              </div>
            </div>
            <div className="overlap-group2-6">
              <div className="message-3 valign-text-middle opensans-normal-granite-gray-24px">{message}</div>
            </div>
            <div className="overlap-group-7">
              <div className="book-a-consultation-3 valign-text-middle opensans-normal-navy-blue-24px">
                {bookAConsultation}
              </div>
            </div>
          </div>
        </div>
        <img className="solar-panels-white-background-1-3" src={solarPanelsWhiteBackground1} />
      </div>
    </div>
  );
}

export default SmallTablet;
