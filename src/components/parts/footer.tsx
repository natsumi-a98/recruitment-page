import styled, { keyframes } from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import media from "../../styles/mediaQuery";
import { EXTERNAL_LINKS } from "../../constants/urls";
import EntryButton from "../common/entryButton";

const navItems = [
  { label: "Top", id: "main-visual" },
  { label: "With AI", id: "with-ai-section" },
  { label: "Support", id: "support-section" },
  { label: "Learn", id: "learn-section" },
  { label: "Data", id: "data-section" },
  { label: "Flow", id: "flow-section" },
];

const FooterContainer = styled.footer`
  width: 100vw;
  height: 660px;
  margin: 0 calc(50% - 50vw);
  margin-top: 80px;
  padding: 20px;
  position: relative;
  background-color: #0e0e0e;
  color: #ffffff;

  ${media.md`
    height: 200px;
  `}

  ${media.sm`
    height: 150px;
    margin-top: 40px;
  `}
`;

const FooterItem = styled.div`
  height: 100%;
  margin: 0 auto;
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

  ${media.md`
    display: none;
  `}
`;

const FooterLinkWrapper = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  margin-top: 50px;
  text-align: center;

  ${media.md`
    display: none;
  `}
`;

const FooterLink = styled.a`
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
  opacity: 1;
  transition: opacity 0.3s ease-in-out;

  ${media.lg`
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  `}

  ${media.md`
    display: none;
  `}
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

const AccessInfo = styled.div`
  position: absolute;
  font-size: 14px;
  bottom: 0;
  text-align: left;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
  p {
    margin: 20px 0 0;
  }

  @media (max-width: 798px) {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  ${media.md`
    display: none;
  `}
`;

const Copyright = styled.small`
  position: absolute;
  font-size: 14px;
  right: 0;
  bottom: 0;
  text-align: right;

  ${media.md`
    right: 5px;
    bottom: 0;
  `}
`;

const sway = keyframes`
  0% { transform: rotate(30deg) translateX(0); }
  50% { transform: rotate(30deg) translateX(15px); }
  100% { transform: rotate(30deg) translateX(0); }
`;

const swayMobile = keyframes`
  0% { transform: rotate(15deg) translateX(0); }
  50% { transform: rotate(15deg) translateX(15px); }
  100% { transform: rotate(15deg) translateX(0); }
`;

const RobotImage = styled.img`
  position: absolute;
  margin: 0 calc(50% - 50vw);
  left: 0;
  bottom: 130px;
  height: 27vw;
  animation: ${sway} 1.5s ease-in-out infinite;
  z-index: 200;

  ${media.xl`
    bottom: 180px;
    height: 20vw;
    animation: ${swayMobile} 1.5s ease-in-out infinite;
  `}

  ${media.md`
    left: 80px;
    bottom: 20px;
    height: 20vw;
    animation: ${swayMobile} 1.5s ease-in-out infinite;
  `}

  ${media.sm`
    left: 10%;
  `}
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
          <EntryButton variant="large" />
          <FooterLinkWrapper>
            <FooterLink
              href={EXTERNAL_LINKS.CORPORATE_SITE}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowForwardIosIcon sx={{ fontSize: 36 }} />
              Corporate Site
            </FooterLink>
            <FooterLink
              href={EXTERNAL_LINKS.SERVICE_SITE}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowForwardIosIcon sx={{ fontSize: 36 }} />
              Service Site
            </FooterLink>
          </FooterLinkWrapper>
          <EntryButton variant="small" />
        </CenterButtonWrapper>

        <RobotImage src="/images/robot-right.png" alt="右を指しているロボ" />
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
      </FooterItem>
    </FooterContainer>
  );
};

export default Footer;
