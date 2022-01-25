import { FC } from "react";
import styled from "styled-components";
import GreenlandLogoImg from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
  width: 29px;
  height: 29px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoText = styled.h2`
  font-size: 16px;
  margin: 0;
  margin-left: 4px;
  color: white;
  font-weight: 500;
`;

const Logo: FC = () => {
  return (
    <NavLink className="link-text" to="/home">
      <LogoWrapper>
        <LogoImg>
          <img src={GreenlandLogoImg} alt="Greenland logo" />
        </LogoImg>
        <LogoText>Cryptos</LogoText>
      </LogoWrapper>
    </NavLink>
  );
};
export default Logo;
