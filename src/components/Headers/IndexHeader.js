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
/*eslint-disable*/
import React, { useState } from "react";

// reactstrap components
import { Container } from "reactstrap";

// typing package
import Typing from 'react-typing-animation';

// core components

function IndexHeader() {

  const [isHovered, setIsHovered] = useState(false);

  const AnimatedName = () => (
    <Typing cursorClassName="presentation-cursor" cursor="_">
      <span>Darya Sudas</span>
    </Typing>
  );

  const AnimatedNameRussian = () => (
    <Typing cursorClassName="presentation-cursor" cursor="_">
      <span>Дарья Судас</span>
    </Typing>
  );

  return (
    <>
      <div
        className="page-header"
      >
        <div className="content-left">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>{isHovered ? <AnimatedNameRussian /> : <AnimatedName /> }</h1>
            </div>
            <h2 className="presentation-subtitle text-left">
            Your next-door UX designer 
            </h2>
          </Container>
        </div>
        <div className="presentation-kitten">
          <img
            alt="Kitten"
            className="img-no-padding img-responsive"
            src={require("assets/img/kitty.gif")}
          />
        </div>
      </div>
    </>
  );
}

export default IndexHeader;
