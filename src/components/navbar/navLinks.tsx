import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { actionTypes } from "../../reducers/AppReducer";
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
`;

const LinkItem = styled.li`
  color: white;
  height: 100%;
  padding: 0 1.1em;
  // color: #222;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;

  &:hover {
    // border-top: 2px solid #2ecc71;
    color: #14bba7;
  }
`;

// const LinkText = styled.a`
//   text-decoration: none;
//   color: inherit;
//   font-size: inherit;
// `;

export function NavLinks() {
  const {
    state: { isContactModalOpen },
    dispatch,
  } = useContext(AppContext);
  return (
    <NavLinksContainer>
      <LinksWrapper>
        <NavLink
          className="link-text"
          to="/home"
          activeClassName="link-text-active"
        >
          <LinkItem>Home</LinkItem>
        </NavLink>

        <NavLink
          className="link-text"
          to="/exchange"
          activeClassName="link-text-active"
        >
          <LinkItem>Exchange</LinkItem>
        </NavLink>

        <NavLink
          activeClassName="link-text-active"
          className="link-text"
          to="/p1"
        >
          <LinkItem>Coins</LinkItem>
        </NavLink>

        <NavLink
          className="link-text"
          to="/p3"
          activeClassName="link-text-active"
        >
          <LinkItem>Charts</LinkItem>
        </NavLink>

        <LinkItem
          onClick={() =>
            dispatch({
              type: actionTypes.SET_IS_CONTACT_MODAL_OPEN,
              payload: !isContactModalOpen,
            })
          }
        >
          <span className="link-text">Contact me</span>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
}
