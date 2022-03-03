import React from "react";
import { Link } from "react-router-dom";
import Bg from "../Bg";
import "./Page1Homepage.css";

function Page1Homepage(props) {
  const {
    clBg111,
    clBg18,
    clBg19,
    clBg112,
    artists,
    heroImage,
    front,
    getticketsButtontext,
    overlapGroup2,
    rectangle61,
    foofighters1,
    x05Mgmt1,
    overlapGroup3,
    rectangle62,
    foofighters2,
    x08Foofighters1,
    overlapGroup4,
    rectangle63,
    articMonkeys1,
    x02Daftpunk1,
    overlapGroup5,
    rectangle64,
    theChemicalBrothers,
    x06Thechemicalbrothers1,
    overlapGroup6,
    rectangle65,
    articMonkeys2,
    x07Articmonkeys1,
    overlapGroup7,
    rectangle66,
    theStrokes,
    x03Thestrokes1,
    overlapGroup8,
    rectangle67,
    rhcp,
    x04Redhotchilipeppers1,
    overlapGroup9,
    rectangle68,
    starBomb,
    x01Starbomb1,
    overlapGroup10,
    rectangle69,
    cagetheelephan,
    cagetheelephant,
    infoCoinlineCom,
    coinline,
    text2,
    aboutUs,
    logo,
    shop,
    bgProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="page1-homepage screen">
        <div className="overlap-group13">
          <div className="bg">
            <img className="cl-bg1" src={clBg111} />
            <img className="cl-bg1" src={clBg18} />
            <img className="cl-bg1" src={clBg19} />
            <img className="cl-bg1" src={clBg112} />
          </div>
          <div className="cast animate-enter" show-on-scroll>
            <div className="artists futura-medium-white-100px">{artists}</div>
          </div>
          <div className="overlap-group-1">
            <img className="hero-image" src={heroImage} />
            <div className="widget-wrapper">
              <Bg src={bgProps.src} />
            </div>
            <img className="front" src={front} />
          </div>
          <Link to="/page2-shop">
            <div className="button">
              <div className="overlap-group1">
                <div className="get-tickets-button-text">{getticketsButtontext}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group2" style={{ backgroundImage: `url(${overlapGroup2})` }}>
            <img className="rectangle-6-3" src={rectangle61} />
            <div className="foofighters futura-medium-white-48px">{foofighters1}</div>
          </div>
          <img className="x05-mgmt-1" src={x05Mgmt1} />
          <div className="overlap-group3-1" style={{ backgroundImage: `url(${overlapGroup3})` }}>
            <img className="rectangle-6" src={rectangle62} />
            <div className="foofighters-1 futura-medium-white-48px">{foofighters2}</div>
          </div>
          <img className="x08-foofighters-1" src={x08Foofighters1} />
          <div className="overlap-group4-1" style={{ backgroundImage: `url(${overlapGroup4})` }}>
            <img className="rectangle-6-1" src={rectangle63} />
            <div className="artic-monkeys futura-medium-white-48px">{articMonkeys1}</div>
          </div>
          <img className="x02-daftpunk-1" src={x02Daftpunk1} />
          <div className="overlap-group5-1" style={{ backgroundImage: `url(${overlapGroup5})` }}>
            <img className="rectangle-6-2" src={rectangle64} />
            <div className="the-chemical-brothers futura-medium-white-48px">{theChemicalBrothers}</div>
          </div>
          <img className="x06-thechemicalbrothers-1" src={x06Thechemicalbrothers1} />
          <div className="overlap-group6-1" style={{ backgroundImage: `url(${overlapGroup6})` }}>
            <img className="rectangle-6-4" src={rectangle65} />
            <div className="artic-monkeys-1 futura-medium-white-48px">{articMonkeys2}</div>
          </div>
          <img className="x07-articmonkeys-1" src={x07Articmonkeys1} />
          <div className="overlap-group7" style={{ backgroundImage: `url(${overlapGroup7})` }}>
            <img className="rectangle-6-2" src={rectangle66} />
            <div className="the-strokes futura-medium-white-48px">{theStrokes}</div>
          </div>
          <img className="x03-thestrokes-1" src={x03Thestrokes1} />
          <div className="overlap-group8" style={{ backgroundImage: `url(${overlapGroup8})` }}>
            <img className="rectangle-6" src={rectangle67} />
            <div className="rhcp futura-medium-white-48px">{rhcp}</div>
          </div>
          <img className="x04-redhotchilipeppers-1" src={x04Redhotchilipeppers1} />
          <div className="overlap-group9" style={{ backgroundImage: `url(${overlapGroup9})` }}>
            <img className="rectangle-6-5" src={rectangle68} />
            <div className="star-bomb futura-medium-white-48px">{starBomb}</div>
          </div>
          <img className="x01-starbomb-1" src={x01Starbomb1} />
          <div className="overlap-group10" style={{ backgroundImage: `url(${overlapGroup10})` }}>
            <img className="rectangle-6-1" src={rectangle69} />
            <div className="cage-the-elephan futura-medium-white-48px">{cagetheelephan}</div>
          </div>
          <img className="cagetheelephant" src={cagetheelephant} />
          <div className="overlap-group11 futura-medium-white-30px">
            <div className="infocoinlinecom-1">{infoCoinlineCom}</div>
            <div className="coin-line-1">{coinline}</div>
            <div className="text-2">{text2}</div>
          </div>
        </div>
        <div className="header-2">
          <div className="overlap-group12">
            <Link to="/page3-aboutus">
              <div className="about-us-1 galvji-bold-white-25px">{aboutUs}</div>
            </Link>
            <img className="logo-1" src={logo} />
            <Link to="/page2-shop">
              <div className="shop-1 galvji-bold-white-25px">{shop}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1Homepage;
