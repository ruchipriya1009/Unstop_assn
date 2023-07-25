import React from "react";
import desk from "./assest/desk.png";
import bar from "./assest/bar.png";
import "./Mobile.css";
import DrawerRight from "./Rightd";
const Mobile = () => {
  return (
    <div className="nav_mob">
      <div className="nav_mob_1">
        <div className="nav_mob_3">
          {/* <img src={bar} /> */}
          <DrawerRight />
          <div className="name_mob">Assessment</div>
        </div>
        <img src={desk} />
      </div>
      <div className="nav_mob_2">
        <div >
          <div className="my_as_name">My Assessment</div>

          <div className="nav_hrs"></div>
        </div>

        <div>Unstop Assessment</div>
      </div>
      <hr />
    </div>
  );
};

export default Mobile;
