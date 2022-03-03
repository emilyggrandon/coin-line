import React from "react";
import Bg from "../Bg";
import "./Page3AboutUs3.css";

function Page3AboutUs3(props) {
  const {
    spanText1,
    spanText2,
    spanText3,
    image3,
    spanText4,
    brooklynhistory,
    overlapGroup1,
    bg,
    spanText5,
    spanText6,
    brooklyn,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
    bgProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="page3aboutus screen">
        <div className="overlap-group3-3">
          <Bg src={bgProps.src} className={bgProps.className} />
          <div className="overlap-group-3 futura-medium-white-40px">
            <div className="shop-3">
              <span className="futura-medium-white-40px">{spanText1}</span>
            </div>
            <div className="about-us-3">
              <span className="futura-medium-white-40px">{spanText2}</span>
            </div>
          </div>
          <div className="what-to-do-1">
            <div className="title-4 futura-bold-white-91px">
              <span className="futura-bold-white-91px">{spanText3}</span>
            </div>
            <img className="image-3" src={image3} />
          </div>
          <div className="history-1">
            <div className="title-5 futura-bold-white-100px">
              <span className="futura-bold-white-100px">{spanText4}</span>
            </div>
            <img className="brooklyn-history" src={brooklynhistory} />
          </div>
          <div className="overlap-group1-2" style={{ backgroundImage: `url(${overlapGroup1})` }}>
            <img className="brooklyn" src={bg} />
            <div className="back-contrast-1"></div>
            <div className="title-6 futura-bold-white-100px">
              <span className="futura-bold-white-100px">{spanText5}</span>
            </div>
          </div>
          <div className="overlap-group2-2 galvji-bold-white-30px">
            <div className="about-us-4">
              <span className="galvji-bold-white-30px">{spanText6}</span>
            </div>
            <img className="logo-3" src={brooklyn} />
            <div className="shop-4">
              <span className="galvji-bold-white-30px">{spanText7}</span>
            </div>
          </div>
          <div className="welcome-to-coin-line-1 futura-bold-white-40px">
            <span className="futura-bold-white-40px">{spanText8}</span>
          </div>
          <div className="if-you-are-unfamilia roboto-regular-normal-white-38px">
            <span className="roboto-regular-normal-white-38px">{spanText9}</span>
          </div>
          <div className="surname-1 roboto-regular-normal-white-40px">
            <span className="roboto-regular-normal-white-40px">{spanText10}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page3AboutUs3;
