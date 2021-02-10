/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect } from "react";

// reactstrap components
import {
  Button,
  Navbar,
  NavItem,
  NavLink,
  Nav,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// index sections
import SectionButtons from "views/index-sections/SectionButtons.js";
import SectionNavbars from "views/index-sections/SectionNavbars.js";
import SectionNavigation from "views/index-sections/SectionNavigation.js";
import SectionProgress from "views/index-sections/SectionProgress.js";
import SectionNotifications from "views/index-sections/SectionNotifications.js";
import SectionTypography from "views/index-sections/SectionTypography.js";
import SectionJavaScript from "views/index-sections/SectionJavaScript.js";
import SectionCarousel from "views/index-sections/SectionCarousel.js";
import SectionNucleoIcons from "views/index-sections/SectionNucleoIcons.js";
import SectionDark from "views/index-sections/SectionDark.js";
import SectionLogin from "views/index-sections/SectionLogin.js";
import SectionExamples from "views/index-sections/SectionExamples.js";
import SectionDownload from "views/index-sections/SectionDownload.js";

// projects
import Otzi from "views/projects/Otzi.js";

function Index() {

  document.documentElement.classList.remove("nav-open");
  useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      {/* <IndexNavbar /> */}
      <IndexHeader />
      <div className="main">
        <Button color="info" type="button">
          Default
        </Button>
        <Button className="btn-link ml-1" color="info" type="button">
          Simple
        </Button>
        <Otzi />
        {/* <SectionNavigation />
        <SectionButtons />
        <SectionNavbars />
        <SectionNavigation />
        <SectionProgress />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavaScript />
        <SectionCarousel />
        <SectionNucleoIcons />
        <SectionDark />
        <SectionLogin />
        <SectionExamples />
        <SectionDownload />
        <DemoFooter /> */}
      </div>
    </>
  );
}

export default Index;
