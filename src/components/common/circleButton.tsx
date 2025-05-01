import styled from "styled-components";
import BaseButton from "./baseButton";
import media from "../../styles/mediaQuery";

const CircleButton = styled(BaseButton)<{ onClick?: () => void }>`
  width: 260px;
  height: 260px;
  border-radius: 50%;
  padding: 0;
  flex-direction: column;
  font-size: 32px;
  font-weight: normal;
  flex-direction: row;

  ${media.md`
    width: 150px;
    height: 150px;
    font-size: 20px;
  `}
`;

export default CircleButton;
