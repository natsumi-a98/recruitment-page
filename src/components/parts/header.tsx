import { useEffect, useState } from "react";
import styled from "styled-components";
import media from "../../styles/mediaQuery";
import EntryButton from "../common/entryButton";

const navItems = [
  { label: "Top", id: "main-visual" },
  { label: "With AI", id: "with-ai-section" },
  { label: "Support", id: "support-section" },
  { label: "Learn", id: "learn-section" },
  { label: "Data", id: "data-section" },
  { label: "Flow", id: "flow-section" },
];

interface HamburgerIconProps {
  $isOpen: boolean;
}

interface MobileNavProps {
  $isOpen: boolean;
}

const HeaderWrapper = styled.header`
  width: 100%;
  height: 100px;
  position: fixed;
  background-color: #ffffff;
  padding: 0 20px;
  z-index: 1000;

  ${media.lg`
    height: 100px;
    position: relative;
    background-color: transparent;
    padding: 0;
  `}

  ${media.md`
    height: 55px;
  `}
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  z-index: 1000;

  ${media.md`
    height: 55px;
  `}
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  ${media.md`
    position: relative;
  `}
`;

const Logo = styled.img`
  width: auto;
  height: 60px;

  ${media.md`
    height: 42px;
  `}
`;

const Nav = styled.nav`
  display: flex;
  gap: 50px;
  list-style: none;
  padding: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  transition: gap 0.5s ease-in-out;

  ${media.xl`
    gap: 18px;
    transition: gap 0.5s ease-in-out;
  `}

  ${media.lg`
    display: none;
  `}

  ${media.md`
    display: none;
  `}
`;

const NavItem = styled.li`
  font-size: 20px;
  cursor: pointer;
  position: relative;
  display: inline-block;

  &:hover {
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background-color: #00e676;
    transition: width 0.3s ease-in-out;
  }
  &:hover::after {
    width: 100%;
  }
`;

const HamburgerIcon = styled.div<HamburgerIconProps>`
  display: none;

  ${media.lg`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    background-color: #ffffff;
    border: 2px solid #0e0e0e;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 2000;
    cursor: pointer;
  `}

  ${media.md`
    width: 55px;
    height: 55px;
  `}

  span {
    position: absolute;
    width: 30px;
    height: 2px;
    background-color: #0e0e0e;
    transition: all 0.3s ease;
  }

  span:nth-child(1) {
    transform: ${(props) =>
      props.$isOpen ? "rotate(45deg)" : "translateY(-8px)"};
  }

  span:nth-child(2) {
    opacity: ${(props) => (props.$isOpen ? 0 : 1)};
  }

  span:nth-child(3) {
    transform: ${(props) =>
      props.$isOpen ? "rotate(-45deg)" : "translateY(8px)"};
  }
`;

const MobileNav = styled.div<MobileNavProps>`
  display: flex;
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  flex-direction: column;
  align-items: flex-start;
  background-color: #b0bec5;
  position: fixed;
  top: 0;
  right: ${(props) => (props.$isOpen ? "0" : "-100%")};
  width: 80%;
  height: 100vh;
  padding: 100px 20px;
  box-sizing: border-box;
  transition: right 0.3s ease-in-out, opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out;

  ${media.md`
    position: fixed;
  `}
`;

const MobileNavItem = styled.div`
  font-size: 20px;
  cursor: pointer;
  width: 100%;
  padding: 10px 0;
  border-bottom: 2px solid #0e0e0e;
  text-align: left;
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LogoWrapper>
          <Logo
            src="/images/recruit-logo.ac423ca5.png"
            alt="FEDELTA_リクルートページロゴ"
          />
        </LogoWrapper>
        <Nav>
          {navItems.map((item) => (
            <NavItem key={item.id} onClick={() => scrollToSection(item.id)}>
              <span>{item.label}</span>
            </NavItem>
          ))}
        </Nav>

        {/* ハンバーガーメニューアイコン */}
        <HamburgerIcon onClick={toggleMenu} $isOpen={isMenuOpen}>
          <span />
          <span />
          <span />
        </HamburgerIcon>

        {/* モバイル版ナビゲーション */}
        <MobileNav $isOpen={isMenuOpen}>
          {navItems.map((item) => (
            <MobileNavItem
              key={item.id}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </MobileNavItem>
          ))}
        </MobileNav>

        <EntryButton variant="medium" />
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
