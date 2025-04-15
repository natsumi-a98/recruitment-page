import styled from "styled-components";
import BaseButton from "./baseButton";

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

  span {
    white-space: nowrap;
  }
`;

export default CircleButton;
