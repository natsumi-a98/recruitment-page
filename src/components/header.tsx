import styled from "styled-components";
import HeaderEntryButton from "./headerEntryButton";

const HeaderContainer = styled.header`
  align-items: center;
  display: flex;
  height: 100px;
  width: 100%;
  max-width: 1300px;
  justify-content: space-between;
  position: fixed;
  top: 0;
  margin: 0 auto;
  z-index: 1000;
`;

const Logo = styled.img`
  height: 42px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 50px;
  list-style: none;
  padding: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const NavItem = styled.li`
  font-size: 20px;
  cursor: pointer;
  position: relative;
  display: inline-block;

  &:hover {
    color: #ffffff;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 1px;
    background-color: white;
    transition: width 0.3s ease-in-out;
  }
  &:hover::after {
    width: 100%;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo
        src="../../public/images/recruit-logo.ac423ca5.png"
        alt="FEDELTA_リクルートページロゴ"
      />
      <Nav>
        <NavItem>Top</NavItem>
        <NavItem>With AI</NavItem>
        <NavItem>Support</NavItem>
        <NavItem>Learn</NavItem>
        <NavItem>Data</NavItem>
        <NavItem>Flow</NavItem>
      </Nav>
      <HeaderEntryButton />
    </HeaderContainer>
  );
};


export default Header;
