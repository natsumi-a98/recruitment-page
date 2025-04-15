import styled from "styled-components";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FooterEntryButton from "./footerEntryButton";

const navItems = [
  { label: "Top", id: "main-visual" },
  { label: "With AI", id: "with-ai-section" },
  { label: "Support", id: "support-section" },
  { label: "Learn", id: "learn-section" },
  { label: "Data", id: "data-section" },
  { label: "Flow", id: "flow-section" },
];

const FooterContainer = styled.footer`
  height: 660px;
  margin: 0 calc(50% - 50vw);
  margin-top: 80px;
  width: 100vw;
  position: relative;
  background-color: #0e0e0e;
  color: #ffffff;
`;

const FooterItem = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  height: 100%;
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

const ArrowForwardIosIconStyled = styled(ArrowForwardIosIcon)`
  font-size: 36px !important;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  list-style: none;
  padding: 0;
`;

const NavItem = styled.li`
  font-size: 20px;
  cursor: pointer;
  text-align: right;
  position: relative;

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
    height: 3px;
    background-color: #00e676;
    transition: width 0.3s ease-in-out;
  }

  &:hover span::after {
    width: 100%;
  }

  &:hover {
  }
`;

const FooterTextWrapper = styled.footer`
  position: absolute;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  align-items: flex-end;
`;

const AccessInfo = styled.div`
  text-align: left;
  p {
    margin: 20px 0 0;
  }
`;

const Copyright = styled.small`
  text-align: right;
`;

const Footer = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <FooterContainer>
      <FooterItem>
        <Nav>
          {navItems.map((item) => (
            <NavItem key={item.id} onClick={() => scrollToSection(item.id)}>
              <span>{item.label}</span>
            </NavItem>
          ))}
        </Nav>

        <CenterButtonWrapper>
          <Message>あなたの未来を、ここから。</Message>
          <FooterEntryButton />
          <FooterLinkWrapper>
            <FooterLink to="https://fedeltaonline.com/">
              <ArrowForwardIosIconStyled />
              Corporate Site
            </FooterLink>
            <FooterLink to="https://service.fedeltaonline.com/">
              <ArrowForwardIosIconStyled />
              Service Site
            </FooterLink>
          </FooterLinkWrapper>
        </CenterButtonWrapper>

        <FooterTextWrapper>
          <AccessInfo>
            <p>アクセス</p>
            <p>
              〒104-0032
              <br />
              本社：東京都中央区八丁堀3丁目18-10
              <br />
              S-GATE FIT八丁堀9F
            </p>
            <p>TEL：03-6275-2080</p>
          </AccessInfo>
          <Copyright>&copy;FEDELTA Co., Ltd</Copyright>
        </FooterTextWrapper>
      </FooterItem>
    </FooterContainer>
  );
};

export default Footer;
