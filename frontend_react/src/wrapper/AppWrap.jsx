import React from "react";
import { useLocation } from "react-router-dom";

import { SocialMedia } from "../components";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    const { pathname } = useLocation();
    const isRootPath = pathname === "/";

    return (
      <div id={idName} className={`app__container ${classNames}`}>

        <div className="app__wrapper app__flex">
          <Component />
        </div>

        {!isRootPath && <SocialMedia />}
        {/* <NavigationDots active={idName} /> */}
      </div>
    );
  };

export default AppWrap;
