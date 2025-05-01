import styled from "styled-components";
import media from "../../styles/mediaQuery";

const BaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: #ffffff;
  color: #0e0e0e;
  border: 2px solid #0e0e0e;
  text-align: center;
  cursor: pointer;
  -webkit-transition: 0.5s all;
  transition: 0.5s all;
  box-shadow: 0 5px 0 #0e0e0e;

  ${media.md`
    box-shadow: 0 3px 0 #0e0e0e;
  `}

  &:hover {
    background: #00aeef;
    color: #0e0e0e;
    transform: translateY(5px);
    box-shadow: none;

    ${media.md`
      transform: translateY(3px);
  `}
  }
`;

export default BaseButton;
