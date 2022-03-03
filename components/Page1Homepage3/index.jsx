import React from "react";
import Bg from "../Bg";
import "./Page1Homepage3.css";

function Page1Homepage3(props) {
  const {
    spanText1,
    heroblock,
    spanText2,
    spanText3,
    artists,
    spanText4,
    bg,
    spanText5,
    spanText6,
    spanText7,
    bgProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="page1homepage screen">
        <div className="overlap-group4-3">
          <Bg src={bgProps.src} className={bgProps.className} />
          <div className="artists-1 futura-bold-white-100px">
            <span className="futura-bold-white-100px">{spanText1}</span>
          </div>
          <div className="hero-block" style={{ backgroundImage: `url(${heroblock})` }}>
            <div className="overlap-group1-4">
              <div className="date futura-bold-white-80px">
                <span className="futura-bold-white-80px">{spanText2}</span>
              </div>
              <div className="overlap-group-5">
                <div className="get-tickets-button-text-1 futura-bold-white-60px">
                  <span className="futura-bold-white-60px">{spanText3}</span>
                </div>
              </div>
            </div>
          </div>
          <img className="artists-2" src={artists} />
          <div className="overlap-group2-4 galvji-bold-white-30px">
            <div className="about-us-7">
              <span className="galvji-bold-white-30px">{spanText4}</span>
            </div>
            <img className="logo-5" src={bg} />
            <div className="shop-7">
              <span className="galvji-bold-white-30px">{spanText5}</span>
            </div>
          </div>
          <div className="overlap-group3-5 futura-medium-white-40px">
            <div className="shop-8">
              <span className="futura-medium-white-40px">{spanText6}</span>
            </div>
            <div className="about-us-8">
              <span className="futura-medium-white-40px">{spanText7}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1Homepage3;
