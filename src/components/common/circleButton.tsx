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

  svg {
    font-size: 32px !important;
  }

  ${media.mobile`
    width: 190px;
    height: 190px;
    font-size: 24px;

    svg {
      font-size: 24px !important;
    }
  `}
`;

export default CircleButton;
