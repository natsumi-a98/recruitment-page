import styled from "styled-components";
import FooterEntryButton from "./footerEntryButton";
import { Link } from "react-router-dom";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";

const FooterContainer = styled.footer`
  height: 100vh;
  position: relative;
`;

const CenterButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Message = styled.div`
  font-size: 48px;
  margin-bottom: 20px;
  text-shadow: 5px 5px 10px #000000;
`;

const FooterLinkWrapper = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  margin-top: 50px;
  text-align: center;
`;

const FooterLink = styled(Link)`
  font-weight: normal;
  font-size: 36px;
  text-decoration: none;
  color: #ffffff;
  -webkit-transition: 0.5s all;
  transition: 0.5s all;
  display: flex;
  align-items: center;

  &:hover {
    color: #00aeef;
  }
`;

const PlayArrowOutlinedIconStyled = styled(PlayArrowOutlinedIcon)`
  font-size: 48px !important;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  flex-direction: column;
`;

const NavItem = styled.li`
  font-size: 20px;
  cursor: pointer;
  position: relative;
  width: 100%;
  text-align: right;

  span {
    display: inline-block;
    position: relative;
  }

  span::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0%;
    height: 1px;
    background-color: white;
    transition: width 0.3s ease-in-out;
  }

  &:hover span::after {
    width: 100%;
  }

  &:hover {
    color: #ffffff;
  }
`;

const CompanyAddress = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  font-size: 14px;
  text-align: left;

  p {
    gap: 14px;
  }
`;

const Copyright = styled.div`
  position: absolute;
  bottom: 20px;
  right: 0;
  font-size: 14px;
  text-align: right;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Nav>
        <NavItem>
          <span>Top</span>
        </NavItem>
        <NavItem>
          <span>With AI</span>
        </NavItem>
        <NavItem>
          <span>Support</span>
        </NavItem>
        <NavItem>
          <span>Learn</span>
        </NavItem>
        <NavItem>
          <span>Data</span>
        </NavItem>
        <NavItem>
          <span>Flow</span>
        </NavItem>
      </Nav>
      <CenterButtonWrapper>
        <Message>あなたの未来を、ここから。</Message>
        <FooterEntryButton />
        <FooterLinkWrapper>
          <FooterLink to="https://fedeltaonline.com/">
            Corporate Site
            <PlayArrowOutlinedIconStyled />
          </FooterLink>
          <FooterLink to="https://service.fedeltaonline.com/">
            Service Site
            <PlayArrowOutlinedIconStyled />
          </FooterLink>
        </FooterLinkWrapper>
      </CenterButtonWrapper>
      <CompanyAddress>
        <p>アクセス</p>
        <p>
          〒104-0032
          <br />
          本社：東京都中央区八丁堀3丁目18-10
          <br />
          S-GATE FIT八丁堀9F
        </p>
        <p>TEL：03-6275-2080</p>
      </CompanyAddress>
      <Copyright>©FEDELTA Co., Ltd</Copyright>
    </FooterContainer>
  );
};

export default Footer;
