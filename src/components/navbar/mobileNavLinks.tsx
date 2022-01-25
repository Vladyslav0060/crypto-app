import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { Accessibility } from "./accessibility";
import Accessibility from "./accessibility";
import MenuToggle from "./menuToggle";
import { NavLink } from "react-router-dom";
const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 65px;
  left: 0;
  z-index: 100;
`;

const LinkItem = styled.li`
  color: white;
  width: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 16px;
  display: flex;

  margin-bottom: 10px;
`;

// const NavLink = styled.a`
//   text-decoration: none;
//   color: inherit;
//   font-size: inherit;
// `;

const Marginer = styled.div`
  height: 2em;
`;

export function MobileNavLinks() {
  const [isOpen, setOpen] = useState(false);
  const clickHandler = () => {
    setOpen(false);
  };
  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper id="links-wrapper">
          <LinkItem>
            <NavLink className="link-text" to="/home" onClick={clickHandler}>
              Home
            </NavLink>
          </LinkItem>
          <LinkItem>
            <NavLink className="link-text" to="/exchange">
              Exchange
            </NavLink>
          </LinkItem>
          <LinkItem>
            <NavLink className="link-text" to="/p1" onClick={clickHandler}>
              Coins
            </NavLink>
          </LinkItem>
          <LinkItem>
            <NavLink className="link-text" to="/p3" onClick={clickHandler}>
              Charts
            </NavLink>
          </LinkItem>
          <LinkItem>
            <NavLink className="link-text" to="/p2" onClick={clickHandler}>
              Contact me
            </NavLink>
          </LinkItem>
          <Marginer />
          <Accessibility setOpen={setOpen} />
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}
export default MobileNavLinks;
