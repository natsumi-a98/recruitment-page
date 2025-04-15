import styled from "styled-components";
import HeaderEntryButton from "./headerEntryButton";

const navItems = [
  { label: "Top", id: "main-visual" },
  { label: "With AI", id: "with-ai-section" },
  { label: "Support", id: "support-section" },
  { label: "Learn", id: "learn-section" },
  { label: "Data", id: "data-section" },
  { label: "Flow", id: "flow-section" },
];

const HeaderContainer = styled.header`
  align-items: center;
  display: flex;
  height: 100px;
  width: 100%;
  max-width: 1300px;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
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

const Header = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <HeaderContainer>
      <Logo
        src="../../public/images/recruit-logo.ac423ca5.png"
        alt="FEDELTA_リクルートページロゴ"
      />

      <Nav>
        {navItems.map((item) => (
          <NavItem key={item.id} onClick={() => scrollToSection(item.id)}>
            <span>{item.label}</span>
          </NavItem>
        ))}
      </Nav>

      <HeaderEntryButton />
    </HeaderContainer>
  );
};


export default Header;
